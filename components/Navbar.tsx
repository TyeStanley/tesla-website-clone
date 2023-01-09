import Link from "next/link";
import Image from "next/image";
import teslaLogo from "../assets/teslaLogo.svg";
import models from "../data/models.json";
import MenuModal from "../components/MenuModal";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal(): void {
    setIsOpen(false);
  }

  function openModal(): void {
    setIsOpen(true);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-transparent p-3">
      <MenuModal isOpen={isOpen} closeModal={closeModal} />
      <div className="flex items-center justify-between">
        <Link href="/" className="px-4">
          <Image src={teslaLogo} width={120} alt="Tesla Logo" />
        </Link>
        <ol className="hidden list-none lg:flex">
          {models.map((model, index) => {
            return (
              <li
                key={index}
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
            <button
              type="button"
              onClick={openModal}
              className="px-4 text-center font-['Gotham'] text-[14px] text-[#171A20]"
            >
              Menu
            </button>
          </li>
        </ol>
      </div>
    </nav>
  );
}
