import {
  Barcode,
  CircleAlert,
  CircleCheck,
  CircleHelp,
  Hexagon,
  ScanEye,
} from "lucide-react";
import { CardLayout } from "../components/ui/CardLayout";

export function Conteo() {
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
                Buscar Registro conteo
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
                Filtrar Por
              </label>
              <select className="w-full rounded-md border border-neutral-700 bg-neutral-950 py-2 px-3 my-2">
                <option className="bg-neutral-950 rounded-md">Todos</option>
                <option className="bg-neutral-950 rounded-md">Aprobado</option>
                <option className="bg-neutral-950 rounded-md">Procesado</option>
                <option className="bg-neutral-950 rounded-md">
                  Pendientes
                </option>
              </select>
            </div>
          </div>
        </CardLayout>
        <CardLayout className="h-[670px]">
          <h3 className="font-semibold mb-5 flex justify-start gap-2 items-center">
            <ScanEye />
            Listado de Conteos
          </h3>
          <div className="mt-10 overflow-auto max-h-[480px]">
            <div className="grid grid-cols-7 font-semibold border border-neutral-700 rounded-lg p-4 bg-neutral-900">
              <p>N° Folio</p>
              <p>Jaula</p>
              <p>Cantidad peces</p>
              
              <p className="text-center">Fecha inicial</p>
              <p className="text-center">Fecha final</p>
              <p className="text-center">Estado Actual</p>
              <p className="text-end">Información</p>
            </div>
            <ul className="flex flex-col gap-1 pt-1">
              <li className="flex flex-col border border-neutral-700 rounded-lg p-5 hover:bg-neutral-950 transition-all duration-00">
                <div className="grid grid-cols-7  ">
                  <small className="flex items-center gap-1">
                    <Barcode size={15} /> Folio N°
                    <span className="font-bold ">7457546</span>
                  </small>
                  <small>Ilque-jaula2</small>
                  <small>8002</small>
                  <div className="flex justify-center">
                    <small>10/20/1222</small>
                  </div>
                  <div className="flex justify-center">
                    <small>10/20/1222</small>
                  </div>
                  <div className="flex justify-center">
                    <small className="flex gap-1  text-green-500 border border-green-500 px-5 py-1 rounded-full">
                      <div className="flex items-center h-full">
                        <div className="h-2 w-2 rounded-full bg-green-300 animate-pulse mr-2"></div>
                      </div>
                      En proceso
                    </small>
                  </div>
                  <div className="flex justify-end">
                    <small>
                      <a href="/folioResumen">Ver detalles</a>
                    </small>
                  </div>
                </div>
              </li>
              <li className="flex flex-col border border-neutral-700 rounded-lg p-5 hover:bg-neutral-950 transition-all duration-00">
                <div className="grid grid-cols-7  ">
                  <small className="flex items-center gap-1">
                    <Barcode size={15} /> Folio N°
                    <span className="font-bold ">7457546</span>
                  </small>
                  <small>Becerra-jaula10</small>
                  <small>7002</small>
                  <div className="flex justify-center">
                    <small>10/20/1222</small>
                  </div>
                  <div className="flex justify-center">
                    <small>10/20/1222</small>
                  </div>
                  <div className="flex justify-center">
                  <small className="flex gap-1  text-blue-500 border border-blue-500 px-5 py-1 rounded-full">
                      {/* <div className="flex items-center h-full">
                        <div className="h-2 w-2 rounded-full bg-green-300 animate-pulse mr-2"></div>
                      </div> */}
                      Finalizado
                    </small>
                  </div>
                  <div className="flex justify-end">
                    <small>
                      <a href="/folioResumen">Ver detalles</a>
                    </small>
                  </div>
                </div>
              </li>
              <li className="flex flex-col border border-neutral-700 rounded-lg p-5 hover:bg-neutral-950 transition-all duration-00">
                <div className="grid grid-cols-7  ">
                  <small className="flex items-center gap-1">
                    <Barcode size={15} /> Folio N°
                    <span className="font-bold ">7457546</span>
                  </small>
                  <small>Verdugo-jaula10</small>
                  <small>12002</small>
                  <div className="flex justify-center">
                    <small>10/20/1222</small>
                  </div>
                  <div className="flex justify-center">
                    <small>10/20/1222</small>
                  </div>
                  <div className="flex justify-center">
                  <small className="flex gap-1  text-blue-500 border border-blue-500 px-5 py-1 rounded-full">
                      {/* <div className="flex items-center h-full">
                        <div className="h-2 w-2 rounded-full bg-green-300 animate-pulse mr-2"></div>
                      </div> */}
                      Finalizado
                    </small>
                  </div>
                  <div className="flex justify-end">
                    <small>
                      <a href="/folioResumen">Ver detalles</a>
                    </small>
                  </div>
                </div>
              </li>
              <li className="flex flex-col border border-neutral-700 rounded-lg p-5 hover:bg-neutral-950 transition-all duration-00">
                <div className="grid grid-cols-7  ">
                  <small className="flex items-center gap-1">
                    <Barcode size={15} /> Folio N°
                    <span className="font-bold ">7457546</span>
                  </small>
                  <small>Becerra-Jaula2</small>
                  <small>10002</small>
                  <div className="flex justify-center">
                    <small>10/20/1222</small>
                  </div>
                  <div className="flex justify-center">
                    <small>10/20/1222</small>
                  </div>
                  <div className="flex justify-center">
                  <small className="flex gap-1  text-blue-500 border border-blue-500 px-5 py-1 rounded-full">
                      {/* <div className="flex items-center h-full">
                        <div className="h-2 w-2 rounded-full bg-green-300 animate-pulse mr-2"></div>
                      </div> */}
                      Finalizado
                    </small>
                  </div>
                  <div className="flex justify-end">
                    <small>
                      <a href="/folioResumen">Ver detalles</a>
                    </small>
                  </div>
                </div>
              </li>
              <li className="flex flex-col border border-neutral-700 rounded-lg p-5 hover:bg-neutral-950 transition-all duration-00">
                <div className="grid grid-cols-7  ">
                  <small className="flex items-center gap-1">
                    <Barcode size={15} /> Folio N°
                    <span className="font-bold ">7457546</span>
                  </small>
                  <small>Alao-jaula1</small>
                  <small>18002</small>
                  <div className="flex justify-center">
                    <small>10/20/1222</small>
                  </div>
                  <div className="flex justify-center">
                    <small>10/20/1222</small>
                  </div>
                  <div className="flex justify-center">
                    <small className="flex gap-1  text-blue-500 border border-blue-500 px-5 py-1 rounded-full">
                      {/* <div className="flex items-center h-full">
                        <div className="h-2 w-2 rounded-full bg-green-300 animate-pulse mr-2"></div>
                      </div> */}
                      Finalizado
                    </small>
                  </div>
                  <div className="flex justify-end">
                    <small>
                      <a href="/folioResumen">Ver detalles</a>
                    </small>
                  </div>
                </div>
              </li>
              
              
            </ul>
          </div>
          <button className="w-full rounded-md mt-5  bg-neutral-950 hover:bg-red-700 border border-neutral-700 hover:text-white">
            Cargar más folios...
          </button>
        </CardLayout>
      </main>
    </>
  );
}
