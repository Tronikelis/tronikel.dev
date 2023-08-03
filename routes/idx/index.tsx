import { Avatar } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import BgImage from "~/components/BgImage";
import YearsOld from "./YearsOld";
import Socials from "./Socials";

export default function Idx() {
    return (
        <div className="container px-unit-xl xl:px-unit-6xl mx-auto py-unit-xl">
            <BgImage>
                <div className="flex flex-col gap-unit-3xl">
                    <div className="flex flex-col gap-0 items-center justify-center text-6xl">
                        <p>Tronikel</p>
                        <p>•</p>
                        <YearsOld />
                    </div>

                    <div className="w-full flex-1 flex">
                        <Socials />
                    </div>
                </div>
            </BgImage>
        </div>
    );
}
