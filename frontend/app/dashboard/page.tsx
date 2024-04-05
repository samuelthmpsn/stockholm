"use client"

import {Button} from "@/components/ui/button"
import {useToast} from "@/components/ui/use-toast"


export default function Dashboard() {
    const {toast} = useToast()

    return (
        <div className="flex flex-col gap-6 items-center justify-center h-screen">
            <h1 className="text-xl font-extrabold">Dashboard</h1>
            <Button
                onClick={() => {
                    toast({
                        title: "Scheduled: Catch up",
                        description: "Friday, February 10, 2023 at 5:57 PM",
                    })
                }}
            >
                Show Toast
            </Button>
        </div>
    )
}