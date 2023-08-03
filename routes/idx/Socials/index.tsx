import { Card, CardBody } from "@nextui-org/react";
import {
    IconBrandDiscord,
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandSteam,
    IconMail,
} from "@tabler/icons-react";
import React from "react";
import SocialSite from "~/components/SocialSite";

export default function Socials() {
    return (
        <Card>
            <CardBody className="flex flex-col gap-unit-lg">
                <p className="text-2xl">Socials</p>

                <div className="w-full flex flex-col gap-unit-xs">
                    <SocialSite
                        icon={<IconBrandGithub />}
                        href="https://github.com/Tronikelis"
                    />

                    <SocialSite
                        icon={<IconBrandDiscord />}
                        href="tronikel"
                        link={false}
                    />

                    <SocialSite
                        icon={<IconBrandLinkedin />}
                        href="https://www.linkedin.com/in/tronikel"
                    />

                    <SocialSite
                        icon={<IconBrandSteam />}
                        href="https://steamcommunity.com/id/tronikel"
                    />

                    <SocialSite
                        icon={<IconMail />}
                        href="mailto:contactdonatas@gmail.com"
                    />
                </div>
            </CardBody>
        </Card>
    );
}
