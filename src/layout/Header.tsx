export function Header() {
  return (
    <>
      <header className=" w-full py-3">
        <div className="max-w-5xl mx-auto rounded-full grid grid-cols-4 w-full bg-slate-950/70 backdrop-blur-xl min-h-16 shadow-xl shadow-slate-400 border border-white/50">
          <div className="flex justify-start ps-10 items-center">
            <img src="logo.png" alt="logo" className="w-10 h-10" />
          </div>
          <div className="col-span-2 text-white flex items-center justify-center">
            <p className="text-xs font-extrabold text-slate-300">SISTEMA TRAZABILIDAD</p>
          </div>
          <div className="flex justify-end pe-10 items-center ">
            <button className="shadow rounded-full ">Administración</button>
          </div>
        </div>
      </header>
    </>
  );
}
