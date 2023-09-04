const TF_WALLET_CONNECTOR_EXTENSION = "TF_WALLET_CONNECTOR_EXTENSION";
const EXTENSION_HANDLER = TF_WALLET_CONNECTOR_EXTENSION + "_HANDLER";
export class ThreefoldWalletConnectorApi {
    static isInstalledSync() {
        if (document.readyState !== "complete") {
            ThreefoldWalletConnectorApi._log("[isInstalledSync(warn)]", "Document is not ready yet which might lead to unexpected results.");
        }
        return EXTENSION_HANDLER in window;
    }
    static isInstalled() {
        if (document.readyState === "complete") {
            return Promise.resolve(ThreefoldWalletConnectorApi.isInstalledSync());
        }
        return new Promise((res) => {
            window.addEventListener("load", () => {
                res(ThreefoldWalletConnectorApi.isInstalledSync());
            }, { once: true });
        });
    }
    static hasAccess() {
        return ThreefoldWalletConnectorApi
            ._installGuard("hasAccess")
            ._api
            .hasAccess();
    }
    static requestAccess() {
        return ThreefoldWalletConnectorApi
            ._installGuard("requestAccess")
            ._api
            .requestAccess();
    }
    static requestDecryptedAccount(decryptedMnemonic) {
        return ThreefoldWalletConnectorApi
            ._installGuard("requestDecryptedAccount")
            ._api
            .requestDecryptedAccount(decryptedMnemonic);
    }
    static getPublicAccounts() {
        return ThreefoldWalletConnectorApi
            ._installGuard("getPublicAccounts")
            ._api
            .getPublicAccounts();
    }
    static listenToPublicAccounts(listener) {
        return ThreefoldWalletConnectorApi
            ._installGuard("listenToPublicAccounts")
            ._api
            .listenToPublicAccounts(listener);
    }
    static get _api() {
        return window[EXTENSION_HANDLER];
    }
    static _installGuard(method) {
        if (!ThreefoldWalletConnectorApi.isInstalledSync()) {
            throw new Error(`[${TF_WALLET_CONNECTOR_EXTENSION}] [${method}(error)] Threefold wallet connector extension is not installed yet.`);
        }
        return ThreefoldWalletConnectorApi;
    }
    static _log(...args) {
        console.log(`[${TF_WALLET_CONNECTOR_EXTENSION}]`, ...args);
    }
}
//# sourceMappingURL=index.js.map