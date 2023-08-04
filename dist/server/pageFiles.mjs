const _route = "/";
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const isGeneratedFile = true;
const pageConfigs = [
  {
    pageId: "/pages/idx",
    isErrorPage: false,
    routeFilesystem: "/idx",
    routeFilesystemDefinedBy: "/pages/idx/",
    loadCodeFiles: async () => (await import("./entries/pages_idx.mjs")).default,
    configElements: {
      ["onRenderHtml"]: {
        configDefinedAt: "/renderer/+onRenderHtml.tsx > `export default`",
        configDefinedByFile: "/renderer/+onRenderHtml.tsx",
        codeFilePath: "/renderer/+onRenderHtml.tsx",
        codeFileExport: "default",
        plusConfigFilePath: null,
        configEnv: "server-only"
      },
      ["onRenderClient"]: {
        configDefinedAt: "/renderer/+onRenderClient.tsx > `export default`",
        configDefinedByFile: "/renderer/+onRenderClient.tsx",
        codeFilePath: "/renderer/+onRenderClient.tsx",
        codeFileExport: "default",
        plusConfigFilePath: null,
        configEnv: "client-only"
      },
      ["Page"]: {
        configDefinedAt: "/pages/idx/+Page.tsx > `export default`",
        configDefinedByFile: "/pages/idx/+Page.tsx",
        codeFilePath: "/pages/idx/+Page.tsx",
        codeFileExport: "default",
        plusConfigFilePath: null,
        configEnv: "server-and-client"
      },
      ["passToClient"]: {
        configDefinedAt: "/renderer/+config.h.ts > `export default { passToClient }",
        configDefinedByFile: "/renderer/+config.h.ts",
        codeFilePath: null,
        codeFileExport: null,
        plusConfigFilePath: "/renderer/+config.h.ts",
        configEnv: "server-only",
        configValueSerialized: '["pageProps"]'
      },
      ["route"]: {
        configDefinedAt: "/pages/idx/+route.ts > `export default`",
        configDefinedByFile: "/pages/idx/+route.ts",
        codeFilePath: "/pages/idx/+route.ts",
        codeFileExport: "default",
        plusConfigFilePath: null,
        configEnv: "_routing-eager",
        configValue: _route
      },
      ["isClientSideRenderable"]: {
        configDefinedAt: "TODO",
        configDefinedByFile: "TODO",
        codeFilePath: null,
        codeFileExport: null,
        plusConfigFilePath: "TODO",
        configEnv: "server-and-client",
        configValueSerialized: "true"
      },
      ["hasServerOnBeforeRender"]: {
        configDefinedAt: "TODO",
        configDefinedByFile: "TODO",
        codeFilePath: null,
        codeFileExport: null,
        plusConfigFilePath: "TODO",
        configEnv: "server-and-client",
        configValueSerialized: "false"
      }
    }
  }
];
const pageConfigGlobal = {
  ["onBeforeRoute"]: null,
  ["onPrerenderStart"]: null
};
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesExportNamesEagerIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerIsomorph = { ...pageFilesExportNamesEagerIsomorph1 };
pageFilesExportNamesEager[".page"] = pageFilesExportNamesEagerIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesExportNamesEagerServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerServer = { ...pageFilesExportNamesEagerServer1 };
pageFilesExportNamesEager[".page.server"] = pageFilesExportNamesEagerServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({});
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
export {
  isGeneratedFile,
  neverLoaded,
  pageConfigGlobal,
  pageConfigs,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
};
