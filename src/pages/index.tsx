import BenefitsBlock from "@/components/Benefits";
import ContactsBlock from "@/components/Contacts";
import Footer from "@/components/Footer";
import FoundersBlock from "@/components/Founders";
import Header from "@/components/Header";
import HeaderMobile from "@/components/HeaderMobile";
import IntroBlock from "@/components/Intro";
import ProcessBlock from "@/components/Process";
import ServicesBlock from "@/components/Services";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 676) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [isMobile]);

  return (
    <>
      <Head>
        <title>Giaverini Global Management</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Cantarell"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto"
        />
        <meta name="description" content="Set up a business in Dubai with Giaverini Global" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isMobile ? <HeaderMobile /> : <Header />}
      <main>
        <IntroBlock />
        <ServicesBlock />
        <BenefitsBlock />
        <ProcessBlock />
        <FoundersBlock />
        <ContactsBlock />
        <Footer />
      </main>
    </>
  );
}
