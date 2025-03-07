import { IGeneralAPIResponse } from "@/models/generalinterfaces";
import axios from "axios";
import { useState } from "react";

const useDeleteEpisode = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const deleteEpisode = async (
        id: string
    ): Promise<IGeneralAPIResponse | null> => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.delete<IGeneralAPIResponse>(
                `/api/v1/episodes/${id}`
            );
            console.log(response);
            setIsLoading(false);
            window.location.reload();
            return response.data;
        } catch (err) {
            setIsLoading(false);
            if (axios.isAxiosError(err) && err.response) {
                if (err.response.status === 404) {
                    setError("Episode not found.");
                } else {
                    setError(
                        err.response.data.message ||
                            "An error occurred while creating the episode."
                    );
                }
            } else {
                setError("An unexpected error occurred.");
            }
            return null;
        }
    };

    return { deleteEpisode, isLoading, error };
};

export default useDeleteEpisode;
