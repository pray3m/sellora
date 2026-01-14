import Link from "next/link";
import React from "react";
import { Heart, Search, User } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-[80%] py-5 m-auto flex items-center justify-between">
        <div>
          <Link href={"/"}>
            <span className="text-3xl font-medium">Sellora</span>
          </Link>
        </div>
        <div className="w-[50%] relative">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for products..."
            className="w-full px-4 font-poppins font-medium border-[2.5px] border-primary rounded-md outline-none py-2 h-[48px]"
          />
          <div className="w-[60px] cursor-pointer justify-center flex items-center h-[48px] absolute top-0 right-0 bg-primary">
            <Search className="text-primary-foreground" />
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Link
              href={"/login"}
              className="border-2 w-[48px] h-[48px] flex items-center justify-center px-3 py-2 rounded-full border-border"
            >
              <User />
            </Link>
            <Link href={"/login"}>
              <span className="block font-medium">Hello,</span>
              <span className="font-semibold">Sign In</span>
            </Link>
          </div>

          <div className="flex items-center gap-5">
            <Link href="/wishlist" className="relative">
              <Heart />
              <div className="w-6 h-6 border-2 border-card bg-destructive absolute top-[-10px] right-[-10px] rounded-full flex items-center justify-center">
                <span className="text-destructive-foreground font-medium text-sm">
                  2
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
