import { FC, PropsWithChildren } from "react";
import "../ui/globals.css";
import { roboto } from "../ui/fonts";
import Header from "../sections/root-layout/components/header/header";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html>
      <body className={`${roboto.className} antialiased`}>
        <main className="flex min-h-screen flex-col">
          <Header />
          <div className="container mx-auto mt-5">{children}</div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
