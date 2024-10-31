/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.96.1
  Forc version: 0.65.2
  Fuel-Core version: 0.38.0
*/

import { Contract, ContractFactory, decompressBytecode } from "fuels";
import type { Provider, Account, DeployContractOptions, DeployContractResult } from "fuels";

import { CustomAsset } from "./CustomAsset";

const bytecode = decompressBytecode("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");

export class CustomAssetFactory extends ContractFactory {

  static readonly bytecode = bytecode;

  constructor(accountOrProvider: Account | Provider) {
    super(bytecode, CustomAsset.abi, accountOrProvider);
  }

  override deploy<TContract extends Contract = Contract>(
    deployOptions?: DeployContractOptions
  ): Promise<DeployContractResult<TContract>> {
    return super.deploy({
      storageSlots: CustomAsset.storageSlots,
      ...deployOptions,
    });
  }

  static async deploy (
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<DeployContractResult<CustomAsset>> {
    const factory = new CustomAssetFactory(wallet);
    return factory.deploy(options);
  }
}
