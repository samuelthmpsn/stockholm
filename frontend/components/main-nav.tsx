import * as React from "react"
import Link from "next/link"

import {NavItem} from "@/types/nav"
import {siteConfig} from "@/config/site"
import {cn} from "@/lib/utils"
import {Separator} from "@/components/ui/separator"

interface MainNavProps {
    items?: NavItem[]
}

export function MainNav({items}: MainNavProps) {
    return (
        <div className="flex gap-20">
            <Link href="/" className="flex items-center space-x-2 gap-12 ">
                <span className="inline-block font-bold">{siteConfig.name}</span>
                {/*<Separator orientation={"vertical"}/>*/}
            </Link>
            {items?.length ? (
                <nav className="flex gap-6">
                    {items?.map(
                        (item, index) =>
                            item.href && (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center text-sm font-medium text-muted-foreground",
                                        item.disabled && "cursor-not-allowed opacity-80"
                                    )}
                                >
                                    {item.title}
                                </Link>
                            )
                    )}
                </nav>
            ) : null}
        </div>
    )
}
