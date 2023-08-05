import { Card, CardBody } from "@nextui-org/react";
import React, { ReactNode } from "react";
import { tv } from "tailwind-variants";

import TiltHover from "../TiltHover";

type InfoCardProps = {
    children: ReactNode;
    title: string;
    className?: string;
};

const infoCard = tv({
    base: "w-full flex flex-col gap-unit-xs",
});

export default function InfoCard({ children, title, className }: InfoCardProps) {
    return (
        <TiltHover>
            <Card>
                <CardBody>
                    <div className="flex flex-col gap-unit-md">
                        <p className="text-2xl">{title}</p>
                        <div className={infoCard({ className })}>{children}</div>
                    </div>
                </CardBody>
            </Card>
        </TiltHover>
    );
}
