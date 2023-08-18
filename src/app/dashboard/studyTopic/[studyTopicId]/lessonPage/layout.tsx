import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function LessonPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-screen flex-col 2xl:w-auto ">
          {children}
    </div>
  );
}
