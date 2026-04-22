"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function DynamicRoute1() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  return (
    <div className="flex items-center gap-2.5">
      <input
        type="search"
        placeholder="Buscar produto"
        className="w-full border border-gray-300 rounded-lg p-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        onClick={() => router.push(`/produtos/${search}`)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Buscar
      </button>
    </div>
  );
}
