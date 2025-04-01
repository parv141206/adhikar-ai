"use client";
import { VisuallyHidden } from "radix-ui";
import { Button } from "~/components/ui/button";
import { IoMenuOutline } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/chat", label: "Chat" },
    //{ href: "/about", label: "About" },
  ];
  return (
    <>
      <nav className="bg-texture bg-texture-light dark:bg-texture-dark text-foreground border-border/20 sticky top-0 right-0 left-0 z-50 hidden flex-row items-center justify-center gap-8 py-1 shadow-lg shadow-black/10 backdrop-blur-md md:flex dark:shadow-black/45">
        <Image
          src={"/logo.png"}
          width={50}
          height={50}
          className="my-2"
          alt="Logo"
        />
        <Link href="/" className="name-link">
          Home
        </Link>
        <Link href="/chat" className="name-link">
          Chat
        </Link>

        {/* <Link href="/about" className="name-link">
          About
        </Link> */}
      </nav>
      <nav className="relative z-[999] flex md:opacity-0">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="dark:bg-texture-dark border-border/50 fixed top-4 left-4 z-50 border bg-white"
            >
              <IoMenuOutline className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="dark:bg-texture-dark border-border/50 flex w-64 flex-col border-r bg-white"
          >
            <VisuallyHidden.Root>
              <SheetTitle>Menu</SheetTitle>
            </VisuallyHidden.Root>
            <nav className="flex flex-col space-y-1 p-5 pt-16">
              <>
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="hover:bg-accent hover:text-accent-foreground rounded-md p-2 text-lg font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  );
}
