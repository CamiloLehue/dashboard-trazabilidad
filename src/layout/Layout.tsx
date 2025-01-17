/* Template Base Layout */

import { Aside } from "./Aside";
import { Header } from "./Header";

interface MyLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}
export function Layout({ title, description, children }: MyLayoutProps) {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_1000px_at_100%_200px,#ffdddd,transparent)]"></div>
      </div>
      <div className=" w-full h-screen ">
        <Header />
        <div className="flex gap-3 pt-3 px-2">
          <Aside />
          <main className="bg-slate-50/50 border border-white/80 backdrop-blur-xl w-full  rounded-xl px-5 pt-5">
            <h1>{title}</h1>
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
