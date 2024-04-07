import ArtistCard, {SpotifyArtistProps} from "@/components/spotify/artist-card";
import {Separator} from "@/components/ui/separator";
import {Card, CardDescription, CardContent, CardTitle} from "@/components/ui/card";
import {useState} from "react";
import React from "react";
import {X} from 'lucide-react';
import {ScrollArea} from "@/components/ui/scroll-area";
import Image from "next/image";

export default function ArtistResults({items, searchQuery}: { items: SpotifyArtistProps[], searchQuery: string }) {

    const [selectedArtist, setSelectedArtist] = useState<SpotifyArtistProps | null>(null);

    const handleSelect = (artist: SpotifyArtistProps) => {
        setSelectedArtist(artist);
    }

    return (
        <div>
            {searchQuery && items && items.length > 0 ? (
                <div className="w-full flex flex-row">
                    <ScrollArea className="flex flex-col min-w-[350px] gap-6">
                        {items
                            .filter(result => result.images.length > 0)
                            .map((result, index) => (
                                <ArtistCard item={result} index={index} setArtist={setSelectedArtist}/>
                            ))}
                    </ScrollArea>
                    <div className="flex flex-row gap-6 w-full">
                        {/*<Separator orientation="vertical"/>*/}
                        {selectedArtist ?
                            <Card className="flex flex-col w-[450px] p-5 bg-accent">
                                <div className="flex justify-between w-full">
                                    <CardTitle className="text-2xl font-semibold">{selectedArtist?.name}</CardTitle>
                                    <X className="text-secondary-foreground" onClick={() => setSelectedArtist(null)}/>
                                </div>
                                <CardContent><Image src={selectedArtist.images[0].url} alt="artist image" width={500}
                                                    height={500}/></CardContent>
                            </Card> : null}

                    </div>
                </div>
            ) : <Card className="border-none"><CardDescription>No artists found...</CardDescription></Card>}
        </div>
    )
}