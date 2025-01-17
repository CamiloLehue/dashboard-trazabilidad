import { Barcode, LandPlot, LayoutPanelLeft } from "lucide-react";

export function Aside() {
  return (
    <>
      <aside className="backdrop-blur-sm bg-white/90  rounded-e-xl p-5 text-base">
        <nav className="py-10 min-w-36">
          <ul className="flex flex-col gap-5 ">
            <li>
              <a
                className="flex items-center justify-items-center gap-2"
                href="/dashboard"
              >
                <LayoutPanelLeft size={16} />
                Dashboard
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-items-center gap-2"
                href="/inicio"
              >
                <LayoutPanelLeft size={16} />
                Acceso Rapido
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-items-center gap-2"
                href="/centros"
              >
                <LandPlot size={16} />
                Centros
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-items-center gap-2"
                href="/folio"
              >
                <Barcode size={16} />
                Folios
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
