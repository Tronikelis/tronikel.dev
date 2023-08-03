import React, { ReactNode } from "react";

type SocialSiteProps = {
    icon: ReactNode;
    name: string;
    href: string;
};

export default function SocialSite({ icon, name, href }: SocialSiteProps) {
    return (
        <div className="flex flex-row flex-nowrap gap-unit-sm ">
            <div className="flex-shrink-0">{icon}</div>
            <p className="capitalize">{name}</p>
        </div>
    );
}
