import { IEditEpsiodePayloadRoot } from "@/models/episodeinterfaces";
import { IGeneralAPIResponse } from "@/models/generalinterfaces";
import axios from "axios";
import { router } from "@inertiajs/react";
import { useState } from "react";

const useEditEpisode = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const editEpisode = async (
        id: string,
        payload: IEditEpsiodePayloadRoot
    ): Promise<IGeneralAPIResponse | null> => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.put<IGeneralAPIResponse>(
                `/api/v1/episodes/${id}`,
                payload
            );
            setIsLoading(false);
            window.location.reload();
            return response.data;
        } catch (err) {
            setIsLoading(false);
            if (axios.isAxiosError(err) && err.response) {
                if (err.response.status === 404) {
                    setError("Program not found.");
                } else if (err.response.status === 403) {
                    setError("You do not have permission to create episodes.");
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

    return { editEpisode, isLoading, error };
};

export default useEditEpisode;
