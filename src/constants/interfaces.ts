export interface Data {
    id: number;
    data?: string;
}

export interface DataState {
    data: Array<Data>;
    hasLoaded: boolean;
}

export interface DataPayload {
    data: Array<Data>;
}
