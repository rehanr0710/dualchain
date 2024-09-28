"use client";

import WalletAdapterCard from "@/components/cards/WalletAdapterCard";
import SendTokensCard from "@/components/cards/SendTokensCard";
import SignMessageCard from "@/components/cards/SignMessageCard";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-5 lg:p-6 lg:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 1.01 }}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 100 }}
                    transition={{ duration: 0.8 }}
                >
                    <WalletAdapterCard />
                </motion.div>
                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 1.01 }}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 100 }}
                    transition={{ duration: 0.8 }}
                >
                    <SendTokensCard />
                </motion.div>
                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 1.01 }} className="md:col-span-2"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 100 }}
                    transition={{ duration: 0.8 }}
                >
                    <SignMessageCard />
                    <h1 className="text-2xl font-semibold mt-5">Note: The above operations are working on DEVNET blockchain</h1>
                </motion.div>
            </div>
        </div>
    );
}