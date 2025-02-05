export interface IEpisode {
    id: number;
    program_id: 2;
    code: string;
    duration: string;
    theme: string;
    start_production: string;
    segment_count?: number;
    status?: string;
    description: string;
    videos: IVideo[];
    created_at: string;
    updated_at: string;
}

export interface IVideo {
    id: string;
    episode_id: string;
    object_id: string;
    url?: string;
    segment_number: number;
    created_at: string;
    updated_at: string;
}

export interface IVideoWithStatus extends IVideo {
    episodeStatus: string;
}

export interface ICreateEpisodePayloadRoot {
    program_id: number;
    code: string;
    duration: string;
    theme: string;
    segment_count: string;
    start_production: string;
    description: string;
}

export interface IEditEpsiodePayloadRoot {
    program_id: number;
    episode_id: number;
    code: string;
    duration: string;
    theme: string;
    segment_count: string;
    start_production: string;
    status: string;
    description: string;
}
