import {
    useState,
    useEffect
} from 'react';

const useFormatDate = (
  dateString: string,
  locale: string = 'id-ID'
): string => {
  const [formattedDate, setFormattedDate] = useState<string>('');

  useEffect(() => {
    if (dateString) {
      try {
        const date = new Date(dateString);

        const day = date.getDate();
        const month = date.toLocaleDateString(locale, { month: 'long'});
        const year = date.getFullYear();

        setFormattedDate(`${day} ${month} ${year}`);
      } catch (error) {
        console.error('Error formatting date:', error);
        setFormattedDate('Invalid Date');
      }
    }
  }, [dateString, locale]);

  return formattedDate;
};

export default useFormatDate;
