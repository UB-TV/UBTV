import { useState } from "react";
import axios from "axios";
import { json } from "stream/consumers";

export const useFetchNewUsers = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateUserStatus = async (userId: number, approve: boolean | null) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.patch(`/api/v1/users/${userId}`, {
        approve: approve
      }, {
        headers: { 
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
        }
      });
      return response.data;
    } catch (err: any) {
      console.error(err)
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (userId: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.delete(`/api/v1/users/${userId}`, {
        headers: { 
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
        }
    });
      if (response.status === 200) {
        return response.data;
    } else {
        throw new Error('Failed to delete user');
    }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { updateUserStatus, deleteUser, loading, error };
};
