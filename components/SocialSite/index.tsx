import React, { ReactNode } from "react";
import { Link } from "@nextui-org/react";

type SocialSiteProps = {
    icon: ReactNode;
    href: string;
    link?: boolean;
};

export default function SocialSite({
    icon,
    href,
    link = true,
}: SocialSiteProps) {
    const shortened = href.split("/").slice(-2).join("/").split(":").at(-1);

    return (
        <div className="flex flex-row flex-nowrap gap-unit-sm ">
            <div className="flex-shrink-0">{icon}</div>
            {link ? (
                <Link
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    color="foreground"
                >
                    {shortened}
                </Link>
            ) : (
                <p>{href}</p>
            )}
        </div>
    );
}
