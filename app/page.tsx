import Image from "next/image";
import { getHeroImageUrl } from "./lib/data";

export default function Home() {
  const heroImageUrl = getHeroImageUrl();

  return (
    <main>
      <Image
        alt="hero images"
        src={heroImageUrl}
        fill
        objectFit="cover"
        quality={100}
      />
    </main>
  );
}
