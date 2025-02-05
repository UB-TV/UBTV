interface DateFormatterOptions {
  includeTime?: boolean;
  strictParsing?: boolean;
}


export class DateParseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'DateParseError';
  }
}

export const formatDateForApi = (
  dateString: string,
  options: DateFormatterOptions = {}
): string => {
  const { includeTime = false, strictParsing = false } = options;

  if (!dateString) {
    throw new DateParseError('Date string is required');
  }

  const cleanedDate: string = dateString.trim();
  let parsedDate: Date;

  try {
    parsedDate = new Date(cleanedDate);

    if (isNaN(parsedDate.getTime())) {
      const parts: string[] = cleanedDate.split(/[/-]/);

      if (parts.length === 3) {
        const [first, second, third] = parts.map(part => parseInt(part, 10));

        const isValidYear = (year: number): boolean =>
          year >= 1900 && year <= 2100;

        // Try MM/DD/YYYY format if first number is 12 or less
        if (first <= 12 && first > 0) {
          const year = third;
          if (!isValidYear(year) && strictParsing) {
            throw new DateParseError('Invalid year');
          }
          parsedDate = new Date(year, first - 1, second);
        } else {
          // Try DD/MM/YYYY format
          const year = third;
          if (!isValidYear(year) && strictParsing) {
            throw new DateParseError('Invalid year');
          }
          parsedDate = new Date(year, second - 1, first);
        }

        // Validate the parsed date
        if (isNaN(parsedDate.getTime())) {
          throw new DateParseError('Invalid date components');
        }
      } else {
        throw new DateParseError('Unsupported date format');
      }
    }

    const year: string = parsedDate.getFullYear().toString();
    const month: string = String(parsedDate.getMonth() + 1).padStart(2, '0');
    const day: string = String(parsedDate.getDate()).padStart(2, '0');

    if (!includeTime) {
      return `${year}-${month}-${day}`;
    }

    const hours: string = String(parsedDate.getHours()).padStart(2, '0');
    const minutes: string = String(parsedDate.getMinutes()).padStart(2, '0');
    const seconds: string = String(parsedDate.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  } catch (error) {
    if (error instanceof DateParseError) {
      throw error;
    }
    throw new DateParseError(`Failed to parse date: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};
