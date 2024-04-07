import {refreshAccessToken} from "@/functions/spotify_auth";
import axios from "axios";

export enum SearchType {
    Artist = "artist",
    Album = "album",
    Track = "track",
    Playlist = "playlist"
}

export interface SearchOptions {
    query: string;
    type: SearchType;
    limit: number;
}

export async function SearchSpotify(searchParams: SearchOptions) {
    const token = await refreshAccessToken();
    const url: string = "https://api.spotify.com/v1/search";

    const response = await axios.get(
        url, {
            headers: {
                "Authorization": token,
            },
            params: {
                q: searchParams.query,
                type: searchParams.type,
                limit: searchParams.limit
            }
        }
    );

    return response
}