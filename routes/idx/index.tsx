import { Avatar } from "@nextui-org/react";
import React from "react";
import BgImage from "~/components/BgImage";

export default function Idx() {
    return (
        <div className="container px-unit-xl xl:px-unit-6xl mx-auto py-unit-xl">
            <BgImage>
                <div className="flex flex-row gap-unit-md items-center justify-center">
                    <p className="text-6xl">Tronikel</p>
                </div>
            </BgImage>
        </div>
    );
}
