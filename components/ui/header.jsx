
"use client";

import React from "react";
import { Button } from "./button";
import { PenBox, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-grey backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Welth Logo"
            width={200}
            height={60}
            className="h-12 w-auto object-contain"
          />
        </Link>

       
        <div className="hidden md:flex items-center space-x-8">
          <SignedOut>
            <a href="#features" className="text-gray-600 hover:text-blue-600">
              Features
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600">
              Testimonials
            </a>
          </SignedOut>
        </div>

       
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link href="/main/dashboard">
              <Button variant="outline" className="flex items-center gap-2 bg-blue-200">
                <LayoutDashboard size={18} />
                <span className="hidden md:inline text-black">Dashboard</span>
              </Button>
            </Link>
            <Link href="/main/transaction/create">
              <Button className="flex items-center gap-2">
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>

          <SignedOut >
            <SignInButton mode="modal" forceRedirectUrl="/main/dashboard">
              <Button className="text-black" variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
              // afterSignOut="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
