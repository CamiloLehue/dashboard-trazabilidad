import { ClipboardPen } from "lucide-react";
import { BushBarChart } from "../components/charts/BushBarChart";
import { ChartLine } from "../components/charts/ChartLine";
import { CardLayout } from "../components/ui/CardLayout";

export function Dashboard() {
  return (
    <>
      <main className="w-full rounded-lg my-5 flex  flex-col gap-2">
        <div className="grid grid-cols-5 gap-3 h-full">
          <CardLayout className="col-span-2 flex flex-col gap-5 h-3/3">
            <div className="flex  items-center ">
              <h3>Procesos Pendiente/Terminado</h3>
            </div>
            {/* <ChartLine /> */}
          </CardLayout>
          <CardLayout className="col-span-3  h-3/3">
            <div className="flex  items-center ">
              <h3>Historial Procesos Activos</h3>
            </div>
            {/* <BushBarChart /> */}
          </CardLayout>
          <CardLayout className="col-span-2 h-3/3 ">
            <div className="flex justify-between items-center mb-2">
              <h3>Actividad Recientes</h3>
              <a href="/inicio">Ver más</a>
            </div>
            <ul className="flex flex-col gap-2 pt-1">
              <li className="flex flex-col border border-neutral-700 rounded-lg p-2">
                <div className="flex justify-between border-b border-neutral-700 pb-1 mb-1">
                  <small className="flex items-center gap-1 text-neutral-500 font-semibold">
                    <ClipboardPen size={15} /> Modificado Por
                    <span className="font-bold text-cyan-500">Carlos Perez</span>
                  </small>
                  <small>Ahora</small>
                </div>
                <a className="text-neutral-400" href="#">
                  Eliminó Documento{" "}
                  <span className="font-semibold">Folio N° 7457546</span>
                </a>
              </li>
              <li className="flex flex-col border border-neutral-700 rounded-lg p-2">
                <div className="flex justify-between border-b border-neutral-700 pb-1 mb-1">
                  <small className="flex items-center gap-1 text-neutral-500 font-semibold">
                    <ClipboardPen size={15} /> Modificado Por
                    <span className="font-bold text-cyan-500">Jorge Perez</span>
                  </small>
                  <small>Hace 2 minutos</small>
                </div>
                <a className="text-neutral-400" href="#">
                  Actualizó Documento{" "}
                  <span className="font-semibold">Folio N° 7457546</span>
                </a>
              </li>
              <li className="flex flex-col border border-neutral-700 rounded-lg p-2">
                <div className="flex justify-between border-b border-neutral-700 pb-1 mb-1">
                  <small className="flex items-center gap-1 text-neutral-500 font-semibold">
                    <ClipboardPen size={15} /> Modificado Por
                    <span className="font-bold text-cyan-500">Cristofer Perez</span>
                  </small>
                  <small>Hace 20 minutos</small>
                </div>
                <a className="text-neutral-400" href="#">
                  Ingresó Documento{" "}
                  <span className="font-semibold">Folio N° 7457546</span>
                </a>
              </li>
              <li className="flex flex-col border border-neutral-700 rounded-lg p-2">
                <div className="flex justify-between border-b border-neutral-700 pb-1 mb-1">
                  <small className="flex items-center gap-1 text-neutral-500 font-semibold">
                    <ClipboardPen size={15} /> Modificado Por
                    <span className="font-bold text-cyan-500">Cristofer Perez</span>
                  </small>
                  <small>Hace 20 minutos</small>
                </div>
                <a className="text-neutral-400" href="#">
                  Ingresó Documento{" "}
                  <span className="font-semibold">Folio N° 7457546</span>
                </a>
              </li>
            </ul>
          </CardLayout>
        </div>
      </main>
    </>
  );
}
