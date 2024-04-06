import Link from "next/link"

import {siteConfig} from "@/config/site"
import {ThemeToggle} from "@/components/theme-toggle"
import {MainNav} from "@/components/main-nav"

export function SiteHeader() {
    return (
        <header className="bg-background sticky top-0 z-40 w-full ">
            <div
                className=" gap-20 flex border-b h-14 pl-4 pr-4 items-center space-x-2 sm:justify-between sm:space-x-0">
                <MainNav items={siteConfig.mainNav}/>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-1">
                        <Link
                            href={siteConfig.links.github}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm"
                        >
                            Git
                        </Link>
                        <ThemeToggle/>
                    </nav>
                </div>
            </div>
        </header>
    )
}
