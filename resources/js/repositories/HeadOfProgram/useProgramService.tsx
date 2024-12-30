import axios from "axios";
import { useState } from "react";

interface ProgramPayload {
    id?: number;
    code: string;
    name: string;
    description: string;
    is_active: boolean | number;
    premiere_at: string;
    slug?: string;
}

export const useProgramService = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const createProgram = async (payload: ProgramPayload): Promise<any> => {
        setLoading(true);
        setError(null);

        const formData = new FormData();

        formData.append("code", payload.code);
        formData.append("name", payload.name);
        formData.append("description", payload.description);
        formData.append("is_active", payload.is_active ? "1" : "0");
        formData.append("premiere_at", payload.premiere_at);
        const slug = payload.name.toLowerCase().replace(/ /g, "-");
        formData.append("slug", slug);

        try {
            const response = await axios.post("/api/v1/programs", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "X-CSRF-TOKEN":
                        document
                            .querySelector('meta[name="csrf-token"]')
                            ?.getAttribute("content") || "",
                },
            });

            setLoading(false);
            if (response.status === 201) {
                window.location.reload();
            }
            return response.data;
        } catch (err) {
            setLoading(false);
            if (axios.isAxiosError(err) && err.response) {
                const errorMessage =
                    err.response.data.message || "Failed to create program";
                setError(errorMessage);
                throw new Error(errorMessage);
            } else {
                const errorMessage = "An unexpected error occurred";
                setError(errorMessage);
                throw new Error(errorMessage);
            }
        }
    };

    const updateProgram = async (payload: ProgramPayload): Promise<any> => {
        setLoading(true);
        setError(null);

        const jsonPayload = {
            code: payload.code,
            name: payload.name,
            description: payload.description,
            is_active: payload.is_active ? 1 : 0,
            premiere_at: payload.premiere_at,
        };

        try {
            const slug = payload.slug;
            if (!slug) {
                throw new Error("Program slug is required");
            }

            const response = await axios.patch(
                `/api/v1/programs/${slug}`,
                jsonPayload,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRF-TOKEN":
                            document
                                .querySelector('meta[name="csrf-token"]')
                                ?.getAttribute("content") || "",
                        Accept: "application/json",
                        "X-Requested-With": "XMLHttpRequest",
                    },
                }
            );
            setLoading(false);
            if (response.status === 200) {
                window.location.reload();
            }
            return response.data;
        } catch (err: any) {
            setLoading(false);
            const errorMessage =
                err.response?.data?.message ||
                err.message ||
                "Failed to update program";
            setError(errorMessage);
            throw new Error(errorMessage);
        }
    };

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

    return { createProgram, updateProgram, deleteProgram, loading, error };
};
