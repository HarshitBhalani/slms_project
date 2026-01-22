import "./globals.css";
import Header from "../../src/app/components/layout/Header";
import Sidebar from "../../src/app/components/layout/Sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Header />
        <Sidebar />
       
        <div className="pt-16">{children}</div> 
      </body>
    </html>
  );
}
