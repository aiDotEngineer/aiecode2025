import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";

import { Button } from "../Button";
import { Container } from "../Container";
import { Logo } from "../Logos";

export function Header() {
  const [fixed, setFixed] = useState(true);

  const rootClassNames = {
    fixed,
    absolute: !fixed,
  };

  const headerClassNames = {
    "bg-white": fixed,
    "shadow-md": fixed,
    "text-black": fixed,
    "text-white": !fixed,
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 500 && !fixed) {
        setFixed(true);
      }
      if (window.scrollY < 200 && fixed) {
        setFixed(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fixed]);

  return (
    <div className={clsx("w-screen top-0 z-50", rootClassNames)}>
      <header className={clsx(headerClassNames)}>
        <Container>
          <div className="flex justify-between items-center py-3">
            <Link href="/paris" aria-label="Home">
              <Logo logo="aieParis" variant={!fixed ? "white" : "black"} />
            </Link>

            <div className="flex gap-6 items-center">
              <nav className="flex gap-6 items-center">
                <Button href="https://lu.ma/ai-engineer-paris" target="_blank">
                  Buy 2025 Tickets
                </Button>
              </nav>
            </div>
          </div>
        </Container>
      </header>
    </div>
  );
}
