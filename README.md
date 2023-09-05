# Threefold wallet connector API

`tf-wallet-connector-api` is a npm package which allows to easily interact with **`tf-wallet-connector-extension`** by exposing an interface which will be clarified below.

## Install

Exactly like any regular npm package you can go ahead and install it with _yarn_ or _npm_ as follow

```bash
# Using yarn
yarn add tf-wallet-connector-api

# Using npm
npm install tf-wallet-connector-api
```

## Usage

Api package doesn't require any special configuration or api key just import it and go.

```ts
import {
  ThreefoldWalletConnectorApi,
  type Account,
} from "tf-wallet-connector-api"

// Go ahead and use it (note: check blow for api details)
console.log("API", ThreefoldWalletConnectorApi)
```

### API Details

> Note: All methods in api are static you don't need to initialize an instance from api constructor.

Here is a list of the available api methods:

| Method                  | Description                                                                                                                                               | Params                                      | Returns                    |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- | -------------------------- |
| isInstalledSync         | Checks whether the extension is installed or no. if not installed and the document.readyState !== `complete` will log a warn and returns false.           | `()`                                        | `boolean`                  |
| isInstalled             | Same as `isInstalledSync` but awaits `window.onload`. **(Recommended)**                                                                                   | `()`                                        | `Promise<boolean>`         |
| hasAccess               | Checks whether this website granted access permission from the extension or no.                                                                           | `()`                                        | `Promise<boolean>`         |
| requestAccess           | Same as `hasAccess` but if the user doesn't have access it will show a popup requesting the user to allow that specific website to get access permission. | `()`                                        | `Promise<boolean>`         |
| getPublicAccounts       | Fetch all `visible (aka. public)` accounts from the extension. (note: seed is encrypted)                                                                  | `()`                                        | `Promise<Account[]>`       |
| listenToPublicAccounts  | Same as `getPublicAccounts` but continually listen to public accountss changes.                                                                           | `(listener: (accounts: Account[]) => void)` | `unsubscribe: () => void`  |
| requestDecryptedAccount | Request a specific mnemonic to be decrypted. shows a popup for the user asking him to enter his account password in order to decrypt his account.         | `(decryptedMnemonic: string)`               | `Promise<string \| null>`  |
| selectDecryptedAccount  | Shows a popup with all the user accounts and asks him to pick an account and enter his password in order to decrypt it's seed and returns it back.        | `()`                                        | `Promise<Account \| null>` |
