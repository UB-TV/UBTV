export interface ILayoutMenu {
    link: string;
    label: string;
}

export interface IGeneralPaginationTable<T> extends IPagination {
    data: T;
}

export interface IPagination {
    current_page: number;
    first_page_url: string;
    last_page: number;
    last_Page_url: string;
    links: IPaginationLink[];
    next_page_url?: string;
    path: string;
    per_page: number;
    prev_page_url?: string;
    from: number;
    to: number;
    total: number;
}

export interface IPaginationLink {
    url?: string;
    label: string;
    active: boolean;
}

export interface IGeneralAPIResponse {
    success: boolean;
    message: string;
}
