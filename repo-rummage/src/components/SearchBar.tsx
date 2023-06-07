import { MagnifyingGlass } from "@phosphor-icons/react";
import React, { useState } from "react";

type SearchBarProps = {
  onSearch: (searchTerm: string) => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={onSubmit} className="flex gap-1">
      <input
        type="text"
        className="text-black"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search repos..."
      />
      <button type="submit">
        <MagnifyingGlass size={18} />
      </button>
    </form>
  );
};
