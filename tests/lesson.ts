import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import {LetItGo} from "../target/types/let_it_go"

describe("lesson", () => {
  // Configure the client to use the local cluster.
  const counter = anchor.web3.Keypair.generate()

  const provider = anchor.AnchorProvider.env()
  anchor.setProvider(anchor.AnchorProvider.env());
  const program = anchor.workspace.Lesson as Program<LetItGo>;
  it("Is initialized!", async () => {
    // Add your test here.
    //name: String, avatar
    const tx = await program.methods.initUser("merto","imgUrl").accounts({
      userAccount:counter.publicKey,
      authority:provider.wallet.publicKey,
    }).rpc();
    const data = await program.account.userAccount.fetch(counter.publicKey)
    console.log("Your transaction signature", tx);
  });
});
