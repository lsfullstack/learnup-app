import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen flex flex-col">
        <Header />
        <main className="flex-1 px-8 sm:px-16 2xl:px-32">
          {children}
        </main>
        <Footer />
    </div>
  );
}
