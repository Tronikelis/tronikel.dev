import Atropos from "atropos/react";
import React, { ReactNode } from "react";

import "atropos/css";

type TiltHover = {
    children: ReactNode;
};

export default function TiltHover({ children }: TiltHover) {
    return (
        <Atropos highlight={false} rotateXMax={5} rotateYMax={5}>
            {children}
        </Atropos>
    );
}
