# gm friend, i'm [oscar](https://omc.sh) 👋

> senior product engineer, full stack.

---

### `2025-2026` [neutrl](https://neutrl.finance), staff fullstack engineer | _yield-bearing synthetic dollar_ · [case study](https://omc.sh/work/neutrl)

- built neutrl's production application stack from zero: next.js web app, node.js apis, typescript sdks, and blockchain indexers (sentio, then envio), with hasura graphql and postgres, for a protocol that reached $230M peak TVL and about 25,000+ monthly visitors
- led everything offchain, owning those production systems at scale and the business impact of growth in deposits and usage
- migrated on-chain indexing from sentio to envio and cut backfill times from days to hours, using hypersync-based indexing and parallel evm event processing
- contributed to the envio indexer configuration binding 69 contract-event subscriptions (47 distinct event names) across ethereum, arbitrum, and plasma
- delivered minting, redemption, staking, token locking, instant and cooldown withdrawals, translating smart contracts into complete user flows with wagmi and viem
- built transaction previews, solidity lens contracts, and typescript sdk multicall batching; portfolio integrations covering 41 external position types
- built rewards infrastructure spanning points accrual, referrals, reward distribution, and merkle claims, supporting about 6,000 season origin participants (5,659 on ethereum)
- ran production and staging on railway, with the indexer writing to postgres and hasura reading over private networking, so the graphql apis and data plane stayed reliable in production
- used sentry for production monitoring. tested sdks, backend, and frontend flows with playwright and vitest

`typescript` `react` `next.js` `nodejs` `graphql` `hasura` `postgresql` `envio` `solidity` `sdk` `wagmi` `viem`

---

### `2024-2025` [morpho](https://morpho.org), product engineer | _lending & borrowing_ · [case study](https://omc.sh/work/morpho)

- built production refinance, migrate-earn, and migrate-borrow flows connecting aave, compound, and morpho, using bundler v3 to compose transactions and preview execution outcomes before signing
- shipped production lending, borrowing, and position-management interfaces, including position dashboards and history, transaction interactions, wallet-based filtering, and expected reward pricing in displayed apy
- combined server-rendered portfolio data with live onchain reads to display positions on initial render and keep balances current
- owned end-to-end testing of the consumer application with playwright and vitest, building a shared testing library to centralize checks and invariants
- consumed morpho's nestjs graphql api from the frontend with apollo client, and used viem and wagmi for typed contract interactions in the app

`typescript` `react` `next.js` `graphql` `apollo client` `wagmi` `viem` `bundler` `ssr` `playwright` `vitest`

---

### `2024` [fyde](https://fyde.fi), product engineer | _onchain treasury_ · [case study](https://omc.sh/work/fyde)

- built fyde's production protocol application as its only frontend engineer, owning staking, rewards, portfolio deposit and withdrawal previews, and governance interfaces for a product that reached about $1.7M peak TVL
- consumed fyde's rest api from the frontend with tanstack query. built wallet connectivity and account abstraction with wagmi, viem, and privy, supporting 300+ smart accounts
- delivered restaking across eigenlayer and other integrations with one signature, alongside a trading simulator game and shared storybook components
- reduced frontend bundle size by 40%+ and cumulative layout shift by 25%, measured on the optimization pr
- delivered the application through the token launch, when traffic reached about 10,000+ monthly visits

`typescript` `react` `next.js` `tanstack query` `wagmi` `viem` `privy` `storybook`

---

### `2023` [pimster](https://pimster.app), fullstack engineer | _post-purchase engagement_ · [case study](https://omc.sh/work/pimster)

- fullstack engineer at a production b2b saas startup, delivering onboarding, content management, and customer engagement features across next.js, graphql, nestjs, and strapi for 14+ customer brands, including mobile product companions with setup guidance, manuals, support, and branded stories
- built internal crm tools so customer brands could publish product minisites themselves, cutting product-minisite preparation from about half a day to under 30 minutes; sales reported the work became about 3 times faster, a concrete business impact
- delivered database and model migrations with prisma and postgresql, and integrated posthog analytics and sentry monitoring into product features

`typescript` `react` `next.js` `graphql` `nestjs` `strapi` `postgresql` `prisma`

---

### `2014-now` [omc](https://omc.sh/about), software engineer & independent builder | _building cool stuff on the internet_

independent practice that began in 2014 as oscar design, a self-taught design practice, and later grew into fullstack software engineering, developer tooling, and blockchain infrastructure.

