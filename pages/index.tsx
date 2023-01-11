import Head from "next/head";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tesla Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.cdnfonts.com/css/gotham" rel="stylesheet" />
      </Head>
      <div className="h-screen w-screen snap-y snap-mandatory overflow-x-hidden">
        <Navbar />
        <main>
          <section className="relative h-screen w-screen snap-center flex-col justify-between bg-[url('../assets/ModelYMobile.png')] bg-cover bg-center pt-px sm:bg-[url('../assets/ModelY.png')]">
            <div className="mx-auto pt-[calc(13vh_+_24px)] text-center font-['Gotham']">
              <h1 className="animate-fade-up text-[36px] font-medium text-[#171A20] opacity-0 sm:text-[40px] ">
                Model Y
              </h1>
              <p className="animate-fade-up2 text-[14px] text-[#171A20] opacity-0">
                <Link
                  href="/drive"
                  // ! Does not transition the bottom border to 2px from 1px on hover like it should look back into this.
                  className="border-b border-[#171A20] pb-px hover:border-b-[2px]"
                >
                  Schedule a Demo Drive
                </Link>
              </p>
            </div>
            <div className="absolute left-0 right-0 bottom-[calc(9vh_+_24px)] mx-auto w-[90%] text-center sm:flex sm:w-[552px] sm:justify-between">
              <button className="animate-fade-up2 rounded bg-[#3D3F42]/[.9] py-2 px-6 text-white opacity-0 drop-shadow max-sm:mx-auto max-sm:block max-sm:w-[95%] sm:w-[264px] sm:animate-button-left">
                <span className="font-['Gotham'] text-[14px]">
                  Custom Order
                </span>
              </button>
              <button className="animate-fade-up2 rounded bg-[#E8E7E4]/[.9] py-2 px-6 opacity-0 drop-shadow max-sm:mx-auto max-sm:mt-4 max-sm:w-[95%] sm:w-[264px] sm:animate-button-right">
                <span className="font-['Gotham'] text-[14px] text-[#3D3F42]">
                  View Inventory
                </span>
              </button>
            </div>
          </section>

          <section className="relative h-screen w-screen snap-center flex-col justify-between bg-[url('../assets/Model3Mobile.png')] bg-cover bg-center pt-px sm:bg-[url('../assets/Model3.png')]">
            <div className="mx-auto pt-[calc(13vh_+_24px)] text-center font-['Gotham']">
              <h1 className="text-[36px] font-medium text-[#171A20] sm:text-[40px]">
                Model 3
              </h1>
              <p className="text-[14px] text-[#171A20]">
                <Link
                  href="/drive"
                  // ! Does not transition the bottom border to 2px from 1px on hover like it should look back into this.
                  className="border-b border-[#171A20] pb-px hover:border-b-[2px]"
                >
                  Schedule a Demo Drive
                </Link>
              </p>
            </div>
            <div className="absolute left-0 right-0 bottom-[calc(9vh_+_24px)] mx-auto w-[90%] text-center sm:flex sm:w-[552px] sm:justify-between">
              <button className="rounded bg-[#3D3F42]/[.9] py-2 px-6 text-white drop-shadow max-sm:mx-auto max-sm:block max-sm:w-[95%] sm:w-[264px]">
                <span className="font-['Gotham'] text-[14px]">
                  Custom Order
                </span>
              </button>
              <button className="rounded bg-[#E8E7E4]/[.9] py-2 px-6 drop-shadow max-sm:mx-auto max-sm:mt-4 max-sm:w-[95%] sm:w-[264px]">
                <span className="font-['Gotham'] text-[14px] text-[#3D3F42]">
                  View Inventory
                </span>
              </button>
            </div>
          </section>

          <section className="relative h-screen w-screen snap-center flex-col justify-between bg-[url('../assets/ModelSMobile.png')] bg-cover bg-center pt-px sm:bg-[url('../assets/ModelS.png')]">
            <div className="mx-auto pt-[calc(13vh_+_24px)] text-center font-['Gotham']">
              <h1 className="text-[36px] font-medium text-[#171A20] sm:text-[40px] ">
                Model 3
              </h1>
              <p className="text-[14px] text-[#171A20]">
                <Link
                  href="/drive"
                  // ! Does not transition the bottom border to 2px from 1px on hover like it should look back into this.
                  className="border-b border-[#171A20] pb-px hover:border-b-[2px]"
                >
                  Schedule a Demo Drive
                </Link>
              </p>
            </div>
            <div className="absolute left-0 right-0 bottom-[calc(9vh_+_24px)] mx-auto w-[90%] text-center sm:flex sm:w-[552px] sm:justify-between">
              <button className="rounded bg-[#3D3F42]/[.9] py-2 px-6 text-white drop-shadow max-sm:mx-auto max-sm:block max-sm:w-[95%] sm:w-[264px]">
                <span className="font-['Gotham'] text-[14px]">
                  Custom Order
                </span>
              </button>
              <button className="rounded bg-[#E8E7E4]/[.9] py-2 px-6 drop-shadow max-sm:mx-auto max-sm:mt-4 max-sm:w-[95%] sm:w-[264px]">
                <span className="font-['Gotham'] text-[14px] text-[#3D3F42]">
                  View Inventory
                </span>
              </button>
            </div>
          </section>

          <section className="relative h-screen w-screen snap-center flex-col justify-between bg-[url('../assets/ModelXMobile.png')] bg-cover bg-center pt-px sm:bg-[url('../assets/ModelX.png')]">
            <div className="mx-auto pt-[calc(13vh_+_24px)] text-center font-['Gotham']">
              <h1 className="text-[36px] font-medium text-[#171A20] sm:text-[40px] ">
                Model S
              </h1>
              <p className="text-[14px] text-[#171A20]">
                <Link
                  href="/drive"
                  // ! Does not transition the bottom border to 2px from 1px on hover like it should look back into this.
                  className="border-b border-[#171A20] pb-px hover:border-b-[2px]"
                >
                  Schedule a Demo Drive
                </Link>
              </p>
            </div>
            <div className="absolute left-0 right-0 bottom-[calc(9vh_+_24px)] mx-auto w-[90%] text-center sm:flex sm:w-[552px] sm:justify-between">
              <button className="rounded bg-[#3D3F42]/[.9] py-2 px-6 text-white drop-shadow max-sm:mx-auto max-sm:block max-sm:w-[95%] sm:w-[264px]">
                <span className="font-['Gotham'] text-[14px]">
                  Custom Order
                </span>
              </button>
              <button className="rounded bg-[#E8E7E4]/[.9] py-2 px-6 drop-shadow max-sm:mx-auto max-sm:mt-4 max-sm:w-[95%] sm:w-[264px]">
                <span className="font-['Gotham'] text-[14px] text-[#3D3F42]">
                  View Inventory
                </span>
              </button>
            </div>
          </section>

          <section className="relative h-screen w-screen snap-center flex-col justify-between bg-[url('../assets/SolarPanelsMobile.png')] bg-cover bg-center pt-px sm:bg-[url('../assets/SolarPanels.png')]">
            <div className="mx-auto pt-[calc(13vh_+_24px)] text-center font-['Gotham']">
              <h1 className="text-[36px] font-medium text-[#171A20] sm:text-[40px] ">
                Solar Panels
              </h1>
              <p className="text-[14px] text-[#171A20]">
                Lowest Cost Solar Panels in America
              </p>
            </div>
            <div className="absolute left-0 right-0 bottom-[calc(9vh_+_24px)] mx-auto w-[90%] text-center sm:flex sm:w-[552px] sm:justify-between">
              <button className="rounded bg-[#3D3F42]/[.9] py-2 px-6 text-white drop-shadow max-sm:mx-auto max-sm:block max-sm:w-[95%] sm:w-[264px]">
                <span className="font-['Gotham'] text-[14px]">Order Now</span>
              </button>
              <button className="rounded bg-[#E8E7E4]/[.9] py-2 px-6 drop-shadow max-sm:mx-auto max-sm:mt-4 max-sm:w-[95%] sm:w-[264px]">
                <span className="font-['Gotham'] text-[14px] text-[#3D3F42]">
                  Learn More
                </span>
              </button>
            </div>
          </section>

          <section className="relative h-screen w-screen snap-center flex-col justify-between bg-[url('../assets/SolarRoofMobile.png')] bg-cover bg-center pt-px sm:bg-[url('../assets/SolarRoof.png')]">
            <div className="mx-auto pt-[calc(13vh_+_24px)] text-center font-['Gotham']">
              <h1 className="text-[36px] font-medium text-[#171A20] sm:text-[40px] ">
                Solar Roof
              </h1>
              <p className="text-[14px] text-[#171A20]">
                Produce Clean Energy From Your Roof
              </p>
            </div>
            <div className="absolute left-0 right-0 bottom-[calc(9vh_+_24px)] mx-auto w-[90%] text-center sm:flex sm:w-[552px] sm:justify-between">
              <button className="rounded bg-[#3D3F42]/[.9] py-2 px-6 text-white drop-shadow max-sm:mx-auto max-sm:block max-sm:w-[95%] sm:w-[264px]">
                <span className="font-['Gotham'] text-[14px]">Order Now</span>
              </button>
              <button className="rounded bg-[#E8E7E4]/[.9] py-2 px-6 drop-shadow max-sm:mx-auto max-sm:mt-4 max-sm:w-[95%] sm:w-[264px]">
                <span className="font-['Gotham'] text-[14px] text-[#3D3F42]">
                  Learn More
                </span>
              </button>
            </div>
          </section>

          <section className="relative h-screen w-screen snap-center flex-col justify-between bg-[url('../assets/AccessoriesMobile.png')] bg-cover bg-center pt-px sm:bg-[url('../assets/Accessories.png')]">
            <div className="mx-auto pt-[calc(13vh_+_24px)] text-center font-['Gotham']">
              <h1 className="text-[36px] font-medium text-[#171A20] sm:text-[40px] ">
                Accessories
              </h1>
            </div>
            <div className="absolute left-0 right-0 bottom-[calc(9vh_+_24px)] mx-auto w-[90%] text-center sm:flex sm:w-[552px] sm:justify-between">
              <button className="mx-auto rounded bg-[#000] py-2 px-6 text-white drop-shadow max-sm:block max-sm:w-[95%] sm:w-[264px]">
                <span className="font-['Gotham'] text-[14px]">Shop Now</span>
              </button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
