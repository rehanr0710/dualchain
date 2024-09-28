"use client";
import { motion } from "framer-motion";
import SolanaFaucetCard from "./cards/SolanaFaucetCard";
import AddWalletCard from "./cards/AddWalletCard";

const BlockchainInfoSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="flex flex-col items-center gap-2 mb-3 md:mb-10">
                <h1 className="tracking-tighter text-4xl md:text-5xl font-black">
                    DualChain supports Solana and Ethereum blockchains
                </h1>
                <p className="text-primary/80 font-semibold text-lg md:text-xl">
                    Choose an action from below to get started.
                </p>
            </div>
        </motion.div>
    );
};

const LandingPage = () => {
    return (
        <div className="w-full min-h-[75vh] content-evenly">
            <BlockchainInfoSection />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex flex-col items-center gap-4 md:flex-row md:justify-evenly">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.05 }}>
                        <SolanaFaucetCard />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.05 }}>
                        <AddWalletCard />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default LandingPage;
