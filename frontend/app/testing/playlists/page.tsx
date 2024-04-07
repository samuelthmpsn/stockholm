"use client"
import * as React from "react";
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {useToast} from "@/components/ui/use-toast";


export default function Playlist() {

    const {toast} = useToast()

    const handleClick = () => {
        toast({
            "title": "Spotify connected",
            "description": "Your Spotify account has been connected",
        })
    }

    return (
        <div className="flex">
            <Card className="w-full max-w-[500px] flex flex-col gap-2 p-10 bg-accent">
                <CardTitle>Playlists</CardTitle>
                <CardDescription>This is some descriptive text</CardDescription>

                <Button onClick={handleClick}>Find artists</Button>

            </Card>
        </div>
    )
}