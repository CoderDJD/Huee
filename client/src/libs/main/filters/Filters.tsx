import React from "react";
import { FiFilter, FiSearch } from "react-icons/fi";
interface Props {
  filters: Record<string, string>;
  onChangeFilters(filters: Record<string, string>): void;
}

export default function Filters({ onChangeFilters, filters }: Props) {
  return (
    <div className="flex items-center w-full">
      <input type="text" placeholder="Search by category, Company or" />
      <FiFilter />
      <button>
        <FiSearch />
      </button>
      {/* Selected filters */}
      {Object.values((x: string) => (
        <button key={x}>{x}</button>
      ))}
      <div className="items-center justify-between flex">
        <div className="flex items-center">
          <button>Projects for you</button>
          <button>Popular</button>
        </div>
        <span>Sort:</span>
        <select className="rounded outline-none border-2 border-solid border-gray-100">
          <option>Newest</option>
          <option>Oldest</option>
          <option>recent</option>
        </select>
      </div>
    </div>
  );
}
