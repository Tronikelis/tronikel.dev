import React, { ReactNode } from "react";

const transparentProfileSrc =
    "https://cdn.discordapp.com/attachments/1136647387385966722/1136647403852808252/Npw5ItX.svg";

type BgImageProps = {
    children: ReactNode;
};

export default function BgImage({ children }: BgImageProps) {
    return (
        <div className="relative w-full h-screen">
            <img
                style={{
                    filter: "invert(18%) sepia(0%) saturate(0%) hue-rotate(86deg) brightness(99%) contrast(89%)",
                }}
                className="object-cover w-full h-full top-0 left-0 opacity-20 absolute z-10"
                src={transparentProfileSrc}
            />

            <div className="z-50 absolute top-0 left-0 w-full h-full">{children}</div>
        </div>
    );
}
