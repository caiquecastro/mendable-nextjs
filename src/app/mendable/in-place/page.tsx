"use client";

import { MendableInPlace } from "@mendable/search";

const style = { darkMode: false, accentColor: "#123456" };

export default function Mendable() {
  return (
    <>
      <MendableInPlace
        anon_key={process.env.NEXT_PUBLIC_MENDABLE_KEY!}
        style={style}
      />
    </>
  );
}
