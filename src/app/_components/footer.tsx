import React from "react";
import { FaHeart } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="flex items-center justify-center">
      <p className="flex items-center gap-1 py-3 text-white">
        Crafted with <FaHeart className="align-middle text-red-500" /> and care
        by Affan
      </p>
    </footer>
  );
}
