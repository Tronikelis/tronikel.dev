import React from "react";

import BgImage from "~/components/BgImage";

import AboutMe from "./AboutMe";
import Foss from "./Foss";
import Socials from "./Socials";

export default function Idx() {
    return (
        <div className="container px-unit-xl xl:px-unit-4xl mx-auto">
            <BgImage>
                <div className="flex flex-col gap-unit-3xl items-center py-unit-xl">
                    <div className="flex flex-row flex-nowrap gap-0">
                        <p className="text-6xl">Tronikel</p>
                        <p className="self-end text-zinc-700">.dev</p>
                    </div>

                    <div className="w-full flex flex-row justify-evenly gap-unit-xl flex-wrap">
                        <div>
                            <AboutMe />
                        </div>
                        <div>
                            <Socials />
                        </div>
                        <div>
                            <Foss />
                        </div>
                    </div>
                </div>
            </BgImage>
        </div>
    );
}
