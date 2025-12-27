# UniMex Smart Contract

UniMex Exchange - wstUNX Token

## Project Overview

UniMex is a decentralized exchange project, serving as part of the UniMex ecosystem. This repository contains the core smart contract code for UniMex.

**UNX Chain** is a Layer-1 public blockchain designed as a secure, sustainable, and solvency-aware financial infrastructure. UNX Chain features a modular architecture optimized for financial infrastructure applications.

## About wstUNX Token

### Current Stage: Staking Launch Period

`wstUNX` (Wrapped Staked UNX) is a temporary ERC-20 compatible token standard designed to enable early ecosystem participants to engage in network building before the mainnet infrastructure goes live and during the security audit period.

**Naming Convention:**
- "w" = Wrapped (representing ERC-20 compatible format)
- "st" = Staked (representing locked/staking status)
- "UNX" = Native token of the protocol

### Mainnet Migration Process

After the successful launch of the mainnet and protocol upgrade, wstUNX will be upgraded to the native UNX token through an automated conversion mechanism at the protocol level.

## Smart Contract

### wstUNX Token Contract

`wstUNX` is an ERC20 standard token contract representing Wrapped Staked UNX.

**Contract Features:**
- Total Supply: 1,000,000,000 wstUNX (1 billion)
- Token Name: Wrapped Staked UNX
- Token Symbol: wstUNX
- Burn Functionality (`burn`)

**Contract Address:**
The contract address will be displayed in the console after deployment.

## UNX Chain Technical Architecture

### Consensus Mechanism

UNX Chain adopts a **PoS + BFT Finality** (Byzantine Fault Tolerant Finality) consensus architecture:

- **Consensus Security**: Prevents double-spending, chain reorganization, and malicious block production
- **Economic Security**: Ensures that the long-term cost of attacking the network remains higher than the potential attack rewards
- **Solvency Security**: Ensures that the system maintains verifiable asset coverage at all times

### Validator Mechanism

- Validators obtain block production and voting rights by staking UNX
- Voting power is proportional to the amount of UNX staked
- A block is considered finalized once consensus is reached by validators representing ≥ 2/3 of the total stake weight

### Slashing Mechanism

- Double-signing or equivocation: 5%–10% stake slashing
- Prolonged downtime: 0.1%–1% stake slashing and temporary removal from the active validator set
- Malicious behavior: Permanent removal from the validator set

## Governance Framework

UNX adopts an on-chain governance mechanism to manage protocol parameter adjustments, system upgrades, and emergency responses.

### Governance Participants

- **Validators**: Participate in block production and governance voting by staking UNX
- **Delegators**: Delegate their voting power to validators
- **Proposers**: Any address that meets the minimum staking requirement may submit governance proposals

### Proposal Types

- Protocol parameter adjustments (e.g., inflation bounds, staking thresholds)
- Security parameter updates (e.g., slashing ratios, validator requirements)
- System upgrades and feature activations
- Emergency responses and strategic adjustments

## Economic Model

### Security Budget-Driven Inflation

UNX adopts a security budget-driven issuance model, with inflation rates dynamically adjusted between 3%–8% to ensure long-term network security is continuously funded.

### Three-Layer Burn Mechanism

1. **H-Triggered Burn (Health-Based Burn)**
   - Triggered when system reserves are significantly overcollateralized
   - A portion of inflationary issuance is redirected to buyback and burn

2. **ECO Burn (Usage-Based Burn)**
   - Transaction fees
   - Protocol service fees
   - 25% of UniMex trading fees will be burned
   - 25% of contract funding rate revenue will be used for buyback and burn
   - 5% of Launchpool service fees will be burned
   - Gas revenue of the Infrastructure will be burned

3. **Governance-Level Burn (Emergency / Strategic Burn)**
   - Treasury balances (subject to governance voting)
   - AML Slashing excess

### Staking Pool

**Reward Schedule:**
- Staking rewards follow a deterministic step-down schedule
- All tiers reduced by 30% every six months
- Provides strong early-stage incentives while ensuring convergence toward a sustainable long-term reward model

**Reward Source:**
- Staking Pool rewards are programmatic distributions sourced from a capped incentive budget and/or protocol-defined revenue sharing
- All rewards are distributed according to predefined on-chain rules

**Important Notice:**
- Reward rates are not guaranteed and do not constitute any form of financial return commitment
- Actual reward levels may adjust automatically based on incentive budget availability, network security requirements, and protocol parameters

## Technical Stack

- **Solidity**: ^0.8.0
- **Hardhat**: Development framework
- **OpenZeppelin**: Secure contract library

## Project Structure

```
UniMex-Smart-Contract/
├── contracts/
│   └── wstUNX.sol          # wstUNX token contract
├── scripts/
│   └── deploy.js           # Deployment script
├── test/                    # Test files
├── hardhat.config.js       # Hardhat configuration
├── package.json            # Project dependencies
├── README.md               # Project documentation
└── UNX Whitepaper V1.0 英文.pdf  # UNX Whitepaper V1.0 (English)
```

## Installation

```bash
npm install
```

## Compile

```bash
npm run compile
```

## Test

```bash
npm run test
```

## Deploy

```bash
npm run deploy
```

The contract address and transaction hash will be displayed in the console after deployment.

## Technical Roadmap

### Phase 1 | Core Mainnet Phase (0–6 Months)
- Mainnet launch with PoS + BFT Finality
- Activation of staking and slashing mechanisms
- Initial inflation and reward parameters go live
- Deployment of the PoR / PoL framework (read-only mode)

### Phase 2 | Economic & Solvency Reinforcement Phase (6–12 Months)
- PoR / PoL integrated as inputs to economic parameters
- Activation of inflation-burn linkage logic
- Full handover of incentive budgets to the staking pool
- Enablement of the on-chain governance module

### Phase 3 | Financial Infrastructure Phase (12–18 Months)
- Native DEX and settlement modules
- Cross-chain bridges and asset mapping
- Advanced staking strategies (lock-up staking, delegation)

### Phase 4 | Modular Expansion Phase (18–24 Months)
- Application sub-modules and rollup support
- Integration of external asset PoR / PoL
- Performance and scalability optimizations

## Important Disclaimers

### Non-Security Disclaimer

UNX is a utility token designed to facilitate protocol-level functions within the UNX network, including but not limited to staking participation, network security, governance coordination, and protocol operations. UNX is not offered or sold as a security or investment product. Nothing in this document constitutes an offer of securities, investment advice, or a solicitation for investment.

### Jurisdiction Disclaimer

UNX is not issued, sold, or distributed in the form of securities, investment contracts, or financial instruments within any jurisdiction. This document does not constitute an offer, solicitation, or invitation to purchase securities or investment products in any jurisdiction.

Participation in the UNX protocol, including staking or other network activities, is voluntary and utility-driven. Users are responsible for ensuring that their participation complies with applicable laws and regulations in their respective jurisdictions.

UNX is not intended for distribution to, or use by, any person or entity in jurisdictions where such distribution or use would be prohibited or restricted by applicable laws or regulations.

## Documentation

For detailed technical documentation, please refer to: [UNX Whitepaper V1.0 (English)](./UNX%20Whitepaper%20V1.0%20英文.pdf)

## License

MIT License

## Contact

- GitHub: [StevenUniMex/UniMex-Smart-Contract](https://github.com/StevenUniMex/UniMex-Smart-Contract)
- Website: [UniMex](https://unimexexchange.com)

---

**Disclaimer:** The smart contract code in this project is for technical reference only. Please conduct thorough security audits before deployment and use. Participation in any blockchain project involves risks. Please assess carefully.
