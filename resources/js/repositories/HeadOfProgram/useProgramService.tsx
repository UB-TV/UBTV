import axios from "axios";
import { useState } from "react";

export const useProgramService = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const deleteProgram = async (slug: string): Promise<boolean> => {
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
            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error("Failed to delete program");
            }
        } catch (err: any) {
            setError(err.message);
            console.error("Error deleting program:", err);
            return false;
        } finally {
            setLoading(false);
        }
    };

    return { deleteProgram, loading, error };
};
