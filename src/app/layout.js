import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "FaridAnangSamudra 🤵🏽",
  metadataBase: "https://frdanngspolio.vercel.app",
  authors: {
    name: "Farid Anang Samudra",
  },
  description: "Junior Fullstack Web & Blockchain Developer showcasing skills in frontend, backend, and blockchain development.",

  openGraph: {
    title: "farid anang samudra",
    url: "https://frdanngspolio.vercel.app",
    description: "Explore my portfolio, I am a Junior Fullstack Developer & Blockchain Developer.",
    images: [
      {
        url: "https://raw.githubusercontent.com/faridanangs/my-portfolio/main/public/myfoto.webp",
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


// import { Inter } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/navbar/Navbar";
// import Footer from "@/components/footer/Footer";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: {
//     default: "Next.js 14 Homepage",
//     template: "%s | Next.js 14"
//   },
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <div className="container">
//           <Navbar />
//           {children}
//           <Footer />
//         </div>
//       </body>
//     </html>
//   );
// }
