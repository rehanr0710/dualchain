'use client';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';

const SolanaFaucetCard: React.FC = () => {
    const router = useRouter();

    return (
        <Card className="border shadow-lg">
            <CardHeader>
                <CardTitle className="text-2xl">Connect your Solana Wallet</CardTitle>
                <CardDescription className="text-center">
                    Airdrop / Transact Solana / Sign Message !!!
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-2">
                    <Label>1) The premium faucet for Solana Airdrop.</Label>
                    <Label>2) Send Solana & sign messages.</Label>
                </div>
            </CardContent>
            <CardFooter className="justify-center">
                <Button size="lg" onClick={() => router.push('/solana-adapter')}>
                    Choose
                </Button>
            </CardFooter>
        </Card>
    );
};

export default SolanaFaucetCard;