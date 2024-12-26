import { IGeneralAPIResponse } from '@/models/generalinterfaces';
import { useState } from 'react';
import axios from 'axios';

interface ISubmitRevisionPayload {
  program_id: number;
  episode_id: number;
  message: string;
}

interface ISubmitRevisionResponse extends IGeneralAPIResponse {}

const useSubmitRevision = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitRevision = async ({ program_id, episode_id, message }: ISubmitRevisionPayload): Promise<ISubmitRevisionResponse | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post<ISubmitRevisionResponse>(
        '/api/v1/notifications',
        {
          program_id,
          episode_id,
          message
        }
      );
      setIsLoading(false);
      window.location.reload();
      return response.data;
    } catch (err) {
      setIsLoading(false);
      if (axios.isAxiosError(err) && err.response) {
        if (err.response.status === 404) {
          setError('Episode not found.');
        } else if (err.response.status === 403) {
          setError('You do not have permission to submit this revision.');
        } else {
          setError(err.response.data.message || 'An error occurred while submitting the revision.');
        }
      } else {
        setError('An unexpected error occurred.');
      }
      return null;
    }
  };

  return { submitRevision, isLoading, error };
};

export default useSubmitRevision;
