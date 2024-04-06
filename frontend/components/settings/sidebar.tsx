"use client"

import Link from "next/link";
import * as React from "react";

export default function Sidebar() {
    return (
        <nav
            className="grid gap-4 text-sm text-muted-foreground"
        >
            <Link href="#" className="font-semibold text-primary">
                General
            </Link>
            <Link href="testing/security">Security</Link>
            <Link href="testing/integrations">Integrations</Link>
            <Link href="testing/support">Support</Link>
            <Link href="testing/organisations">Organisations</Link>
            <Link href="testing/advanced">Advanced</Link>
        </nav>
    )
}