import { Avatar } from "@nextui-org/react";
import React from "react";

import InfoCard from "~/components/InfoCard";
import SocialSite from "~/components/SocialSite";

import apps from "./apps";

export default function Foss() {
    return (
        <InfoCard title="Awesome FOSS ❤️" className="overflow-auto max-h-unit-6xl pr-unit-xs">
            {apps.map(({ href, icon }) => (
                <SocialSite href={href} icon={<Avatar src={icon} size="sm" />} key={href} />
            ))}
        </InfoCard>
    );
}
