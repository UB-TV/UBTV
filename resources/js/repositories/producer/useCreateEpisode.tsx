import { IGeneralAPIResponse } from '@/models/generalinterfaces';
import { useState } from 'react';
import axios from 'axios';
import { ICreateEpisodePayloadRoot } from '@/models/episodeinterfaces';

interface ICreateEpisodeResponse extends IGeneralAPIResponse {}

const useCreateEpisode = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const createEpisode = async (payload: ICreateEpisodePayloadRoot): Promise<ICreateEpisodeResponse | null> => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.post<ICreateEpisodeResponse>(
                '/api/v1/episodes',
                payload
            );
            setIsLoading(false);
            window.location.reload();
            return response.data;
        } catch (err) {
            setIsLoading(false);
            if (axios.isAxiosError(err) && err.response) {
                if (err.response.status === 404) {
                    setError('Program not found.');
                } else if (err.response.status === 403) {
                    setError('You do not have permission to create episodes.');
                } else {
                    setError(err.response.data.message || 'An error occurred while creating the episode.');
                }
            } else {
                setError('An unexpected error occurred.');
            }
            return null;
        }
    };

    return { createEpisode, isLoading, error };
};

export default useCreateEpisode;
