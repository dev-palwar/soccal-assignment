import Image from "next/image";
import React, { useState } from "react";
import bookMyShowPhoneIcon from "../assets/BookMyShow_idCkXJezbd_1.png";
import moviePhoneIcon from "../assets/film-slate.png";
import ticketPhoneIcon from "../assets/ticket.png";
import userPhoneIcon from "../assets/user.png";
import { ContentType } from "@/types";
import { useSearchTerm } from "@/context/BookShowContext";

const MobileNavbar = () => {
  const { setContentType } = useSearchTerm();
  const [selectedType, setSelectedType] = useState<ContentType>(
    ContentType.MOVIE
  );

  const handleTypeClick = (type: ContentType) => {
    setSelectedType(type);
    setContentType(type);
  };

  const navItems = [
    {
      type: ContentType.MOVIE,
      icon: bookMyShowPhoneIcon,
      label: "Home",
    },
    {
      type: ContentType.SHOW,
      icon: moviePhoneIcon,
      label: "Shows",
    },
    {
      icon: ticketPhoneIcon,
      label: "Live Events",
    },
    {
      icon: userPhoneIcon,
      label: "Profile",
    },
  ];

  return (
    <div className="fixed inset-x-0 bottom-0 flex p-3 gap-2 w-full justify-evenly border bg-white">
      {navItems.map((item, index) => (
        <div
          key={index}
          className={`cursor-pointer flex flex-col items-center gap-1 ${
            selectedType === item.type ? "text-[rgb(220_53_88)]" : ""
          }`}
          onClick={() => item.type && handleTypeClick(item.type)}
        >
          <Image src={item.icon} height={20} width={20} alt={item.label} />
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default MobileNavbar;
