import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { RiMenuFold2Fill } from "react-icons/ri";
import { useState } from "react";
import { RiMenuFold3Fill } from "react-icons/ri";

const RootLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`absolute rounded-r-md bg-orange-500 p-2 top-16 cursor-pointer md:hidden ${showSidebar ? 'translate-x-40' : 'translate-x-0'} transition-all duration-700`} onClick={() => setShowSidebar((prev) => !prev)}>
        {showSidebar ? <RiMenuFold3Fill className="text-2xl font-bold text-white" /> : <RiMenuFold2Fill className="text-2xl font-bold text-white" />}
      </div>
      <aside className={`md:w-1/5 absolute md:relative ${showSidebar ? '-translate-x-0' : '-translate-x-40'} transform transition-all duration-700 md:translate-x-0 bg-zinc-950 text-white h-screen`}>
        <Sidebar />
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="w-full">
          <Topbar />
        </header>
        <main className="flex-1 bg-zinc-900 overflow-auto p-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
