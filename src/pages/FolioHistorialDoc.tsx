import { Barcode, File, FileDown, FilePenLine, Trash2 } from "lucide-react";
import { CardLayout } from "../components/ui/CardLayout";

export function FolioHistorialDoc() {
  return (
    <>
      <main className="w-full rounded-lg my-5 flex  flex-col gap-2">
        <CardLayout>
          <div className="">
            <h3 className="font-semibold mb-5 flex justify-start gap-2 items-center">
              <Barcode />
              Folio N°
              <span className="font-bold ">7457546</span>
            </h3>
            <h4>Todos los Documentos</h4>
            <div className="mt-10 overflow-auto max-h-[550px]">
              <ul className="flex flex-col gap-1 pt-1">
                <li className="flex flex-col border border-neutral-700 rounded-lg p-5 hover:bg-neutral-950 transition-all duration-00">
                  <div className="grid grid-cols-5 border-b border-neutral-700 pb-3 ">
                    <small className="flex items-center gap-1 font-bold">
                      <File size={18} />
                      Documento
                    </small>
                    <small>
                      Estado <span className="font-semibold">Acopio</span>
                    </small>
                    <small>
                      Cargado por: <span>Administrador</span>
                    </small>
                    <small>
                      <a href="/folioResumen">Ahora</a>
                    </small>
                    <div className="flex gap-2 justify-end">
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
                  </div>
                </li>
                <li className="flex flex-col border border-neutral-700 rounded-lg p-5 hover:bg-neutral-950 transition-all duration-00">
                  <div className="grid grid-cols-5 border-b border-neutral-700 pb-3 ">
                    <small className="flex items-center gap-1 font-bold">
                      <File size={18} />
                      Documento
                    </small>
                    <small>
                      Estado <span className="font-semibold">Acopio</span>
                    </small>
                    <small>
                      Cargado por: <span>Administrador</span>
                    </small>
                    <small>
                      <a href="/folioResumen">hace 10 minutos</a>
                    </small>
                    <div className="flex gap-2 justify-end">
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
                  </div>
                </li>
                <li className="flex flex-col border border-neutral-700 rounded-lg p-5 hover:bg-neutral-950 transition-all duration-00">
                  <div className="grid grid-cols-5 border-b border-neutral-700 pb-3 ">
                    <small className="flex items-center gap-1 font-bold">
                      <File size={18} />
                      Documento
                    </small>
                    <small>
                      Estado <span className="font-semibold">Acopio</span>
                    </small>
                    <small>
                      Cargado por: <span>Administrador</span>
                    </small>
                    <small>
                      <a href="/folioResumen">Hace 20 minutos</a>
                    </small>
                    <div className="flex gap-2 justify-end">
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
                  </div>
                </li>
                <li className="flex flex-col border border-neutral-700 rounded-lg p-5 hover:bg-neutral-950 transition-all duration-00">
                  <div className="grid grid-cols-5 border-b border-neutral-700 pb-3 ">
                    <small className="flex items-center gap-1 font-bold">
                      <File size={18} />
                      Documento
                    </small>
                    <small>
                      Estado <span className="font-semibold">Acopio</span>
                    </small>
                    <small>
                      Cargado por: <span>Administrador</span>
                    </small>
                    <small>
                      <a href="/folioResumen">Hace 30 minutos</a>
                    </small>
                    <div className="flex gap-2 justify-end">
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
                  </div>
                </li>
                <li className="flex flex-col border border-neutral-700 rounded-lg p-5 hover:bg-neutral-950 transition-all duration-00">
                  <div className="grid grid-cols-5 border-b border-neutral-700 pb-3 ">
                    <small className="flex items-center gap-1 font-bold">
                      <File size={18} />
                      Documento
                    </small>
                    <small>
                      Estado <span className="font-semibold">Acopio</span>
                    </small>
                    <small>
                      Cargado por: <span>Administrador</span>
                    </small>
                    <small>
                      <a href="/folioResumen">Hace 40 minutos</a>
                    </small>
                    <div className="flex gap-2 justify-end">
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
                  </div>
                </li>
                <li className="flex flex-col border border-neutral-700 rounded-lg p-5 hover:bg-neutral-950 transition-all duration-00">
                  <div className="grid grid-cols-5 border-b border-neutral-700 pb-3 ">
                    <small className="flex items-center gap-1 font-bold">
                      <File size={18} />
                      Documento
                    </small>
                    <small>
                      Estado <span className="font-semibold">Acopio</span>
                    </small>
                    <small>
                      Cargado por: <span>Administrador</span>
                    </small>
                    <small>
                      <a href="/folioResumen">Hace 50 minutos</a>
                    </small>
                    <div className="flex gap-2 justify-end">
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
                  </div>
                </li>
                <li className="flex flex-col border border-neutral-700 rounded-lg p-5 hover:bg-neutral-950 transition-all duration-00">
                  <div className="grid grid-cols-5 border-b border-neutral-700 pb-3 ">
                    <small className="flex items-center gap-1 font-bold">
                      <File size={18} />
                      Documento
                    </small>
                    <small>
                      Estado <span className="font-semibold">Acopio</span>
                    </small>
                    <small>
                      Cargado por: <span>Administrador</span>
                    </small>
                    <small>
                      <a href="/folioResumen">hace más de 1 hora</a>
                    </small>
                    <div className="flex gap-2 justify-end">
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
                  </div>
                </li>
                <li className="flex flex-col border border-neutral-700 rounded-lg p-5 hover:bg-neutral-950 transition-all duration-00">
                  <div className="grid grid-cols-5 border-b border-neutral-700 pb-3 ">
                    <small className="flex items-center gap-1 font-bold">
                      <File size={18} />
                      Documento
                    </small>
                    <small>
                      Estado <span className="font-semibold">Acopio</span>
                    </small>
                    <small>
                      Cargado por: <span>Administrador</span>
                    </small>
                    <small>
                      <a href="/folioResumen">hace más de 1 hora</a>
                    </small>
                    <div className="flex gap-2 justify-end">
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
                  </div>
                </li>
                <li className="flex flex-col border border-neutral-700 rounded-lg p-5 hover:bg-neutral-950 transition-all duration-00">
                  <div className="grid grid-cols-5 border-b border-neutral-700 pb-3 ">
                    <small className="flex items-center gap-1 font-bold">
                      <File size={18} />
                      Documento
                    </small>
                    <small>
                      Estado <span className="font-semibold">Centro</span>
                    </small>
                    <small>
                      Cargado por: <span>Administrador</span>
                    </small>
                    <small>
                      <a href="/folioResumen">hace más de 1 hora</a>
                    </small>
                    <div className="flex gap-2 justify-end">
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
                  </div>
                </li>
                <li className="flex flex-col border border-neutral-700 rounded-lg p-5 hover:bg-neutral-950 transition-all duration-00">
                  <div className="grid grid-cols-5 border-b border-neutral-700 pb-3 ">
                    <small className="flex items-center gap-1 font-bold">
                      <File size={18} />
                      Documento
                    </small>
                    <small>
                      Estado <span className="font-semibold">Centro</span>
                    </small>
                    <small>
                      Cargado por: <span>Administrador</span>
                    </small>
                    <small>
                      <a href="/folioResumen">hace más de 1 hora</a>
                    </small>
                    <div className="flex gap-2 justify-end">
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
                  </div>
                </li>
                <li className="flex flex-col border border-neutral-700 rounded-lg p-5 hover:bg-neutral-950 transition-all duration-00">
                  <div className="grid grid-cols-5 border-b border-neutral-700 pb-3 ">
                    <small className="flex items-center gap-1 font-bold">
                      <File size={18} />
                      Documento
                    </small>
                    <small>
                      Estado <span className="font-semibold">Centro</span>
                    </small>
                    <small>
                      Cargado por: <span>Administrador</span>
                    </small>
                    <small>
                      <a href="/folioResumen">hace más de 1 hora</a>
                    </small>
                    <div className="flex gap-2 justify-end">
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
                  </div>
                </li>
                <li className="flex flex-col border border-neutral-700 rounded-lg p-5 hover:bg-neutral-950 transition-all duration-00">
                  <div className="grid grid-cols-5 border-b border-neutral-700 pb-3 ">
                    <small className="flex items-center gap-1 font-bold">
                      <File size={18} />
                      Documento
                    </small>
                    <small>
                      Estado <span className="font-semibold">Centro</span>
                    </small>
                    <small>
                      Cargado por: <span>Administrador</span>
                    </small>
                    <small>
                      <a href="/folioResumen">hace más de 1 hora</a>
                    </small>
                    <div className="flex gap-2 justify-end">
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
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </CardLayout>
      </main>
    </>
  );
}
