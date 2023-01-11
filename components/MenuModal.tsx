import React, { Fragment } from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import teslaLinks from "../data/navlinks.json";

interface MenuModalProps {
  isOpen: boolean;
  closeModal: VoidFunction;
}

export default function MenuModal({ isOpen, closeModal }: MenuModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-20 overflow-y-scroll"
        onClose={closeModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#494949] bg-opacity-50" />
        </Transition.Child>
        <div className="fixed right-0 top-0 overflow-y-auto">
          <div className="">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in duration-300 transform"
              enterFrom="opacity-0 translate-x-[50px]"
              enterTo="opacity-100 translate-x-0"
              leave="transition ease-out duration-500 transform"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-[50px]"
            >
              <Dialog.Panel className="h-[100vh] w-[300px] overflow-y-auto bg-white p-6 text-left opacity-0 shadow-xl">
                <div className="text-right">
                  <button
                    type="button"
                    className="relative rounded px-2 py-[1px] text-[35px] leading-none transition-all hover:bg-[#F2F2F2]"
                    onClick={closeModal}
                  >
                    <span className="relative bottom-[3px] font-thin">
                      &times;
                    </span>
                  </button>
                </div>

                <ul className="mt-4">
                  {teslaLinks &&
                    teslaLinks.map((link, index) => {
                      return (
                        <li
                          key={index}
                          className="mb-2 rounded transition-all hover:bg-[#F2F2F2]"
                        >
                          <Link
                            className="block w-full rounded-md py-1 px-2 font-['Gotham'] text-[14px] hover:bg-[#F2F2F2]"
                            href={link.url}
                          >
                            <span className="mx-1">{link.name}</span>
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
