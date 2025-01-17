import { ClipboardPen, FileClock } from "lucide-react";

export default function ActividadReciente() {
  return (
    <div className="">
      <h3 className="font-semibold mb-5 flex justify-start gap-2 items-center">
        <FileClock />
        Actividades Recientes
      </h3>
      <div className="mt-10">
        <ul className="flex flex-col gap-2 pt-1">
          <li className="flex flex-col border border-slate-200 rounded-lg p-5">
            <div className="flex justify-between border-b border-slate-100 pb-3 mb-3">
              <small className="flex items-center gap-1">
                <ClipboardPen size={15} /> Modificado Por
                <span className="font-bold ">Administrador</span>
              </small>
              <small>Ahora</small>
            </div>
            <a href="#">Historial de notificaciones</a>
          </li>
          <li className="flex flex-col border border-slate-200 rounded-lg p-5">
            <div className="flex justify-between border-b border-slate-100 pb-3 mb-3">
              <small className="flex items-center gap-1">
                <ClipboardPen size={15} /> Modificado Por
                <span className="font-bold ">Administrador</span>
              </small>
              <small>10 minutos atrás</small>
            </div>
            <a href="#">Historial de notificaciones</a>
          </li>
          <li className="flex flex-col border border-slate-200 rounded-lg p-5">
            <div className="flex justify-between border-b border-slate-100 pb-3 mb-3">
              <small className="flex items-center gap-1">
                <ClipboardPen size={15} /> Modificado Por
                <span className="font-bold ">Administrador</span>
              </small>
              <small>2 horas atrás</small>
            </div>
            <a href="#">Historial de notificaciones</a>
          </li>
        </ul>
        <button className="w-full rounded-md mt-5  bg-slate-50 hover:bg-red-700 border border-slate-200 hover:text-white">
          Ver más
        </button>
      </div>
    </div>
  );
}
