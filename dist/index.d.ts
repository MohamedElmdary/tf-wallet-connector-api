export interface Account {
    name: string;
    mnemonic: string;
    address: string;
    relay: string;
    ssh: string;
    twinId: number;
    visible: boolean;
}
export declare class ThreefoldWalletConnectorApi {
    static isInstalledSync(): boolean;
    static isInstalled(): Promise<boolean>;
    static hasAccess(): Promise<boolean>;
    static requestAccess(): Promise<boolean>;
    static requestDecryptedAccount(decryptedMnemonic: string): Promise<string | null>;
    static getPublicAccounts(): Promise<Account[]>;
    static listenToPublicAccounts(listener: (accounts: Account[]) => void): () => void;
    static selectDecryptedAccount(): Promise<Account | null>;
    private static get _api();
    private static _installGuard;
    private static _log;
}
//# sourceMappingURL=index.d.ts.map