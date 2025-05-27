import MainHeader from "@/Components/main-header/MainHeader";
import "./globals.css";
import MainHeaderBackground from "@/Components/main-header/MainHeaderBackground";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <MainHeaderBackground/>


<MainHeader/>


        {children}
      </body>
    </html>
  );
}
