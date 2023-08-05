import { Card, CardBody } from "@nextui-org/react";
import React, { ReactNode } from "react";

import TiltHover from "../TiltHover";

type InfoCardProps = {
    children: ReactNode;
    title: string;
};

export default function InfoCard({ children, title }: InfoCardProps) {
    return (
        <TiltHover>
            <Card>
                <CardBody>
                    <div className="flex flex-col gap-unit-md">
                        <p className="text-2xl">{title}</p>
                        <div className="w-full flex flex-col gap-unit-xs">{children}</div>
                    </div>
                </CardBody>
            </Card>
        </TiltHover>
    );
}
