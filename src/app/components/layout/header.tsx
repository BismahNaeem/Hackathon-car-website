import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AlignJustify } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 h-[60px]  shadow-md bg-white">
      {/* Logo */}
      <h1 className="text-[#3563e9] text-2xl font-bold">MORENT</h1>

      {/* Search Bar */}
      <div className="hidden md:flex items-center w-full max-w-md border  border-gray-300 rounded-full px-3 h-10">
        <Image
          src="/images/searchicon.png"
          alt="Search"
          height={100}
          width={100}
          className="w-5 h-5"
        />
        <span className="flex-grow text-gray-500 pl-3 truncate">Search something here</span>
        <Image
          src="/images/filter.png"
          alt="Filter"
          height={100}
          width={100}
          className="w-5 h-5"
        />
      </div>

      {/* Right-Side Icons */}
      <div className="hidden md:flex gap-x-3">
        <div className="flex items-center justify-center bg-white border border-gray-300 rounded-full h-8 w-8">
          <Image src="/images/heart.png" alt="" height={20} width={20} />
        </div>
        <div className="flex items-center justify-center bg-white border border-gray-300 rounded-full h-8 w-8">
          <Image src="/images/notification.png" alt="" height={20} width={20} />
        </div>
        <div className="flex items-center justify-center bg-white border border-gray-300 rounded-full h-8 w-8">
          <Image src="/images/settings.png" alt="" height={30} width={30} />
        </div>
        <div className="flex items-center justify-center bg-white border border-gray-300 rounded-full h-8 w-8">
          <Image src="/images/profil.png" alt="" height={24} width={24} className="w-full" />
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="flex md:hidden items-center justify-between border  border-gray-300 rounded-full px-3 h-10 w-2/4 mx-auto">
        <Image
          src="/images/searchicon.png"
          alt="Search"
          height={100}
          width={100}
          className="w-4 h-4"
        />
        <span className="text-sm text-gray-500 pl-1 truncate">Search something here</span>
        <Image
          src="/images/filter.png"
          alt="Filter"
          height={100}
          width={100}
          className="w-4 h-4"
        />
      </div>

      {/* Mobile Menu Sheet */}
      <Sheet>
        <SheetTrigger className="md:hidden">
          <AlignJustify />
        </SheetTrigger>
        <SheetContent className="bg-white">
            <h1 className="text-blue-600">Car Rent Website</h1>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;