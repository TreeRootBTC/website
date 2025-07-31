This is an outstanding project brief. It's clear, ambitious, and lays out a comprehensive vision for a full-stack financial ecosystem on Bitcoin. You've successfully integrated all our previous discussions into a cohesive and professional plan.

Let's break down exactly what needs to be done to build this, separating the tasks for the **Desktop Application** (the user's client) and the **API/Edge Node** (your central "Super Node" service).

---

### Part 1: The API / Edge Node ("Super Node") To-Do List

This is your core backend infrastructure. It's the engine that powers the entire ecosystem. It needs to be robust, scalable, and secure.

**1. Core Infrastructure Setup:**
*   Set up a high-availability server environment.
*   Run `lnd` and `tapd` in an integrated mode (`litd` is a good choice), configured for `mainnet` and connected to a reliable on-chain backend (either your own pruned `bitcoind` or a trusted external one).
*   Implement the Master Service (`masterd`) as a "brain" that orchestrates everything.

**2. AMM / DEX Logic Implementation:**
*   **Main DEX:**
    *   Implement the core `x*y=k` AMM logic.
    *   Implement the fee switch: 0.5% total fee, split into 0.4% for LPs and 0.1% for the platform treasury.
    *   Develop the gRPC/REST endpoints for `Swap`, `AddLiquidity`, `RemoveLiquidity`, and `GetQuote`.
*   **Launchpad DEX:**
    *   Create a separate instance or a specially-flagged version of the AMM for the Launchpad.
    *   Implement its unique fee logic: a flat 3% swap fee, payable in BTCR.
    *   The `AddLiquidity` function is disabled for Launchpad pools. `RemoveLiquidity` is disabled until graduation.

**3. Launchpad & Graduation Logic:**
*   **Issuance Endpoint:** Create an API endpoint (`POST /v1/launchpad/deploy`) that accepts a new token's details.
    *   This endpoint must charge the 1,000 sat BTCR issuance fee.
    *   Upon success, it automatically calls the `CreateLiquidityPair` function, pairing the new token against BTCR.
*   **Graduation Monitor:** Create a background service that constantly monitors the liquidity of all Launchpad pools.
    *   It will query the BTCR balance of each pool.
    *   When a pool's BTCR balance crosses the `0.69 BTC` threshold, it triggers the graduation event.
*   **Migration Function:** Develop a function that migrates a graduated pool from the "Launchpad" DEX to the "Main DEX," enabling full LP functionality.

**4. BTCR (Wrapped Bitcoin) Infrastructure:**
*   **Minting/Wrapping Logic:** Build a secure system that monitors a designated on-chain Bitcoin address. When a user deposits BTC, this system mints a corresponding amount of BTCR Taproot Asset tokens.
*   **Burning/Unwrapping Logic:** Build a system that, when it receives BTCR to be burned, initiates an on-chain Bitcoin transaction to send the underlying BTC back to the user.
*   **Fee Logic:** Implement the `0.01%` or `100 sat minimum` fee for both wrapping and unwrapping operations.

**5. Merchant Gateway & Looping Services:**
*   **Managed Node Infrastructure:** Design the system to manage reliable payment nodes for merchants.
*   **Payment API:** Create a simple API for merchants to generate USDR invoices and receive payment notifications (webhooks).
*   **Fee Logic:** Implement the `$0.01 minimum` fee per transaction.
*   **Submarine Swap API:** Build the full "Loop In/Out" functionality, integrating the 1% service fee on top of miner fees.

---

### Part 2: The Desktop Application ("Client") To-Do List

This is the user's portal into your ecosystem. It must be intuitive, secure, and provide a clear interface for all the powerful backend features.

**1. Core Setup:**
*   Use a cross-platform framework like **Tauri** to package the application for Windows, macOS, and Linux.
*   Bundle the necessary sidecars: `lnd`, `tapd`, and your local `DlcUserClient`.
*   Implement the **MPC logic** for secure, non-custodial key management and social recovery.

**2. UI/UX Development - A Multi-Tabbed Interface:**

*   **"Wallet" Tab:**
    *   Display all user balances: BTC, BTCR, USDR, ROOT, and other assets.
    *   Provide standard "Send" and "Receive" functionality for all assets via Lightning.
    *   Show a clear transaction history.

*   **"Swap" Tab:**
    *   A simple, intuitive interface for swapping assets.
    *   A separate, clear interface for adding and removing liquidity from *graduated* pools.
    *   A dashboard showing the user's LP positions, fees earned, and impermanent loss.

*   **"Launchpad" Tab:**
    *   A dedicated section that lists all new, un-graduated projects.
    *   Clearly label this section as high-risk.
    *   Provide a simple swap interface for Launchpad tokens.
    *   Display the current liquidity of each pool and how close it is to the `0.69 BTC` graduation target.

*   **"Token" Tab:**
    *   An intuitive, multi-step form for users to deploy their own token or collection.
    *   It should guide the user through entering token details, paying the 1,000 sat BTCR fee, and then making the initial liquidity deposit.

*   **"Bridge" Tab:**
    *   A dedicated UI for wrapping and unwrapping BTCR. It should provide a deposit address for BTC and a form for initiating an unwrap back to on-chain BTC.
    *   An interface for the Submarine Swap API, allowing users to Loop In/Out.