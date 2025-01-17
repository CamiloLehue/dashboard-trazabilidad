import {
  Bolt,
  CircleArrowRight,
  FileDown,
  FilePenLine,
  FileSearch,
  FileUp,
  Hexagon,
  LandPlot,
  Link,
  QrCode,
  Ship,
  Trash2,
  Truck,
} from "lucide-react";
import { CardLayout } from "../components/ui/CardLayout";

export function FolioDetalle() {
  return (
    <>
      <main className="w-full rounded-lg my-5 flex  flex-col gap-2">
        <CardLayout>
          <div className="flex justify-between items-center mb-5">
            <h2>
              Proceso en tiempo real{" "}
              <span className="text-xs">
                Ultima Actualización: hace 2 minutos.
              </span>
            </h2>
            <h3 className="text-neutral-50 border border-lime-300 rounded-full px-10">
              En Acopio
            </h3>
          </div>
          <ol className="items-center grid grid-cols-5">
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-14 h-12 bg-green-200 rounded-full ring-0 ring-white ">
                  <Bolt size={15} color="black" />
                </div>
                <div className="hidden sm:flex w-full bg-green-200 h-0.5 "></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-neutral-100 ">
                  Centro Cultivo
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-neutral-400 ">
                  10-01-2025
                </time>
                <p className="text-base font-normal text-green-500 ">
                  Aprobado
                </p>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-14 h-12 bg-green-200 rounded-full ring-0 ring-white ">
                  <Ship size={15} color="black" />
                </div>
                <div className="hidden sm:flex w-full bg-green-200 h-0.5 "></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-neutral-100 ">
                  Transporte Marítimo
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-neutral-400 ">
                  12-01-2025
                </time>
                <p className="text-base font-normal text-green-500 ">
                  Aprobado
                </p>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 animate-pulse flex items-center justify-center w-20 h-16 bg-lime-300 rounded-full ring-0 ring-white ">
                  <Hexagon size={30} color="white" />
                </div>
                <div className="hidden sm:flex w-full h-0.5 border-b-2 border-dashed border-neutral-700"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-neutral-100 ">
                  En Acopio
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-neutral-400 ">
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
                  <Truck size={12} color="black" />
                </div>
                <div className="hidden sm:flex w-full h-0.5 border-b-2 border-dashed border-neutral-700"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-neutral-100 ">
                  Transporte Terrestre
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-neutral-400 ">
                  25-01-2025
                </time>
                <p className="text-base font-normal text-neutral-500 ">
                  En espera
                </p>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-neutral-100 rounded-full ring-0 ring-white ">
                  <LandPlot size={12} color="black" />
                </div>
                <div className="hidden sm:flex w-full h-0.5 border-b-2 border-dashed border-neutral-700"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-neutral-100 ">Planta</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-neutral-400 ">
                  25-01-2025
                </time>
                <p className="text-base font-normal text-neutral-500 ">
                  En espera
                </p>
              </div>
            </li>
          </ol>
        </CardLayout>
        <div className="grid grid-cols-3 gap-2">
          <CardLayout className="col-span-2 grid grid-cols-3">
            <div className="col-span-2">
              <div className="flex justify-between items-center">
                <h2>
                  Resumen Rápido Folio
                  <span className="font-bold"> N° 7457546</span>
                </h2>
              </div>
              <div className="mt-5">
                <ul className="text-neutral-100 ">
                  <li className="grid grid-cols-3">
                    <p>Desde:</p>
                    <p className="font-semibold col-span-2">Centro Cultivo</p>
                  </li>
                  <li className="grid grid-cols-3">
                    <p>Hacia:</p>
                    <p className="font-semibold col-span-2">Acopio 2</p>
                  </li>
                  <li className="grid grid-cols-3">
                    <p>Kilos</p>
                    <p className="font-semibold col-span-2">9000kg</p>
                  </li>
                  <li className="grid grid-cols-3">
                    <p>Autorizado por</p>
                    <p className="font-semibold col-span-2">
                      Supervisor de turno
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <h2>
                  Escanear Seguimiento
                  <span className="font-bold"> QR</span>
                </h2>
              </div>
              <div className="mt-5 flex justify-center items-center">
                <QrCode size={100} />
              </div>
            </div>
          </CardLayout>
          <CardLayout>
            <div className="flex justify-between items-center">
              <h2>Aprobar proceso actual</h2>
            </div>
            <span className="text-xs  text-red-400">
              7 documentos restantes para aprobar
            </span>
            <div className="flex justify-center items-center pt-5">
              <button
                onClick={() =>
                  alert("No se puede aprobar, documentos faltantes (6)")
                }
                className="flex justify-center items-center gap-1 bg-neutral-950 border border-neutral-700  rounded-full py-4 px-10 w-full hover:border-transparent"
              >
                Continuar <CircleArrowRight size={18} />
              </button>
            </div>
          </CardLayout>
        </div>
        <CardLayout>
          <div className="flex justify-between items-center">
            <h2>
              Documentos Adjuntos <span>3/9</span>
            </h2>

            <div className="flex gap-2 justify-center items-center h-full">
              <button className="flex justify-center items-center gap-1 bg-neutral-900 hover:border-neutral-900 rounded-full py-1  text-white px-10">
                Adjuntar <FileUp size={18} />
              </button>
              <a href="/folioHistorialDoc">
                <button className="flex justify-center items-center gap-1 bg-neutral-600 hover:border-neutral-600 rounded-full py-1  text-white px-10">
                  Ver Historial <FileSearch size={18} />
                </button>
              </a>
            </div>
          </div>
          <div className="mt-5 bg-neutral-950 rounded-md p-5 overflow-auto max-h-[118px]">
            <ul>
              <li className="flex items-center justify-between border-b border-neutral-700 py-2">
                <a className="flex justify-center items-center gap-1" href="#">
                  Documento Uno <Link color="red" size={13} />
                </a>
                <div className="flex gap-2">
                  <a className="bg-transparent hover:text-neutral-500">
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
              <li className="flex items-center justify-between border-b border-neutral-700 py-2">
                <a className="flex justify-center items-center gap-1" href="#">
                  Documento Dos <Link color="red" size={13} />
                </a>
                <div className="flex gap-2">
                  <a className="bg-transparent hover:text-neutral-500">
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
              <li className="flex items-center justify-between border-b border-neutral-700 py-2">
                <a className="flex justify-center items-center gap-1" href="#">
                  Documento Tres <Link color="red" size={13} />
                </a>
                <div className="flex gap-2">
                  <a className="bg-transparent hover:text-neutral-500">
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
