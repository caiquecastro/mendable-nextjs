"use client";

import { MendableSearchBar } from "@mendable/search";

const style = { darkMode: false, accentColor: "#123456" };

export default function Mendable() {
  return (
    <>
      <MendableSearchBar
        style={style}
        anon_key={process.env.NEXT_PUBLIC_MENDABLE_KEY!}
      />
    </>
  );
}
