"use client";

import { MendableFloatingButton } from "@mendable/search";

const style = { darkMode: false, accentColor: "#123456" };

export default function Mendable() {
  return (
    <>
      <MendableFloatingButton
        style={style}
        anon_key={process.env.NEXT_PUBLIC_MENDABLE_KEY!}
      />
    </>
  );
}
