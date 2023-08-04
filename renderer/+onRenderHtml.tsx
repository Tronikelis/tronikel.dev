import React from "react";
import { renderToString } from "react-dom/server";
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr/server";

import PageContainer from "../components/PageContainer";

import { PageContextCustom } from "./types";

export default function onRenderHtml(pageContext: PageContextCustom) {
    const { Page, pageProps } = pageContext;
    const pageHtml = renderToString(
        <PageContainer>
            <Page {...pageProps} />
        </PageContainer>
    );

    return escapeInject`
        <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Tronikel</title>

                    <link rel="preconnect" href="https://fonts.googleapis.com">
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link href="https://fonts.googleapis.com/css2?family=Fira%20Code:wght@400;700&display=swap" rel="stylesheet">
                </head>

                <body>
                    <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
                 </body>
            </html>`;
}
