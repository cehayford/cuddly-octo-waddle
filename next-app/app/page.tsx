import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <p>Hello, buddies. This is my first Nextjs code.</p>
      <Link href="/user">Users</Link>
      <ProductCard/>
    </main>
  );
}
