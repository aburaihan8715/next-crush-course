import { Inter } from "next/font/google";
import "./globals.css";
import AppNav from "@/ui/AppNav";
import Footer from "@/ui/Footer";
import ThemeContextProvider from "@/contexts/ThemeContext";
import AuthProvider from "@/components/auth/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next-crush-course",
  description: "Learning next js",
};

export default function RootLayout({ children }) {
  return (
    <html className="" lang="en">
      <body className={`${inter.className} bg-[#111] text-[#ddd]`}>
        <AuthProvider>
          <ThemeContextProvider>
            <div className="max-w-6xl mx-auto flex flex-col justify-between min-h-screen">
              <AppNav />
              <div>{children}</div>
              <Footer />
            </div>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
