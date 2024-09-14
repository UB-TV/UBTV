import { IGeneralAPIResponse } from '@/models/generalinterfaces';
import { IPayloadUploadVideoEpisode } from '@/models/cameramaninterfaces';
import { useState } from 'react';
import axios from 'axios';

interface IUploadEpisodeVideoResponse extends IGeneralAPIResponse {
  file_id?: string;
}

const useUploadEpisodeVideo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadVideo = async ({ episode_id, attachment }: IPayloadUploadVideoEpisode): Promise<IUploadEpisodeVideoResponse | null> => {
    console.log(attachment);
    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('videos[episode_id]', episode_id.toString());
    formData.append('videos[attachment]', attachment);


    try {
      const response = await axios.post<IUploadEpisodeVideoResponse>('/api/v1/videos', formData, {
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

  return { uploadVideo, isLoading, error };
};

export default useUploadEpisodeVideo;
