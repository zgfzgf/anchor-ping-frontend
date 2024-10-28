// Here we export some useful types and functions for interacting with the Anchor program.
import { AnchorProvider, Program } from '@coral-xyz/anchor';
import { Cluster, PublicKey } from '@solana/web3.js';
import CounterIDL from '../lucky/luckypaw.json';
import type { AnchorCounter } from '../lucky/luckypaw.json';

// Re-export the generated IDL and type
export { AnchorCounter, CounterIDL };

// The programId is imported from the program IDL.
export const COUNTER_PROGRAM_ID = new PublicKey(CounterIDL.address);

// This is a helper function to get the Counter Anchor program.
export function getCounterProgram(provider: AnchorProvider) {
  return new Program(CounterIDL as AnchorCounter, provider);
}

// This is a helper function to get the program ID for the Counter program depending on the cluster.
export function getCounterProgramId(cluster: Cluster) {
  switch (cluster) {
    case 'devnet':
      return new PublicKey('W2wDsRgooFikCVetWg55Be3ty1NzSzvfsJ8wH1dsK3Q');
    case 'testnet':
    case 'mainnet-beta':
    default:
      return COUNTER_PROGRAM_ID;
  }
}
