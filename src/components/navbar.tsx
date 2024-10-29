"use client";

import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRef, useState } from "react";
import Image from "next/image";
import bookMyShow from "../assets/bookmyshow.png";
import { useSearchTerm } from "@/context/BookShowContext";

export default function Navbar() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { searchTerm, setSearchTerm, setSearchType } = useSearchTerm();
  const [selectedType, setSelectedType] = useState<string>("movie");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleTypeClick = (type: string) => {
    setSelectedType(type);
    setSearchType(type);
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <Image src={bookMyShow} alt="Book my show" height={100} width={100} />
        </div>

        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              className="pl-8"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a city" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mumbai">Mumbai</SelectItem>
              <SelectItem value="delhi">Delhi</SelectItem>
              <SelectItem value="bangalore">Bangalore</SelectItem>
              <SelectItem value="hyderabad">Hyderabad</SelectItem>
              <SelectItem value="chennai">Chennai</SelectItem>
            </SelectContent>
          </Select>

          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            Sign In
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </nav>

      <div className="bg-gray-100 px-4 py-2 relative">
        <div
          ref={scrollContainerRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide"
        >
          <p
            className={`text-sm font-medium whitespace-nowrap cursor-pointer ${
              selectedType === "movie" ? "text-orange-500 font-semibold" : ""
            }`}
            onClick={() => handleTypeClick("movie")}
          >
            Movies
          </p>
          <p
            className={`text-sm font-medium whitespace-nowrap cursor-pointer ${
              selectedType === "show" ? "text-orange-500 font-semibold" : ""
            }`}
            onClick={() => handleTypeClick("show")}
          >
            Shows
          </p>
          <p
            className={`text-sm font-medium whitespace-nowrap cursor-pointer ${
              selectedType === "tv" ? "text-orange-500 font-semibold" : ""
            }`}
            onClick={() => handleTypeClick("tv")}
          >
            TV
          </p>
          <p className="text-sm font-medium whitespace-nowrap">Sports</p>
          <p className="text-sm font-medium whitespace-nowrap">News</p>
          <p className="text-sm font-medium whitespace-nowrap">Premium</p>
          <p className="text-sm font-medium whitespace-nowrap">Music</p>
          <p className="text-sm font-medium whitespace-nowrap">Kids</p>
          <p className="text-sm font-medium whitespace-nowrap">Documentaries</p>
        </div>
      </div>
    </header>
  );
}
