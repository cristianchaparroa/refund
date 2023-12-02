# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```

# Celo


## Testnet Faucet
https://faucet.celo.org/alfajores

## Tesnet Block explorer
https://explorer.celo.org/alfajores

## Celo scan account
https://celoscan.io/login.aspx

## Deploying a contract

```shell
npm run -s deploy-chelo-test

> celo@1.0.0 deploy-chelo-test
> npx hardhat run scripts/deploy.ts --network alfajores

HelloCelo deployed to 0xAede86F892DF9EaF7fb854b5209cedae0aB54E90
```

## Verifying a contract
```shell
contract=0x949f940D0A9AA5a7adfe4A70065356d95e8FdD94 npm run -s verify-chelo-test
```
