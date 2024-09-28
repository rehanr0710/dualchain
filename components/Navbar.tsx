import React from "react";
import { ModeToggle } from "./ui/theme-button";
import Logo from "./ui/logo";

interface NavbarProps {
  version: string;
}

const VersionBadge: React.FC<{ version: string }> = ({ version }) => (
  <span className="rounded-full text-base bg-primary/10 border border-primary/50 px-2">
    v {version}
  </span>
);

const Navbar: React.FC<NavbarProps> = ({ version }) => {
  return (
    <header className="flex justify-between items-center py-4 px-8">
      <div className="flex items-center gap-2">
        <Logo />
        <div className="flex flex-col gap-4">
          <h1 className="tracking-tighter text-3xl font-extrabold text-primary flex gap-2 items-center">
            DualChain <VersionBadge version={version} />
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <ModeToggle />
      </div>
    </header>
  );
};

export default Navbar;