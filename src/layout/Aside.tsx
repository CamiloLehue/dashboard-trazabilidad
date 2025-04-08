import {
  ArrowLeft,
  ArrowRight,
  Barcode,
  ChartNoAxesCombined,
  FishSymbol,
  LayoutGrid,
  LayoutPanelLeft,
  Minimize,
} from "lucide-react";
import { useNavigate } from "react-router";

interface AsideProps {
  fullScreen: boolean;
  stateFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Aside({ fullScreen, stateFullScreen }: AsideProps) {
  const navigate = useNavigate();
  return (
    <>
      <aside
        className={`bg-black/50 backdrop-blur-xl  rounded-xl p-2 text-base ${
          fullScreen ? "visible animate-fade-in-right animate-duration-500" : "hidden "
        }`}
      >
        <nav className="min-w-36">
          <h4 className="py-3 font-semibold text-neutral-500 text-center border-b border-neutral-800 mb-5">
            General
          </h4>
          <ul className="flex flex-col gap-5 py-5 px-5 text-xs text-neutral-300">
            <li>
              <a
                className="flex items-center justify-items-center gap-2"
                href="/dashboard"
              >
                <ChartNoAxesCombined size={16} />
                Dashboard
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-items-center gap-2"
                href="/inicio"
              >
                <LayoutPanelLeft size={16} />
                Actividades
              </a>
            </li>
            {/* <li>
              <a
                className="flex items-center justify-items-center gap-2"
                href="/centros"
              >
                <LandPlot size={16} />
                Centros
              </a>
            </li> */}
            <li>
              <a
                className="flex items-center justify-items-center gap-2"
                href="/folio"
              >
                <Barcode size={16} />
                Folios
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-items-center gap-2"
                href="/conteo"
              >
                <Barcode size={16} />
                Conteo
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <aside
        className={`bg-black/50 backdrop-blur-xl  rounded-xl p-2 text-base ${
          !fullScreen ? "visible animate-fade-in-right animate-duration-500" : "hidden "
        }`}
      >
        <nav>
          <button
            onClick={() => stateFullScreen(true)}
            className="text-neutral-400 bg-black hover:text-white w-full h-full flex justify-center items-center rounded-lg  hover:border-transparent hover:bg-black transition-all duration-300 "
          >
            <Minimize size={15} />
          </button>
          <button
            onClick={() => navigate("/dashboard") }
            className="text-neutral-400 bg-transparent hover:text-white w-full h-full flex justify-center items-center rounded-lg  hover:border-transparent  transition-all duration-300 "
          >
            <LayoutGrid size={15} />
          </button>
          <button
            onClick={() => navigate(-1)}
            className="text-neutral-400 bg-transparent hover:text-white w-full h-full flex justify-center items-center rounded-lg  hover:border-transparent  transition-all duration-300 "
          >
            <ArrowLeft size={15} />
          </button>
          <button
            onClick={() => navigate(1)}
            className="text-neutral-400 bg-transparent hover:text-white w-full h-full flex justify-center items-center rounded-lg  hover:border-transparent  transition-all duration-300 "
          >
            <ArrowRight size={15} />
          </button>
          <ul className="flex flex-col gap-5  py-5 px-5 text-xs">
            <li>
              <a
                className="flex items-center justify-items-center gap-2"
                href="/dashboard"
              >
                <ChartNoAxesCombined size={16} />
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-items-center gap-2"
                href="/inicio"
              >
                <LayoutPanelLeft size={16} />
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-items-center gap-2"
                href="/conteo"
              >
                
                <FishSymbol  size={16}/>
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-items-center gap-2"
                href="/folio"
              >
                <Barcode size={16} />
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
