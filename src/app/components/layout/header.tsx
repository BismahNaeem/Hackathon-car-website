import Image from "next/image"
import Link from "next/link"
import React from 'react'
import { AlignJustify } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const Header = () => {
  return (
    <div>
      {/* Desktop Navbar */}
      <header className="flex justify-between mt-4 shadow-md h-[60px]">
        {/* Logo */}
        <h1 className="text-[#3563e9] text-2xl font-bold ml-10 hidden md:block">MORENT</h1>

        {/* Search Bar */}
        <div className="items-center w-full max-w-md border border-gray-300 rounded-full px-3 h-10 hidden md:flex">
          {/* Search Icon */}
          <img
            src="/images/searchicon.png" // Replace with your search icon path
            alt="Search"
            className="w-5 h-5"
          />
          {/* Placeholder Text */}
          <span className="flex-grow text-gray-500 pl-3">Search something here</span>
          {/* Additional Icon (on the right side) */}
          <div>
            <img
              src="/images/filter.png" // Replace with your second icon path
              alt="Filter"
              className="w-5 h-5"
            />
          </div>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex gap-x-3 mr-8">
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

        {/* Mobile Navbar */}
        <div className="md:hidden flex items-center justify-between h-[55px] px-4 w-full mb-4">
          {/* Mobile Logo */}
          <h1 className="text-[#3563e9] text-2xl font-bold ">MORENT</h1>

          {/* Search Bar - Centered */}
          <div className="flex items-center justify-center border border-gray-300  ml-34 rounded-full  px-4 h-10  w-3/4">
            {/* Search Icon (left side) */}
            <img
              src="/images/searchicon.png" // Replace with your search icon path
              alt="Search"
              className="w-5 h-5"
            />
            {/* Placeholder Text */}
            <span className="flex-grow text-gray-500 pl-3">Search something here</span>
            {/* Additional Icon (right side) */}
            <img
              src="/images/filter.png" // Replace with your second icon path
              alt="Filter"
              className="w-5 h-5"
            />
          </div>
        </div>

        {/* Sheet - Mobile Only */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <AlignJustify />
          </SheetTrigger>
          <SheetContent className="bg-[#3563e9]">
            <ul className="md:block">
              <li className="space-x-5">
                <Link href="/">HomePage</Link>
              </li>
              <li className="mt-2">
                <Link href="/category">Category</Link>
              </li>
              <li className="mt-2">
                <Link href="/cardetail">CarDetails</Link>
              </li>
              <li className="mt-2">
                <Link href="/payment">Payment</Link>
              </li>
            </ul>
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </header>
    </div>
  );
}

export default Header;