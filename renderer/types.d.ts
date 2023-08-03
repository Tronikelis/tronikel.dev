import { PageContextBuiltIn } from "vite-plugin-ssr/types";

export type PageContextCustom<
    P extends Record<string, any> = Record<string, any>
> = PageContextBuiltIn & {
    pageProps: P;
};
