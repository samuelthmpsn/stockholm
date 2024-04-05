import CardWithForm from "@/components/custom/card";

export default function Playground() {
    return (
        <div className="h-screen mt-10">
            <div className="flex gap-6">
                <CardWithForm/>
                <CardWithForm/>
            </div>
        </div>
    )
}