import { NextUIProvider } from "@nextui-org/react";
import React, { ReactNode, StrictMode } from "react";

type PageContainerProps = {
    children: ReactNode;
};

export default function PageContainer({ children }: PageContainerProps) {
    return (
        <StrictMode>
            <NextUIProvider>
                <main className="dark text-foreground bg-background min-h-screen overflow-auto">
                    {children}
                </main>
            </NextUIProvider>
        </StrictMode>
    );
}
