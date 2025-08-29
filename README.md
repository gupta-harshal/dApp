# Solana Faucet Airdrop dApp

A simple React decentralized app (dApp) that allows users to connect their Solana wallet and request test SOL airdrops on the Solana Devnet. Built using the Solana Wallet Adapter ecosystem and Solana Web3.js API.

---

## Features

- Connect and disconnect Solana wallets using a unified wallet adapter interface.
- Request free test SOL tokens via the Solana Devnet faucet.
- Simple user interface with wallet buttons and input for airdrop amount.
- Responsive wallet state handling and error reporting.

---

## Technologies Used

- React.js
- @solana/wallet-adapter-react & @solana/wallet-adapter-base
- @solana/wallet-adapter-react-ui for wallet modal and buttons
- @solana/web3.js for blockchain interaction
- Solana Devnet cluster for faucet airdrops

---

## Getting Started

### Prerequisites

- Node.js installed
- Yarn or npm installed
- A Solana wallet (e.g. Phantom) with Devnet configured

### Installation

Clone the repository and run:
```shell
git clone https://github.com/gupta-harshal/dApp.git
cd dApp
npm install
npm start
```


This starts the app locally at `http://localhost:3000`.

---

## Usage

1. Open the app in a browser.
2. Connect your Solana wallet with the provided buttons.
3. Enter the amount of SOL you wish to airdrop (Devnet test tokens).
4. Click "Send Airdrop" to receive SOL in your connected wallet.

---

## Code Overview

- `App.js`: Sets up Solana connection, WalletProvider, and UI.
- `Airdrop.js`: Component handling user input and airdrop requests via RPC.

---

## Notes

- This dApp works only on the Solana Devnet.
- Airdrops are subject to faucet limits on Devnet.
- Avoid using this app on mainnet or with real SOL.





