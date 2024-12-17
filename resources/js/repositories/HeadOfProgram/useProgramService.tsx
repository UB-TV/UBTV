import axios from "axios";
import { useState } from "react";

export const useProgramService = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const deleteProgram = async (slug: string) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.delete(`/api/v1/programs/${slug}`, {
                headers: {
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                    "X-CSRF-TOKEN":
                        document
                            .querySelector('meta[name="csrf-token"]')
                            ?.getAttribute("content") || "",
                },
            });
            return response.status === 200;
        } catch (err: any) {
            if (err.response) {
                setError(
                    err.response.data.message || "Failed to delete program"
                );
            } else if (err.request) {
                setError("Network error. Please check your connection.");
            } else {
                setError("An unexpected error occurred");
            }
            return false;
        } finally {
            setLoading(false);
        }
    };

    return { deleteProgram, loading, error };
};
