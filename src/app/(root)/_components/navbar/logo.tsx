import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <div>
      <Link href="/">
        <Image
          src="/eventureLogo.webp"
          alt="logo eventure"
          width={100}
          height={100}
        />
      </Link>
    </div>
  );
};
