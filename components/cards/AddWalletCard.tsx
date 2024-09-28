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

const AddWalletCard: React.FC = () => {
    const router = useRouter();

    const handleButtonClick = () => {
        router.push('/wallet-generator');
    };

    return (
        <Card className="border shadow-lg">
            <CardHeader>
                <CardTitle className="text-2xl">Add or create a web-based wallet</CardTitle>
                <CardDescription>Follow the steps below to set up your wallet.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-2">
                    <Label>1) Choose either Solana or Ethereum blockchain</Label>
                    <Label>2) Enter seed phrase or generate mnemonic.</Label>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
                <Button size="lg" onClick={handleButtonClick} aria-label="Choose blockchain and proceed to wallet generator">
                    Proceed to Wallet Generator
                </Button>
            </CardFooter>
        </Card>
    );
};

export default AddWalletCard;