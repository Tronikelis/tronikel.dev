import { Card, CardBody } from "@nextui-org/react";
import { IconBrandGithub } from "@tabler/icons-react";
import React from "react";
import SocialSite from "~/components/SocialSite";

export default function Socials() {
    return (
        <Card>
            <CardBody className="flex flex-col gap-unit-lg">
                <p className="text-2xl">Socials</p>

                <div className="w-full flex flex-col">
                    <SocialSite
                        icon={<IconBrandGithub />}
                        name="github"
                        href=""
                    />
                </div>
            </CardBody>
        </Card>
    );
}
