export interface INotification {
    id: number;
    user_id: number;
    episode_id: number;
    role_id: number;
    message: string;
    created_at: string;
    updated_at: string;
    from: string;
    program_name: string;
    role_name: string;
}
