import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="mx-auto px-4 sm:px-6 lg:px-7 mt-2">{children}</main>
      <Footer />
    </>
  );
}
