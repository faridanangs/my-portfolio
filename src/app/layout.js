import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import image from "../../public/foto-pasdi-wc.webp"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "frdanngs",
  metadataBase: "https://frdanngspolio.vercel.app",
  authors: {
    name: "Farid Anang Samudra",
  },
  description: "Junior Fullstack Web & Blockchain Developer showcasing skills in frontend, backend, and blockchain development.",

  openGraph: {
    title: "frdanngs polio",
    url: "https://frdanngspolio.vercel.app",
    description: "Explore my portfolio, I am a Junior Fullstack Developer & Blockchain Developer.",
    images: [
      {
        url: "https://res.cloudinary.com/detetmaw8/image/upload/v1714376123/pcc5hx0kxjr6vsilqmyn.png",
        alt: "frdanngspolio",
        width:1400,
        height: 700,
      },
    ],
    type: "website",
  },
  keyword: ["farid", "anangs", "farid anang s", "blockchain", "backend", "frontend", "fullstack"]
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
