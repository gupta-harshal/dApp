import { useWallet,useConnection } from "@solana/wallet-adapter-react"
import react from "react"

export default function Airdrop(){
    const wallet=useWallet();
    const {connection}=useConnection();
    async function sendAirDrop(){
        const amount=document.getElementById("amount").value;
        await connection.requestAirdrop(wallet.publicKey,amount*1000000000)
    }
    return (
        <div>
            Hi From Airdrop {wallet.publicKey ? wallet.publicKey.toString() : "No Wallet Connected"}
            {console.log(wallet)}
            <input id="amount" type="text" placeholder="amount"></input>
            <button onClick={sendAirDrop}>Send Airdrop</button>
        </div>
    )
}