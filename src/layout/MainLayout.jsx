import Header from "./Header";
import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
export default MainLayout;