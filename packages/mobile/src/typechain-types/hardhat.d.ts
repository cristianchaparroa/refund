/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "HelloCelo",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HelloCelo__factory>;
    getContractFactory(
      name: "Lock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Lock__factory>;
    getContractFactory(
      name: "Projects",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Projects__factory>;

    getContractAt(
      name: "HelloCelo",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.HelloCelo>;
    getContractAt(
      name: "Lock",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Lock>;
    getContractAt(
      name: "Projects",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Projects>;

    deployContract(
      name: "HelloCelo",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.HelloCelo>;
    deployContract(
      name: "Lock",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Lock>;
    deployContract(
      name: "Projects",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Projects>;

    deployContract(
      name: "HelloCelo",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.HelloCelo>;
    deployContract(
      name: "Lock",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Lock>;
    deployContract(
      name: "Projects",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Projects>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
