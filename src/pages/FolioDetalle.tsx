import {
  Check,
  CircleArrowRight,
  FileDown,
  FilePenLine,
  FileSearch,
  FileUp,
  Hexagon,
  LandPlot,
  Link,
  Sailboat,
  Trash2,
} from "lucide-react";
import { CardLayout } from "../components/ui/CardLayout";

export function FolioDetalle() {
  return (
    <>
      <main className="w-full rounded-lg my-5 flex  flex-col gap-2">
        <CardLayout>
          <div className="flex justify-between items-center mb-5">
            <h2>Proceso Actual</h2>
            <h3 className="text-slate-500 border border-lime-300 rounded-full px-10">
              En Acopio
            </h3>
          </div>
          <ol className="items-center grid grid-cols-3">
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-14 h-12 bg-green-200 rounded-full ring-0 ring-white ">
                  <Sailboat size={12} />
                </div>
                <div className="hidden sm:flex w-full bg-green-200 h-0.5 "></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-gray-900 ">Centro</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
                  10-01-2025
                </time>
                <p className="text-base font-normal text-green-500 ">
                  Aprobado
                </p>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 animate-pulse flex items-center justify-center w-16 h-14 bg-lime-300 rounded-full ring-0 ring-white ">
                  <Hexagon size={30} color="white" />
                </div>
                <div className="hidden sm:flex w-full h-0.5 border-b-2 border-dashed border-gray-200"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-gray-900 ">Acopio</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
                  20-01-2025
                </time>
                <p className="text-base font-normal text-lime-500 animate-pulse">
                  En Proceso
                </p>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-neutral-100 rounded-full ring-0 ring-white ">
                  <LandPlot size={12} />
                </div>
                <div className="hidden sm:flex w-full h-0.5 border-b-2 border-dashed border-gray-200"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-gray-900 ">Planta</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
                  25-01-2025
                </time>
                <p className="text-base font-normal text-gray-500 ">
                  En espera
                </p>
              </div>
            </li>
          </ol>
        </CardLayout>
        <div className="grid grid-cols-2 gap-5">
          <CardLayout>
            <div className="flex justify-between items-center">
              <h2> Detalles Orden Folio <span className="font-bold">N° 7457546</span></h2>
            </div>
            <div className="mt-5">
              <ul className="text-slate-900">
                <li className="grid grid-cols-2 ">
                  <p>Desde Centro:</p>
                  <p className="font-semibold">Centro Panitao</p>
                </li>
                <li className="grid grid-cols-2 ">
                  <p>Hacia Acopio:</p>
                  <p className="font-semibold">Acopio 2</p>
                </li>
                <li className="grid grid-cols-2 ">
                  <p>Kilos</p>
                  <p className="font-semibold">9000kg</p>
                </li>
                <li className="grid grid-cols-2 ">
                  <p>Autorizado por</p>
                  <p className="font-semibold">Supervisor de turno</p>
                </li>
              </ul>
            </div>
          </CardLayout>
          <div>
            <div className="grid grid-cols-1  h-full ">
              <CardLayout>
                <div className="flex justify-between items-center">
                  <h2>Aprobar proceso actual</h2>
                  <span className="text-xs px-10 text-red-400">
                    7 documentos restantes para aprobar
                  </span>
                </div>
                <div className="flex justify-center items-center h-full">
                  <button
                    onClick={() =>
                      alert("No se puede aprobar, documentos faltantes (6)")
                    }
                    className="flex justify-center items-center gap-1 bg-slate-100  rounded-full py-4 px-10 w-full hover:border-transparent"
                  >
                    Continuar <CircleArrowRight size={18} />
                  </button>
                </div>
              </CardLayout>
            </div>
          </div>
        </div>
        <CardLayout>
          <div className="flex justify-between items-center">
            <h2>
              Documentos Adjuntos <span>3/9</span>
            </h2>

            <div className="flex gap-2 justify-center items-center h-full">
              <button className="flex justify-center items-center gap-1 bg-slate-900 hover:border-slate-900 rounded-full py-1  text-white px-10">
                Adjuntar <FileUp size={18} />
              </button>
              <a href="/folioHistorialDoc">
                <button className="flex justify-center items-center gap-1 bg-slate-600 hover:border-slate-600 rounded-full py-1  text-white px-10">
                  Ver Historial <FileSearch size={18} />
                </button>
              </a>
            </div>
          </div>
          <div className="mt-5 bg-slate-50 rounded-md p-5 overflow-auto max-h-[118px]">
            <ul>
              <li className="flex items-center justify-between border-b border-slate-200 py-2">
                <a className="flex justify-center items-center gap-1" href="#">
                  Documento Uno <Link color="red" size={13} />
                </a>
                <div className="flex gap-2">
                  <a className="bg-transparent hover:text-slate-500">
                    <FileDown />
                  </a>
                  <a className="bg-transparent hover:text-blue-500">
                    <FilePenLine />
                  </a>
                  <a className="bg-transparent">
                    <Trash2 />
                  </a>
                </div>
              </li>
              <li className="flex items-center justify-between border-b border-slate-200 py-2">
                <a className="flex justify-center items-center gap-1" href="#">
                  Documento Dos <Link color="red" size={13} />
                </a>
                <div className="flex gap-2">
                  <a className="bg-transparent hover:text-slate-500">
                    <FileDown />
                  </a>
                  <a className="bg-transparent hover:text-blue-500">
                    <FilePenLine />
                  </a>
                  <a className="bg-transparent">
                    <Trash2 />
                  </a>
                </div>
              </li>
              <li className="flex items-center justify-between border-b border-slate-200 py-2">
                <a className="flex justify-center items-center gap-1" href="#">
                  Documento Tres <Link color="red" size={13} />
                </a>
                <div className="flex gap-2">
                  <a className="bg-transparent hover:text-slate-500">
                    <FileDown />
                  </a>
                  <a className="bg-transparent hover:text-blue-500">
                    <FilePenLine />
                  </a>
                  <a className="bg-transparent">
                    <Trash2 />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </CardLayout>
      </main>
    </>
  );
}
