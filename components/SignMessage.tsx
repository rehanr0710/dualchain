import { ed25519 } from '@noble/curves/ed25519';
import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';
import { useState, ChangeEvent } from 'react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SignatureIcon } from 'lucide-react';
import { useSetRecoilState } from 'recoil';
import { signatureMessageAtom } from '@/store/atoms';

export default function SignMessage() {
    const { publicKey, signMessage, connected } = useWallet();
    const [message, setMessage] = useState<string>('');
    const setSignatureMessage = useSetRecoilState(signatureMessageAtom);

    async function handleSignMessage() {
        if (!publicKey) {
            toast.error('Wallet not connected!');
            return;
        }
        if (!signMessage) {
            toast.error('Wallet does not support message signing!');
            return;
        }

        try {
            const encodedMessage = new TextEncoder().encode(message);
            const signature = await signMessage(encodedMessage);

            const isValid = ed25519.verify(signature, encodedMessage, publicKey.toBytes());
            if (!isValid) throw new Error('Message signature invalid!');
            setSignatureMessage(bs58.encode(signature));
            toast.success('Message signed!');
        } catch (err) {
            toast.error('Signing failed!');
        }
    }

    const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    };

    return (
        <div className="flex space-x-2">
            <Input
                type="text"
                id="message"
                placeholder="Enter message"
                onChange={handleMessageChange}
            />
            <Button
                onClick={handleSignMessage}
                disabled={!message || !connected}
            >
                <SignatureIcon className="mr-2 h-4 w-4" /> Sign
            </Button>
        </div>
    );
}