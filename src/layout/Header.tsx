import {
  ArrowLeft,
  ArrowRight,
  LayoutGrid,
  Maximize,
  UserRound,
} from "lucide-react";
import { useNavigate } from "react-router";

interface HeaderProps {
  fullScreen: boolean;
  stateFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Header(  {fullScreen, stateFullScreen}: HeaderProps) {
  const navigate = useNavigate();
  return (
    <>
      <header className={ `w-full grid grid-cols-6 gap-1 ${(fullScreen ? "visible" : "hidden")}` }>
        <div className="flex justify-start p-2 h-full w-full items-center gap-2 rounded-xl bg-black/50 backdrop-blur-xl  ">
          <button onClick={() => stateFullScreen(false)} className="text-neutral-400 hover:text-white w-full h-full flex justify-center items-center rounded-lg shadow shadow-neutral-200/20 hover:border-transparent hover:bg-black transition-all duration-300 ">
            <Maximize size={15} />
          </button>
          <button
            onClick={() => navigate("/dashboard") }
            className="text-neutral-400 hover:text-white w-full h-full flex justify-center items-center rounded-lg shadow shadow-neutral-200/20 hover:border-transparent hover:bg-black transition-all duration-300 "
          >
            <LayoutGrid size={15} />
          </button>
          <button
            onClick={() => navigate(-1)}
            className="text-neutral-400 hover:text-white w-full h-full flex justify-center items-center rounded-lg shadow shadow-neutral-200/20 hover:border-transparent hover:bg-black transition-all duration-300 "
          >
            <ArrowLeft size={15} />
          </button>
          <button
            onClick={() => navigate(1)}
            className="text-neutral-400 hover:text-white w-full h-full flex justify-center items-center rounded-lg shadow shadow-neutral-200/20 hover:border-transparent hover:bg-black transition-all duration-300 "
          >
            <ArrowRight size={15} />
          </button>
        </div>
        <div className="col-span-4 rounded-xl grid grid-cols-4 w-full bg-black/50 backdrop-blur-xl min-h-14 shadow-xl shadow-neutral-500/20 ">
          <div className="flex justify-start ps-10 items-center">
            <img src="logo.png" alt="logo" className="w-8 h-8" />
          </div>
          <div className="col-span-2 text-white flex items-center justify-center">
            <p className="text-xs font-extrabold text-neutral-300">
              SISTEMA TRAZABILIDAD
            </p>
          </div>
        </div>
        <div className="flex justify-end pe-2 items-center gap-2 rounded-xl bg-black/50 backdrop-blur-xl ">
          {/* <button className="shadow text-xs text-white rounded-full hover:border-transparent hover:opacity-95 ">
            Administración
          </button>
          <button className="bg-red-700 shadow text-xs text-white rounded-full hover:border-transparent hover:opacity-95 ">
            Alertas
          </button> */}
          <button className="p-3 rounded-lg shadow shadow-neutral-200/20 hover:border-transparent hover:bg-black transition-all duration-300 ">
            <UserRound size={14} />
          </button>
        </div>
      </header>
    </>
  );
}
