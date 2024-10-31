"use client";

import React, { useState } from "react";
import Image from "next/image";
import bookMyShow from "../assets/bookmyshow.png";
import searchIcon from "../assets/icons8-search-50.png";
import { useSearchTerm } from "@/context/BookShowContext";
import { ContentType } from "@/types";

export default function Navbar() {
  const { searchTerm, setSearchTerm, setContentType } = useSearchTerm();
  const [selectedType, setSelectedType] = useState<ContentType>(
    ContentType.MOVIE
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleTypeClick = (type: ContentType) => {
    setSelectedType(type);
    setContentType(type);
  };

  // Menu items data
  const leftMenuItems = [
    { label: "Movies", type: ContentType.MOVIE },
    { label: "Shows", type: ContentType.SHOW },
    { label: "Sports" },
    { label: "News" },
    { label: "Premium" },
  ];

  const rightMenuItems = [
    { label: "ListYourShow" },
    { label: "Corporates" },
    { label: "Offers" },
    { label: "Gift Cards" },
  ];

  const locations = [
    { value: "delhi", label: "Delhi" },
    { value: "mumbai", label: "Mumbai" },
    { value: "bangalore", label: "Bangalore" },
    { value: "hyderabad", label: "Hyderabad" },
    { value: "chennai", label: "Chennai" },
  ];

  return (
    <header className="bg-white shadow-md">
      <nav className="flex items-center justify-between mt-1 lg:px-32 lg:py-2">
        <div className="flex items-center w-full lg:w-auto">
          <Image src={bookMyShow} alt="BookMyShow" height={100} width={100} />

          {/* Search box */}
          <div className="relative border-[1px] w-[100%]">
            <Image
              src={searchIcon}
              alt=""
              className="pb-1 absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            />
            <input
              className="pl-8 pb-1 focus:outline-none w-[100%]"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <select className="hidden lg:block bg-white">
            {locations.map((location) => (
              <option key={location.value} value={location.value}>
                {location.label}
              </option>
            ))}
          </select>

          <button className="p-1 px-3 rounded-sm bg-[rgb(220_53_88)] hover:bg-orange-600 text-white hidden lg:block">
            Sign In
          </button>

          <button className="md:hidden">
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </nav>

      {/* Category bar */}
      <div className="hidden lg:flex bg-gray-100 py-2 relative px-32 justify-between">
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
          {leftMenuItems.map((item, index) => (
            <p
              key={index}
              className={`text-sm font-medium whitespace-nowrap cursor-pointer ${
                selectedType === item.type
                  ? "text-[rgb(220_53_88)] font-semibold"
                  : ""
              }`}
              onClick={() => item.type && handleTypeClick(item.type)}
            >
              {item.label}
            </p>
          ))}
        </div>
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
          {rightMenuItems.map((item, index) => (
            <p
              key={index}
              className="text-sm font-medium whitespace-nowrap cursor-pointer"
            >
              {item.label}
            </p>
          ))}
        </div>
      </div>
    </header>
  );
}
