import { FileText } from "lucide-react";
import certificadosData from '../db/archivos.js';

export function Toltip({ estado }) {
  const certificados = certificadosData[estado]?.certificados || [];
  
  return (
    <div className="absolute max-w-96 top-full left-1/2 transform -translate-x-1/2 w-max bg-neutral-900/90 backdrop-blur-xl border border-neutral-600 text-neutral-200 text-sm rounded-lg px-2 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out delay-100">
      <div className="p-5">
        <h5 className="text-lg font-semibold text-neutral-100 border-b border-white/30 pb-3 mb-3">
          Documentos - {estado}
        </h5>

        <ol className="relative border-s border-neutral-500">
          {certificados.map((certificado, index) => (
            <li key={index} className="mb-2 ms-6 relative cursor-pointer">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-neutral-950 rounded-full -start-3">
                <FileText size={14} />
              </span>
              <div className="flex justify-between items-center">
                <h3 className="text-sm text-neutral-200 mx-4">
                  {certificado.nombre}
                </h3>
                <a href={certificado.archivo} download
                  className="inline-flex items-center px-1 py-1 text-sm font-medium text-neutral-200 bg-neutral-900 border border-neutral-500 rounded-lg hover:bg-neutral-950 hover:text-red-500"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                  </svg>
                </a>
              </div>
            </li>
          ))}
          {estado && estado === "conteo" && (
  <a 
    href="https://neurored.wisensor.cl" 
    className="text-red-500 mx-5" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Conteo ast
  </a>
)}

          
        </ol>
      </div>
    </div>
  );
}