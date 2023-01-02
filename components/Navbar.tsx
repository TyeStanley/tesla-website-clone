import Link from "next/link";
import Image from "next/image";
import teslaLogo from "../assets/teslaLogo.svg";

export default function Navbar() {
  return (
    <nav className="bg-black fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link href="/">
          <Image src={teslaLogo} width={130} height={20} alt="Tesla Name" />
        </Link>
      </div>
    </nav>
  );
}
