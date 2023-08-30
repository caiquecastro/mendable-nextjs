import Link from "next/link";

export default function MendableIndex() {
  return (
    <>
      <Link href="/mendable/bubble">Bubble</Link>
      <Link href="/mendable/floating-button">Floating Button</Link>
      <Link href="/mendable/in-place">In Place</Link>
      <Link href="/mendable/search-bar">Search Bar</Link>
    </>
  );
}
