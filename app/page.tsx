import Link from "next/link";
import { roboto } from "@/next/fonts/google";

export default function Home() {
  return (
    <div>
      <main>
        <Link href={"/profilecard"}>Profile Card</Link>
        <Link href={"/addtobag"}>Add To Bag</Link>
      </main>
    </div>
  );
}
