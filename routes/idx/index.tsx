import React from "react";

import BgImage from "~/components/BgImage";

import AboutMe from "./AboutMe";
import Socials from "./Socials";

export default function Idx() {
    return (
        <div className="container px-unit-xl xl:px-unit-4xl mx-auto py-unit-xl">
            <BgImage>
                <div className="flex flex-col gap-unit-3xl items-center">
                    <p className="text-6xl">Tronikel</p>

                    <div className="w-full flex-1 flex flex-row justify-evenly gap-unit-xl flex-wrap">
                        <div>
                            <AboutMe />
                        </div>
                        <div>
                            <Socials />
                        </div>
                    </div>
                </div>
            </BgImage>
        </div>
    );
}
