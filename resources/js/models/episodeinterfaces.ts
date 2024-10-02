export interface IEpisode {
    id: number;
    program_id: 2;
    code: string;
    duration: string;
    themes: string;
    start_production: string;
    segment_count?: number;
    description: string;
    videos: IVideo[];
    created_at: string;
    updated_at: string;
}

export interface IVideo {
    id: string;
    episode_id: string;
    object_id: string;
    segment_number: number;
    created_at: string;
    updated_at: string;
}
