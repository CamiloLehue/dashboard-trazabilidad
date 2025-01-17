export function Header() {
  return (
    <>
      <header className=" w-full py-3 grid grid-cols-6">
        <div>

        </div>
        <div className="col-span-4 rounded-full grid grid-cols-4 w-full bg-neutral-950/70 backdrop-blur-xl min-h-16 shadow-xl shadow-neutral-950 border border-white/20">
          <div className="flex justify-start ps-10 items-center">
            <img src="logo.png" alt="logo" className="w-10 h-10" />
          </div>
          <div className="col-span-2 text-white flex items-center justify-center">
            <p className="text-xs font-extrabold text-neutral-300">SISTEMA TRAZABILIDAD</p>
          </div>
          <div className="flex justify-end pe-10 items-center ">
            <button className="shadow text-neutral-950 rounded-full hover:border-transparent hover:opacity-95 ">Administración</button>
          </div>
        </div>
        <div className="relative flex justify-center items-center  ">
          
          <button className="relative text-neutral-950 backdrop-blur-xl bg-neutral-50 hover:border-white/20 hover:bg-neutral-900/80 hover:text-white rounded-xl  border border-neutral-700/50 shadow shadow-white/80">
            Notificaciones
            <div className="absolute text-white  -top-3 -right-3 flex justify-center items-center gap-2 rounded-xl bg-red-500 px-2 shadow shadow-red-800">
              1
          </div>
          </button>
        </div>
      </header>
    </>
  );
}
