import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import SidePanel from "@/components/SidePanel";


export const metadata: Metadata = {
  title: "Bint-e-Zahra",
  description: "Front-end Developer Portoflio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <section className="lg:overflow-y-hidden min-h-[100vh] relative">
          <div
            className="absolute
          w-[500px] h-[500px] top-[60rem]
          -left-10
          lg:-right-6 lg:-top-5 lg:h-[400px] lg:w-[400px] bg-[#f5ce67] rounded-full shadow lg:border_blur_1 -z-10"></div>

          <div
            className="absolute top-12
          -right-4 h-[180px] w-[180px]
          lg:top-8 lg:left-16 lg:h-[230px] lg:w-[230px] rounded-full bg-[#ff8e8e] lg:border_blur_2 -z-50"></div>

          <div
            className="absolute top-72
          -left-10 h-[250px] w-[250px]
          lg:bottom-8 lg:left-80 lg:h-[280px] lg:w-[280px] rounded-full bg-[#95cbea] lg:border_blur_3"></div>

          <div
            className="absolute 
          h-[100px] w-[100px]
          top-[48rem] left-28
          lg:bottom-52 lg:right-[36rem] lg:h-[120px] lg:w-[120px] rounded-full bg-[#85f5c6] lg:border_blur_4"></div>

          <div
            className="absolute
          top-[32rem]
          h-[220px] w-[220px] -right-20
          lg:-bottom-7 lg:right-28 lg:h-[180px] lg:w-[180px] rounded-full bg-[#f371d7] lg:border_blur_5"></div>
        </section>

        <div className="min-h-[100vh] absolute  bg_blur top-0 w-[100%] z-10">
          <div className="w-[100%]  min-h-[100vh] bg_blur z-10">
            <div className="w-[100%] z-10 pb-2">
              <Header />
              <div className="flex">
                {children}
                <SidePanel />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
