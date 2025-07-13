import {
  LAMPORTS_PER_SOL,
  SystemProgram,
  Transaction,
  PublicKey,
} from '@solana/web3.js';

/**
 * Sends SOL from the connected wallet to the recipient.
 *
 * @param {Connection} connection - Solana connection (from useConnection).
 * @param {object} wallet - Wallet object from useWallet.
 * @param {string} recipient - Recipient public key as a base58 string.
 * @param {number} amount - Amount in SOL.
 * @returns {Promise<string>} - Transaction signature.
 */
export async function sendSol(connection, wallet, recipient, amount) {
  if (!wallet.publicKey || !wallet.signTransaction) {
    throw new Error('Wallet not connected or not capable of signing.');
  }

  const lamports = Math.round(amount * LAMPORTS_PER_SOL); // ✅ Fix: round to integer

  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: wallet.publicKey,
      toPubkey: new PublicKey(recipient),
      lamports,
    })
  );

  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = wallet.publicKey;

  const signedTransaction = await wallet.signTransaction(transaction);
  const signature = await connection.sendRawTransaction(signedTransaction.serialize());

  await connection.confirmTransaction(signature, 'confirmed');
  return signature;
}
