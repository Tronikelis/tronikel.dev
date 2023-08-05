import {
    IconBrandDiscord,
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandSteam,
    IconMail,
} from "@tabler/icons-react";
import React from "react";

import InfoCard from "~/components/InfoCard";
import SocialSite from "~/components/SocialSite";

export default function Socials() {
    return (
        <InfoCard title="Socials">
            <SocialSite icon={<IconBrandGithub />} href="https://github.com/Tronikelis" />

            <SocialSite icon={<IconBrandDiscord />} href="tronikel" link={false} />

            <SocialSite
                icon={<IconBrandLinkedin />}
                href="https://www.linkedin.com/in/tronikel"
            />

            <SocialSite
                icon={<IconBrandSteam />}
                href="https://steamcommunity.com/id/tronikel"
            />

            <SocialSite icon={<IconMail />} href="mailto:contactdonatas@gmail.com" />
        </InfoCard>
    );
}
