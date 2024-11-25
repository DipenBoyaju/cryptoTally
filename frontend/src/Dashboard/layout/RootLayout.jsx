import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const RootLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-1/5 bg-zinc-950 text-white h-screen">
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
