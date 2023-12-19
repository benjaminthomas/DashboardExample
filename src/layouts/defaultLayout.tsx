import { Outlet } from "react-router-dom";
import Footer from "../components/ui/footer";
import Header from "../components/ui/header";

function DefaultLayout() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow-[1]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
