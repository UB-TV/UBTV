import { IGeneralAPIResponse } from '@/models/generalinterfaces';
import { IPayloadUploadSegment } from '@/models/editorinterfaces';
import { useState } from 'react';
import axios from 'axios';

const useUploadSegment = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const uploadSegment = async ({
        episode_id,
        segment_number,
        attachment
    }: IPayloadUploadSegment): Promise<IGeneralAPIResponse | null> => {
        setIsLoading(true);

        setError(null);

        const formData = new FormData();

        formData.append('episode_id', episode_id.toString());
        formData.append('segment_number', segment_number.toString());
        formData.append('attachment', attachment);


        try {
            const response = await axios.post<IGeneralAPIResponse>('/api/v1/segments', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setIsLoading(false);
            return response.data;
        } catch (err) {
            setIsLoading(false);
            if (axios.isAxiosError(err) && err.response) {
                setError(err.response.data.message || 'An error occurred while uploading the video.');
            } else {
                setError('An unexpected error occurred.');
            }
            return null;
        }
    };

    return {
        uploadSegment,
        isLoading,
        error
    };
};

export default useUploadSegment;
