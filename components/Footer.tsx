import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-[70px] snap-center">
      <nav className="flex justify-center px-[24px] pb-[50px] align-middle xmd:pb-0">
        <ul className="flex-wrap text-center text-[#5C5E62] sm:flex  sm:justify-center">
          <li className="mb-2 font-['Gotham'] text-[12px] sm:mr-[14px] sm:py-2">
            <Link href="/about">Tesla Copyrights</Link>
          </li>
          <li className="mb-2 font-['Gotham'] text-[12px] sm:mr-[14px] sm:py-2">
            <Link href="/legal">Privacy & Legal</Link>
          </li>
          <li className="mb-2 font-['Gotham'] text-[12px] sm:mr-[14px] sm:py-2">
            <Link href="/vin-recall-search">Vehicle Recalls</Link>
          </li>
          <li className="mb-2 hidden font-['Gotham'] text-[12px] sm:mr-[14px] sm:block sm:py-2">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="mb-2 font-['Gotham'] text-[12px] sm:mr-[14px] sm:py-2">
            <Link href="/careers">Careers</Link>
          </li>
          <li className="mb-2 font-['Gotham'] text-[12px] sm:mr-[14px] sm:py-2">
            <Link href="/blog">News</Link>
          </li>
          <li className="mb-2 hidden font-['Gotham'] text-[12px] sm:mr-[14px] sm:block sm:py-2">
            <Link href="/engage">Engage</Link>
          </li>
          <li className="mb-2 hidden font-['Gotham'] text-[12px] sm:block sm:py-2">
            <Link href="/findus/list">Locations</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
