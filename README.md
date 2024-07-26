# CorePad: Memecoin Factory on CORE Chain

CorePad is an innovative platform built on the CORE Chain, designed to simplify the process of creating and distributing memecoins. This project leverages the power of blockchain technology to provide a user-friendly interface for token creation and airdrop management.

## Table of Contents

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Running the Project](#running-the-project)
5. [Project Structure](#project-structure)
6. [Core Chain Integration](#core-chain-integration)
7. [Backend and UI Workflow](#backend-and-ui-workflow)
8. [Innovation](#innovation)
9. [Contributing](#contributing)
10. [License](#license)

## Features

- Connect wallet functionality using Web3-Onboard
- Token creation with fixed or variable supply
- Airdrop launch pad for token distribution
- Dark mode UI using Material-UI
- Responsive design for various screen sizes

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- A modern web browser with MetaMask or another Web3 wallet extension installed
- Access to the CORE Chain network

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/corepad.git
   ```

2. Navigate to the project directory:
   ```
   cd corepad
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Running the Project

1. Start the development server:
   ```
   npm start
   ```

2. Open your web browser and visit `http://localhost:3000`

3. Connect your Web3 wallet (e.g., MetaMask) to the CORE Chain network

## Project Structure

- `src/App.js`: Main component that renders the application
- `src/ConnectWallet.js`: Handles wallet connection using Web3-Onboard
- `src/TokenFactory.js`: Manages token creation functionality
- `src/AirdropLaunchPad.js`: Handles airdrop distribution
- `src/theme.js`: Defines the Material-UI theme for the application

## Core Chain Integration

CorePad is built to work seamlessly with the CORE Chain. The integration is achieved through the following steps:

1. Web3-Onboard is configured to connect to the CORE Chain (Network ID: 0x45c)
2. Smart contracts for token creation and airdrop are deployed on the CORE Chain
3. All transactions, including token creation and airdrops, are executed on the CORE Chain

## Backend and UI Workflow

1. **Wallet Connection**:
   - Users connect their Web3 wallet using the ConnectWallet component
   - Web3-Onboard handles the connection and ensures the wallet is set to the CORE Chain

2. **Token Creation**:
   - Users input token details in the TokenFactory component
   - Upon submission, a new token contract is deployed to the CORE Chain
   - Transaction hash and explorer link are displayed to the user

3. **Airdrop Launch**:
   - Users provide recipient addresses, token amount, and token address in the AirdropLaunchpad component
   - The component supports CSV and Excel file uploads for bulk recipient input
   - Airdrop transactions are executed on the CORE Chain

The UI is built using React and Material-UI, providing a responsive and intuitive interface for users to interact with the CORE Chain.

## Innovation

CorePad introduces several innovative features:

1. **Simplified Memecoin Creation**: Lowering the barrier to entry for creating tokens on the CORE Chain
2. **Integrated Airdrop Functionality**: Streamlining the process of token distribution
3. **User-Friendly Interface**: Making blockchain interactions accessible to a wider audience
4. **CORE Chain Focus**: Leveraging the unique features and benefits of the CORE Chain ecosystem

## Contributing

Contributions to CorePad are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the original branch: `git push origin feature-branch-name`
5. Create a pull request

## License

This project is licensed under the [MIT License](LICENSE).
