import Image from "next/image";
import {Badge} from "@/components/ui/badge";
import {Card} from "@/components/ui/card";
import {Dispatch, SetStateAction} from "react";

export interface SpotifyArtistProps {
    external_urls: {
        spotify: string;
    };
    followers: {
        href: null;
        total: number;
    };
    genres: string[];
    href: string;
    id: string;
    images: {
        height: number;
        url: string;
        width: number;
    }[];
    name: string;
    popularity: number;
    type: string;
    uri: string;
}


export default function ArtistCard({item, index, setArtist}: { item: SpotifyArtistProps, index: number, setArtist: Dispatch<SetStateAction<SpotifyArtistProps | null>> }) {


    return (
        <Card onClick={() => setArtist(item)} className="border-none p-2 hover:border border-red-500">
            <div className="flex flex-row gap-2" key={index}>
                <Image width={50} height={50} src={item.images[0].url} alt="artist image"/>
                <div className="flex-none flex-col">
                    <div className="flex w-full gap-4">
                        <p className="font-semibold">{item.name}</p>
                    </div>
                    {item['genres'].length > 0 ? <Badge>{item['genres'][0]}</Badge> : null}
                </div>
            </div>
        </Card>
    )
}