in 2014, while in high school, i taught myself photoshop, illustrator, and the adobe suite and started oscar design. i sold logos, banners, and web designs to 20+ esports customers, working in english, and designed 60+ logos, mascots, and visual identities for esports, sports, and consumer brands. from there i moved into building software: open-source sdks, product interfaces, and on-chain applications. see the [services](https://omc.sh/services) i offer, or [get in touch](https://omc.sh/contact).

**selected engagements**

**`2023` [ultra tech alliance](https://github.com/Ultra-Tech-Alliance), fullstack engineer**

- published an [open-source javascript client](https://github.com/Ultra-Tech-Alliance/ultra-utilities), react sdk, and ui library for the ultra blockchain (@ultra-alliance/ultra-sdk, react-ultra, and uikit) and used them to build an [nft marketplace](https://github.com/Ultra-Tech-Alliance/interface), with docs for packages reaching 200+ weekly npm downloads

`typescript` `react` `sdk` `npm packages`

**`2022` [cosmic exodus](https://omc.sh/work/cosmic), fullstack engineer**

- built dex interfaces with react, ethers.js, and moralis, and defined tokenomics and financial plans supporting a $70k pre-seed raise, a concrete business impact

`react` `ethers.js` `moralis` `tokenomics`

**`2021-2022` [rainbows](https://omc.sh/work/rainbows), fullstack engineer**

- built polygon testnet smart contracts, a react and mongodb/express dapp, and ethers.js integrations, delivering an mvp for product testing

`smart contract development` `dapp development` `dao infrastructure` `react` `mongodb` `express` `typescript` `moralis` `wagmi`

**`2021-2022` [blockswan](https://omc.sh/work/blockswan), blockchain engineer** · [source](https://github.com/blockswan/blockswan-protocol)

- independently built a decentralized services marketplace prototype: solidity contracts (orders, disputes, juries, reputation, tested with foundry), a next.js frontend, an express and mongodb api, and postgres plus ponder for evm event indexing
- integrated usdc payments on polygon, transaction forwarding, social and wallet authentication, and ipfs storage
- ranked top 3 among 3,388 projects at the [polygon BUIDL IT hackathon](https://devpost.com/software/blockswanfamily), earning a $5k prize and a $5k grant

`solidity` `foundry` `next.js` `express` `mongodb` `postgresql` `ponder` `polygon` `ipfs`

**`2014-2021` [oscar design](https://www.behance.net/omcdotsh), brand & identity designer**

- designed 60+ logos and mascots for esports teams, gaming brands, and independent clients, from [logo folio 1](https://www.behance.net/gallery/17354603/Logo-Folio-1) and [logo folio 2](https://www.behance.net/gallery/23885671/Logo-Folio-2) to the [mascots](https://omc.sh/work/mascots) collection
- designed [five esports jersey concepts](https://omc.sh/work/jerseys) as textile graphics, from front and back to sleeves and sponsor zones
- drew the [team vitality](https://omc.sh/work/vitality) title lettering for _les aventures de neo & broken_
- built full identity systems for the wartner group (logo, pattern, brand book, website, app screens) and mac care (packaging and notices in french, english, and spanish)

`brand identity` `logo design` `illustration` `packaging`

---

```sql
SELECT date, activity FROM oscar
WHERE date<'2022-01-11' ORDER BY date DESC
```

- **2022** passed the selective entry exam at _42 paris_
- **2021** software tester at _flink_ — tested a supply chain forecasting application against representative datasets and edge cases; prepared test data, executed forecasting scenarios, and documented defects with reproducible steps
- **2021** content operator spain at _mano-mano_ — reviewed and localized spanish product listings; extracted and standardized product data against marketplace content requirements
- **2021** one year in economics & management at _ESCP_
- **2020** platform officer at _henri wartner group_ — built and launched an e-commerce storefront for a new mask manufacturing and distribution business during covid-19; researched demand and competitor pricing, and developed the brand identity
- **2017, 2019** organizational sciences at _dauphine_, taught in madrid with _uc3m_
- _tbwa\groupe_ — assistant project manager: analyzed competitor strategies and market trends; structured brand messaging and positioning frameworks
- _jésus et gabriel_ — assistant graphic designer: produced visual assets for client campaigns across marketing and communication materials

---

me, a decentralized dreamer | a love for building cool stuff

i craft bugs with equal mastery across the frontend and the blockchain/backend, delivering a complete experience to end users. self-taught, currently between lisbon, paris and dubai. originally from a world where football and video games reign supreme.

---

- [[omc]](https://omc.sh/contact) work with me, or [design a product](https://omc.sh/services/product-design) together
- [[in]](https://www.linkedin.com/in/omcdotsh) boss me on linkedin
- [[X]](https://x.com/omc_sh) retweet me on x
- [[be]](https://www.behance.net/omcdotsh) admire my design work on behance

---

### Quote

> "Great things are not done by impulse, but by a series of small things brought together."
> — **Vincent Van Gogh**

<#gabot_signing>
