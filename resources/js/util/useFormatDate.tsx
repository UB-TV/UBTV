import {
    useState,
    useEffect
} from 'react';

interface DateFormatOptions {
  year?: 'numeric' | '2-digit';
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
  day?: 'numeric' | '2-digit';
  weekday?: 'long' | 'short' | 'narrow';
}

const useFormatDate = (
  dateString: string,
  options: DateFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' },
  locale?: string | string[]
): string => {
  const [formattedDate, setFormattedDate] = useState<string>('');

  useEffect(() => {
    if (dateString) {
      try {
        const date = new Date(dateString);
        setFormattedDate(date.toLocaleDateString(locale, options));
      } catch (error) {
        console.error('Error formatting date:', error);
        setFormattedDate('Invalid Date');
      }
    }
  }, [dateString, locale, JSON.stringify(options)]);

  return formattedDate;
};

export default useFormatDate;
