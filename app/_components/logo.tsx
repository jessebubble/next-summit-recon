import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Logo({ preload = false }: { preload?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
      <Image
        src="/summit-recon-mark.png"
        alt=""
        width={405}
        height={432}
        preload={preload}
        className="h-10 w-auto"
      />
      <Image
        src="/summit-recon-wordmark.png"
        alt={site.name}
        width={897}
        height={80}
        preload={preload}
        className="h-4 w-auto sm:h-4.5"
      />
    </Link>
  );
}
