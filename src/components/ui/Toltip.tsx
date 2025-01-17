import { FileText } from "lucide-react";

export function Toltip() {
  return (
    <>
      <div className="absolute max-w-96 top-full mb-2 left-1/2 transform -translate-x-1/2 w-max bg-neutral-900/30 backdrop-blur-xl border border-neutral-600 text-neutral-200 text-sm rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="p-5">
          <h5 className="text-lg font-semibold text-neutral-100 border-b border-white/30 pb-3 mb-3 ">
            Información del proceso
          </h5>

          <ol className="relative border-s border-neutral-500  ">
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-neutral-950 rounded-full -start-3   ">
               <FileText />
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-neutral-200 dark:text-white">
              Certificado 3
                <span className="bg-black text-neutral-300 text-sm font-medium me-2 px-2.5 py-0.5 rounded   ms-3">
                  Reciente
                </span>
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-neutral-400 dark:text-neutral-500">
                Cargado el día, 17 de Enero 2022
              </time>
              
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-neutral-200 bg-neutral-900 border border-neutral-500 rounded-lg hover:bg-neutral-950 hover:text-red-500 focus:z-10 focus:ring-4 focus:outline-none focus:ring-neutral-100 focus:text-red-500 dark:bg-neutral-800 dark:text-neutral-400 dark:border-neutral-600 dark:hover:text-white dark:hover:bg-neutral-700 dark:focus:ring-neutral-700"
              >
                <svg
                  className="w-3.5 h-3.5 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                  <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                </svg>{" "}
                Descargar Documento
              </a>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-neutral-950 rounded-full -start-3   ">
               <FileText />
              </span>
              <h3 className="mb-1 text-lg font-semibold text-neutral-200 dark:text-white">
              Certificado 2
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-neutral-400 dark:text-neutral-500">
              Cargado el día, 14 de Enero 2022
              </time>
              
            </li>
            <li className="ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-neutral-950 rounded-full -start-3   ">
               <FileText />
              </span>
              <h3 className="mb-1 text-lg font-semibold text-neutral-200 dark:text-white">
                Certificado 1
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-neutral-400 dark:text-neutral-500">
              Cargado el día, 11 de Enero 2022
              </time>
             
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
