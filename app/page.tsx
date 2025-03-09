"use client";
import { Hero } from "@/components/Hero";
import { ThemeToggleButton } from "@/components/themeToggleButton";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}
