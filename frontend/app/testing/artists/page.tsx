"use client"
import {Card, CardDescription, CardTitle} from "@/components/ui/card";
import {useToast} from "@/components/ui/use-toast";
import {Input} from "@/components/ui/input";
import {SearchOptions, SearchSpotify, SearchType} from "@/app/api/spotify/search";
import React from "react";
import ArtistResults from "@/components/spotify/artist-results";


export default function Spotify() {
    const {toast} = useToast();
    const [searchQuery, setSearchQuery] = React.useState<string>("");
    const [searchResults, setSearchResults] = React.useState<any[]>([]);


    const handleType = async (text: string) => {
        setSearchQuery(text);
        if (text.length == 0) {
            setSearchResults([]);
        }

        try {
            const searchType = SearchType.Artist;
            const searchParams: SearchOptions = {
                query: searchQuery,
                type: searchType,
                limit: 10
            };
            const response = await SearchSpotify(searchParams);

            if (response.status === 200) {
                const data = response.data
                console.log(data)
                console.log(data[searchType + "s"])
                setSearchResults(data[searchType + "s"]["items"])
            }
        } catch (e) {
            console.error(e);
        }
    };

    const handleClear = () => {
        setSearchQuery("");
        setSearchResults([]);
    }

    return (
        <div className="flex flex-col gap-6">
            <Card className="w-full max-w-[800px] flex flex-col gap-10 p-10 ">
                <CardTitle>Artists</CardTitle>
                <CardDescription>Use the GET /search endpoint and list options in context menu. When a user clicks on
                    one, we make a call to the relevant endpoint [artists / song] to display more detailed info. Make
                    sure to use badges to make it pretty.</CardDescription>
                <div className="flex flex-row gap-4">
                    <Input
                        onChange={(text) => handleType(text.target.value)}
                        className=""
                        placeholder="Search for an artist"
                        value={searchQuery}
                    />
                </div>
            </Card>
            <ArtistResults items={searchResults} searchQuery={searchQuery}/>
        </div>
    );
}
