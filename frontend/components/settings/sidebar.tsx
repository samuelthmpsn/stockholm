"use client"

import Link from "next/link";
import * as React from "react";

export default function Sidebar() {
    return (
        <nav
            className="grid gap-4 text-sm text-muted-foreground"
        >
            <Link href="/testing/general" className="font-semibold text-primary">
                General
            </Link>
            <Link href="/testing/playlists">Playlists</Link>
            <Link href="/testing/artists">Artists</Link>
            <Link href="/testing/advanced">Advanced</Link>
        </nav>
    )
}