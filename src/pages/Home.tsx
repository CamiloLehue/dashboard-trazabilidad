import { ClipboardPen, FileClock, GitCommitVertical } from "lucide-react";
import { CardLayout } from "../components/ui/CardLayout";
import ActividadReciente from "../components/ActividadReciente";

export function Home() {
  return (
    <>
      <main className="w-full rounded-lg my-5 flex  flex-col gap-2">
        <CardLayout>
          <div className="grid grid-cols-2 gap-5">
            <div className="w-full">
              <label
                htmlFor="search"
                className="block text-sm font-medium text-slate-700"
              >
                Buscar Folio
              </label>
              <input
                className="py-2 px-3  rounded-s-md  border-s border-t border-b border-slate-300 my-2 w-3/4"
                name="search"
                id="search"
                type="text"
                placeholder="Dígite el folio..."
              />
              <a href="/folioResumen">
                <button className="w-1/4 rounded-e-md  bg-slate-50 border-e border-t border-b border-slate-200">
                  Buscar
                </button>
              </a>
            </div>
            <div>
              <label
                htmlFor="more"
                className="block text-sm font-medium text-slate-700"
              >
                Agregar Folio
              </label>
              <button
                id="more"
                className="shadow w-full  bg-slate-950/70 rounded-md hover:bg-red-800 text-slate-50 my-2"
              >
                +
              </button>
            </div>
          </div>
        </CardLayout>
        <CardLayout>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <h3 className="font-semibold mb-5 flex justify-start gap-2 items-center">
                <GitCommitVertical />
                Línea de Estado Folio N° 7457546
              </h3>
              <ol className="relative border-s border-slate-200 dark:border-slate-700">
                <li className="mb-10 ms-4">
                  <div className="absolute w-3 h-3 bg-slate-900 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-slate-400">
                    Actualizado el 10-01-2025
                  </time>
                  <div className="border border-slate-200  p-5 rounded-md">
                    <h3 className="text-lg font-semibold text-slate-800">
                      Centro
                    </h3>
                    <p className="text-base font-normal text-slate-500">
                      Finalizado
                    </p>
                  </div>
                </li>
                <li className="mb-10 ms-4">
                  <div className="absolute w-4 h-4 bg-slate-900 rounded-full mt-1 -start-2 border border-white"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-slate-900">
                    Hoy 16-01-2025
                  </time>
                  <div className="border border-slate-200  p-5 rounded-md">
                    <h3 className="text-lg font-semibold text-slate-800">
                      Acopio
                    </h3>
                    <p className="text-base font-normal text-green-500">
                      En proceso
                    </p>
                  </div>
                </li>
                <li className="ms-4">
                  <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -start-1.5 border border-slate-400"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-slate-400">
                    Fecha Estimada 20-01-2025
                  </time>
                  <div className="border border-slate-200  p-5 rounded-md">
                    <h3 className="text-lg font-semibold text-slate-400">
                      Planta
                    </h3>
                    <p className="text-base font-normal text-slate-400">
                      En Espera
                    </p>
                  </div>
                </li>
              </ol>
            </div>
            <ActividadReciente />
          </div>
        </CardLayout>
      </main>
    </>
  );
}
