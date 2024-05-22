import Navbar from "@/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="mx-auto px-4 sm:px-6 lg:px-7 mt-2">{children}</main>
    </>
  );
}
