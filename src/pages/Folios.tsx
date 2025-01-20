import {
  Barcode,
  CircleAlert,
  CircleCheck,
  CircleHelp,
  Hexagon,
} from "lucide-react";
import { CardLayout } from "../components/ui/CardLayout";

export function Folios() {
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
        <CardLayout>
          <h3 className="font-semibold mb-5 flex justify-start gap-2 items-center">
            <Barcode />
            Listado de Folios
          </h3>
          <div className="mt-10 overflow-auto max-h-[350px]">
            <div className="grid grid-cols-4 font-semibold border border-neutral-700 rounded-lg p-5 bg-neutral-900">
              <p>N° Folios</p>
              <p>Alertas</p>
              <p className="text-center">Estado Actual</p>
              <p className="text-end">Información</p>
            </div>
            <ul className="flex flex-col gap-1 pt-1">
              <li className="flex flex-col border border-neutral-700 rounded-lg p-5 hover:bg-neutral-950 transition-all duration-00">
                <div className="grid grid-cols-4 border-b border-neutral-700 pb-3 ">
                  <small className="flex items-center gap-1">
                    <Barcode size={15} /> Folio N°
                    <span className="font-bold ">7457546</span>
                  </small>
                  <small className="flex items-center gap-1 text-green-600">
                    <CircleCheck size={15} />
                    Bien
                  </small>
                  <div className="flex justify-center">
                    <small className="flex gap-1  text-lime-500 border border-lime-500 px-5 py-1 rounded-full">
                      <Hexagon size={20} />
                      En Acopio
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
                <div className="grid grid-cols-4 border-b border-neutral-700 pb-3 ">
                  <small className="flex items-center gap-1">
                    <Barcode size={15} /> Folio N°
                    <span className="font-bold ">7457545</span>
                  </small>
                  <small className="flex items-center gap-1 text-yellow-600">
                    <CircleHelp size={15} /> Riesgo
                  </small>
                  <div className="flex justify-center">
                    <small className="flex gap-1  text-lime-500 border border-lime-500 px-5 py-1 rounded-full">
                      <Hexagon size={20} />
                      En Acopio
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
                <div className="grid grid-cols-4 border-b border-neutral-700 pb-3 ">
                  <small className="flex items-center gap-1">
                    <Barcode size={15} /> Folio N°
                    <span className="font-bold ">7457544</span>
                  </small>
                  <small className="flex items-center gap-1 text-red-600">
                    <CircleAlert size={15} />
                    Critico
                  </small>
                  <div className="flex justify-center">
                    <small className="flex gap-1  text-lime-500 border border-lime-500 px-5 py-1 rounded-full">
                      <Hexagon size={20} />
                      En Acopio
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
