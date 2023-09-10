export interface Account {
    name: string;
    mnemonic: string;
    address: string;
    relay: string;
    ssh: string;
    twinId: number;
    visible: boolean;
}
export interface PublicAccount {
    name: string;
    mnemonic: string;
    address: string;
    encryptedMnemonic: boolean;
    metadata: {
        [network: string]: {
            twinId: string | null;
            ssh: string | null;
        };
    };
    networks: string[];
}
export declare class ThreefoldWalletConnectorApi {
    static isInstalledSync(): boolean;
    static isInstalled(): Promise<boolean>;
    static hasAccess(): Promise<boolean>;
    static requestAccess(): Promise<boolean>;
    static selectAccount(networks?: string | string[]): Promise<PublicAccount | null>;
    static requestDecryptedAccount(decryptedMnemonic: string, networks?: string | string[]): Promise<string | null>;
    static getPublicAccounts(networks?: string | string[]): Promise<Account[]>;
    static listenToPublicAccounts(listener: (accounts: Account[]) => void): () => void;
    static selectDecryptedAccount(networks?: string | string[]): Promise<PublicAccount | null>;
    static sign(): void;
    private static get _api();
    private static _installGuard;
    private static _log;
}
//# sourceMappingURL=index.d.ts.map