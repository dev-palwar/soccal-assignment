"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

const BookShowContext = createContext<
  | {
      searchTerm: string;
      setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
      searchType: string;
      setSearchType: React.Dispatch<React.SetStateAction<string>>;
    }
  | undefined
>(undefined);

export const Provider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchType, setSearchType] = useState<string>("movie");

  return (
    <BookShowContext.Provider
      value={{ searchTerm, setSearchTerm, searchType, setSearchType }}
    >
      {children}
    </BookShowContext.Provider>
  );
};

export const useSearchTerm = () => {
  const context = useContext(BookShowContext);
  if (context === undefined) {
    throw new Error("useSearchTerm must be used within a SearchTermProvider");
  }
  return context;
};
