import { NextUIProvider } from "@nextui-org/react";
import React, { ReactNode, StrictMode } from "react";

type PageContainerProps = {
    children: ReactNode;
};

export default function PageContainer({ children }: PageContainerProps) {
    return (
        <StrictMode>
            <NextUIProvider>{children}</NextUIProvider>
        </StrictMode>
    );
}
