"use client"
import * as React from "react";
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {useToast} from "@/components/ui/use-toast";
import {Input} from "@/components/ui/input";


export default function Spotify() {

    const {toast} = useToast()

    const handleClick = () => {
        toast({
            "title": "Spotify connected",
            "description": "Your Spotify account has been connected",
        })
    }

    return (
        <div className="flex">
            <Card className="w-full max-w-[800px] flex flex-col gap-10 p-10 ">
                <CardTitle>Artists</CardTitle>
                <CardDescription>Use the GET /search endpoint and list options in context menu. When a user clicks on
                    one, we make a call to the relevant endpoint [artists / song] to display more detailed info. Make
                    sure to use badges to make it pretty.</CardDescription>
                <div className="flex flex-row gap-4">
                    <Input className="" placeholder="Search for an artist"/>
                    <Button onClick={handleClick}>Find artists</Button>
                </div>
            </Card>
        </div>
    )
}