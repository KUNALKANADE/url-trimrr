import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
      FOR ANY QUERY
        <div className="mt-4">
          <a href="mailto:atkunal23000@gmail.com" className="bg-blue-500 text-white px-4 py-2 rounded">
          Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
