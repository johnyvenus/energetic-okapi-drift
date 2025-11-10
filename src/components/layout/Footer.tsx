import React from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Footer = () => {
  return (
    <footer className="border-t bg-background py-6 md:py-0">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-24">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Manufacturer. All rights reserved.
        </p>
        <MadeWithDyad />
      </div>
    </footer>
  );
};

export default Footer;