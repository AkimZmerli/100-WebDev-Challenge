import Link from "next/link";
import { roboto } from "@/next/fonts";

export default function Home() {
  return (
    <div>
      <main>
        <Link href={"/profilecard"}>Profile Card</Link>
      </main>
    </div>
  );
}
