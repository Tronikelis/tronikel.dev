import React from "react";
import { hydrateRoot } from "react-dom/client";

import PageContainer from "../components/PageContainer";

import { PageContextCustom } from "./types";

import "./css/main.css";

export default function onRenderClient(pageContext: PageContextCustom) {
    const { Page } = pageContext;
    hydrateRoot(
        document.getElementById("react-root") as HTMLDivElement,
        <PageContainer>
            <Page {...pageContext.pageProps} />
        </PageContainer>
    );
}
