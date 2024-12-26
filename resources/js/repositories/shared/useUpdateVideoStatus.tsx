import { IGeneralAPIResponse } from '@/models/generalinterfaces';
import { useState } from 'react';
import axios from 'axios';

interface IUpdateVideoStatusPayload {
    video_id: string;
    episode_id: string;
    status: string;
}

interface IUpdateVideoStatusResponse extends IGeneralAPIResponse {
    status?: string;
}

const useUpdateVideoStatus = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const updateVideoStatus = async ({ video_id, episode_id, status }: IUpdateVideoStatusPayload): Promise<IUpdateVideoStatusResponse | null> => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.patch<IUpdateVideoStatusResponse>(
                `/api/v1/episodes/${episode_id}`,
                {
                    episode_id,
                    status,
                }
            );
            setIsLoading(false);
            window.location.reload();
            console.log(response)
            return response.data;
        } catch (err) {
            setIsLoading(false);
            if (axios.isAxiosError(err) && err.response) {
                setError(err.response.data.message || 'An error occurred while updating the video status.');
            } else {
                setError('An unexpected error occurred.');
            }
            return null;
        }
    };

    return { updateVideoStatus, isLoading, error };
};

export default useUpdateVideoStatus;
