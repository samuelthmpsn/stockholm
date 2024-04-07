import Sidebar from "@/components/settings/sidebar";

export default function TestingLayout({children,}: { children: React.ReactNode }) {
    return (
        <div className="mx-auto flex h-screen flex-col p-10">
            <div className="w-1/4 flex-none">
                <h1 className="text-3xl font-semibold antialiased pb-10">Testing</h1>
            </div>
            <div className="flex flex-row">
                <div className="w-1/4 flex-none">
                    <Sidebar/>
                </div>
                <div className="flex-grow">
                    {children}
                </div>
            </div>
        </div>


    )
}