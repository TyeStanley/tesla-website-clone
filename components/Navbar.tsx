import Link from "next/link";
import Image from "next/image";
import teslaLogo from "../assets/teslaLogo.svg";
import modelsInfo from "../data/models.json";

const models = modelsInfo.models;

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent p-3">
      <div className="flex items-center justify-between">
        <Link href="/" className="px-4">
          <Image src={teslaLogo} width={120} alt="Tesla Logo" />
        </Link>
        <ol className="hidden list-none lg:flex">
          {models.map((model) => {
            return (
              <li
                key={model.name}
                className="cursor-pointer rounded py-1 transition delay-75 ease-linear hover:bg-[#171A20]/[.09]"
              >
                <Link href={model.url} className="px-2">
                  <span className="mx-2 font-['Gotham'] text-[14px] text-[#171A20]">
                    {model.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
        <ol className="flex list-none items-center">
          <li className="hidden cursor-pointer rounded py-1 transition delay-75 ease-linear hover:bg-[#171A20]/[.09] lg:block">
            <Link href="/shop" className="px-2">
              <span className="mx-2 font-['Gotham'] text-[14px] text-[#171A20]">
                Shop
              </span>
            </Link>
          </li>
          <li className="hidden cursor-pointer rounded py-1 transition delay-75 ease-linear hover:bg-[#171A20]/[.09] lg:block">
            <Link href="/teslaaccount" className="px-2">
              <span className="mx-2 font-['Gotham'] text-[14px] text-[#171A20]">
                Account
              </span>
            </Link>
          </li>
          <li className="cursor-pointer rounded bg-[#171A20]/[.07] py-1 transition delay-75 ease-linear hover:bg-[#171A20]/[.09] lg:bg-transparent">
            <button className="px-4 text-center font-['Gotham'] text-[14px] text-[#171A20]">
              Menu
            </button>
          </li>
        </ol>
      </div>
    </nav>
  );
}
