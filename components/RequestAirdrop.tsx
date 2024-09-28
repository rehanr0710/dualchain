import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useCallback, useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CoinsIcon } from "lucide-react";
import { emitBalanceUpdate } from "@/lib/events";

export default function RequestAirdrop() {
    const [amount, setAmount] = useState<number | null>(null);
    const { publicKey, connected } = useWallet();
    const { connection } = useConnection();

    const getAirdropOnClick = useCallback(async () => {
        if (!publicKey) {
            toast.error('Wallet not connected!');
            return;
        }
        if (!amount) {
            toast.error('Amount not specified or out of range!');
            return;
        }

        const airdropPromise = async () => {
            try {
                await connection.requestAirdrop(publicKey, amount * LAMPORTS_PER_SOL);
                setTimeout(emitBalanceUpdate, 3000);
                return "Airdrop confirmed!";
            } catch (err) {
                toast.error("Airdrop failed!");
                throw err;
            }
        };

        toast.promise(airdropPromise, {
            loading: 'Requesting airdrop...',
            success: (data) => data,
            error: 'Airdrop failed!',
        });
    }, [publicKey, connection, amount]);

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value > 0 && value <= 5) {
            setAmount(value);
        } else {
            setAmount(null);
            toast.error('Amount must be between 1 and 5 SOL');
        }
    };

    return (
        <div className="flex space-x-2">
            <Input
                type="number"
                min={0}
                id="airdrop-amount"
                placeholder="SOL amount"
                className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                onChange={handleAmountChange}
            />
            <Button
                onClick={getAirdropOnClick}
                disabled={!amount || !connected}>
                <CoinsIcon className="mr-2 h-4 w-4" /> Airdrop
            </Button>
        </div>
    )

}