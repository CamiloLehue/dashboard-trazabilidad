import { ClipboardPen } from "lucide-react";
import { BushBarChart } from "../components/charts/BushBarChart";
import { ChartLine } from "../components/charts/ChartLine";
import { CardLayout } from "../components/ui/CardLayout";

export function Dashboard() {
  return (
    <>
      <main className="w-full rounded-lg my-5 flex  flex-col gap-2">
        <div className="grid grid-cols-5  gap-3">
          <CardLayout className="col-span-2 flex flex-col gap-5 h-[400px]">
            <div className="flex  items-center ">
              <h3>Procesos Pendiente/Terminado</h3>
            </div>
            <ChartLine />
          </CardLayout>
          <CardLayout className="col-span-3  h-[400px]">
            <div className="flex  items-center ">
              <h3>Historial Procesos Activos</h3>
            </div>
            <BushBarChart />
          </CardLayout>
          <CardLayout className="col-span-2 h-[400px]">
            <div className="flex justify-between items-center mb-2">
              <h3>Actividad Recientes</h3>
              <a href="/inicio">Ver más</a>
            </div>
            <div className="">
              <ul className="flex flex-col gap-2 pt-1">
                <li className="flex flex-col border border-slate-200 rounded-lg p-2">
                  <div className="flex justify-between border-b border-slate-100 pb-1 mb-1">
                    <small className="flex items-center gap-1">
                      <ClipboardPen size={15} /> Modificado Por
                      <span className="font-bold ">Carlos Perez</span>
                    </small>
                    <small>Ahora</small>
                  </div>
                  <a href="#">
                    Eliminó Documento{" "}
                    <span className="font-semibold">Folio N° 7457546</span>
                  </a>
                </li>
                <li className="flex flex-col border border-slate-200 rounded-lg p-2">
                  <div className="flex justify-between border-b border-slate-100 pb-1 mb-1">
                    <small className="flex items-center gap-1">
                      <ClipboardPen size={15} /> Modificado Por
                      <span className="font-bold ">Jorge Perez</span>
                    </small>
                    <small>Hace 2 minutos</small>
                  </div>
                  <a href="#">
                    Actualizó Documento{" "}
                    <span className="font-semibold">Folio N° 7457546</span>
                  </a>
                </li>
                <li className="flex flex-col border border-slate-200 rounded-lg p-2">
                  <div className="flex justify-between border-b border-slate-100 pb-1 mb-1">
                    <small className="flex items-center gap-1">
                      <ClipboardPen size={15} /> Modificado Por
                      <span className="font-bold ">Cristofer Perez</span>
                    </small>
                    <small>Hace 20 minutos</small>
                  </div>
                  <a href="#">
                    Ingresó Documento{" "}
                    <span className="font-semibold">Folio N° 7457546</span>
                  </a>
                </li>
                <li className="flex flex-col border border-slate-200 rounded-lg p-2">
                  <div className="flex justify-between border-b border-slate-100 pb-1 mb-1">
                    <small className="flex items-center gap-1">
                      <ClipboardPen size={15} /> Modificado Por
                      <span className="font-bold ">Cristofer Perez</span>
                    </small>
                    <small>Hace 20 minutos</small>
                  </div>
                  <a href="#">
                    Ingresó Documento{" "}
                    <span className="font-semibold">Folio N° 7457546</span>
                  </a>
                </li>
              </ul>
            </div>
          </CardLayout>
          <CardLayout className="col-span-2">
            <ChartLine />
          </CardLayout>
        </div>
      </main>
    </>
  );
}
