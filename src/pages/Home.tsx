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
                className="block text-sm font-medium text-neutral-100"
              >
                Buscar Folio
              </label>
              <input
                className="py-2 px-3  rounded-s-md bg-neutral-950  border-s border-t border-b border-neutral-700 my-2 w-3/4"
                name="search"
                id="search"
                type="text"
                placeholder="Dígite el folio..."
              />
              <a href="/folioResumen">
                <button className="w-1/4 rounded-e-md  bg-neutral-950 border-e border-t border-b border-neutral-700">
                  Buscar
                </button>
              </a>
            </div>
            <div>
              <label
                htmlFor="more"
                className="block text-sm font-medium text-neutral-100"
              >
                Agregar Folio
              </label>
              <button
                id="more"
                className="shadow w-full  bg-neutral-950/70 rounded-md hover:bg-red-800 text-neutral-50 my-2"
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
              <ol className="relative border-s border-neutral-600 dark:border-neutral-700">
                <li className="mb-10 ms-4">
                  <div className="absolute w-3 h-3 bg-neutral-900 rounded-full mt-1.5 -start-1.5 border border-neutral-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-neutral-400">
                    Actualizado el 10-01-2025
                  </time>
                  <div className="border border-neutral-600  p-5 rounded-md">
                    <h3 className="text-lg font-semibold text-neutral-100">
                      Centro
                    </h3>
                    <p className="text-base font-normal text-neutral-500">
                      Finalizado
                    </p>
                  </div>
                </li>
                <li className="mb-10 ms-4">
                  <div className="absolute w-4 h-4 bg-neutral-900 rounded-full mt-1 -start-2 border border-neutral-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-neutral-200">
                    Hoy 16-01-2025
                  </time>
                  <div className="border border-neutral-600  p-5 rounded-md">
                    <h3 className="text-lg font-semibold text-neutral-100">
                      Acopio
                    </h3>
                    <p className="text-base font-normal text-green-500">
                      En proceso
                    </p>
                  </div>
                </li>
                <li className="ms-4">
                  <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -start-1.5 border border-neutral-400"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-neutral-400">
                    Fecha Estimada 20-01-2025
                  </time>
                  <div className="border border-neutral-600  p-5 rounded-md">
                    <h3 className="text-lg font-semibold text-neutral-400">
                      Planta
                    </h3>
                    <p className="text-base font-normal text-neutral-400">
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
