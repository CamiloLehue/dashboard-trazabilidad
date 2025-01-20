import { useState, useEffect } from "react";
import { Aside } from "./Aside";
import { Header } from "./Header";

interface MyLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function Layout({ title, children }: MyLayoutProps) {
  const [fullScreen, setFullScreen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timer);
  }, [fullScreen]);

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-neutral-700">
        <div className="absolute h-full bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_1200px_at_100%_300px,#7F86A3,transparent)]"></div>
        <div className="absolute h-full bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_100%_100px,#CA0D2E,transparent)]"></div>
      </div>
      <div className="w-full">
        <div className={`flex gap-1 w-full ${fullScreen ? "p-3" : "p-1"}`}>
          <Aside fullScreen={fullScreen} stateFullScreen={setFullScreen} />
          <div className="flex flex-col w-full gap-1">
            <Header fullScreen={fullScreen} stateFullScreen={setFullScreen} />
            <main
              className={`bg-black/50 backdrop-blur-xl w-full rounded-xl p-5 ${
                animate ? "animate-slide-up-fade" : ""
              }`}
            >
              <h1 className="px-2">{title}</h1>
              {children}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
