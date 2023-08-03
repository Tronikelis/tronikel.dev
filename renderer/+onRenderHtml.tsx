import React from "react";
import { renderToString } from "react-dom/server";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";

import { PageContextCustom } from "./types";
import PageContainer from "../components/PageContainer";

export default async function onRenderHtml(pageContext: PageContextCustom) {
    const { Page, pageProps } = pageContext;
    const pageHtml = renderToString(
        <PageContainer>
            <Page {...pageContext.pageProps} />
        </PageContainer>
    );

    return escapeInject`
        <!DOCTYPE html>
            <html>
                <body class="dark">
                    <div id="react-root">${dangerouslySkipEscape(
                        pageHtml
                    )}</div>
                 </body>
            </html>`;
}
