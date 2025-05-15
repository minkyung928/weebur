"use client";

import { useEffect, useState } from "react";
import HeaderView from "./HeaderView";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Header() {
  const [shrink, setShrink] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const initialQuery = searchParams.get("q") ?? "";
    setInputValue(initialQuery);
  }, [searchParams]);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams.toString());
    if (inputValue) {
      params.set("q", inputValue);
    } else {
      params.delete("q");
    }

    router.push(`${pathname}?${params.toString()}`);
  };
  return (
    <HeaderView
      shrink={shrink}
      isFocused={isFocused}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      handleSubmit={handleSubmit}
      inputValue={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
}
