import Head from "next/head";
import Header from "/components/header";
import Footer from "/components/footer";

import OurOffice from "../components/our-office";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Titan Air Blowers | Contact Us</title>
        <meta name="description" content="Titan Air Blowers | Contact Us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="w-full bg-no-repeat bg-cover bg-center flex items-end page_hero page_contact mb-12"></div>
        <div className="w-full mb-12 md:mb-16 lg:mb-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 justify-center items-center">
              <div className="w-full lg:w-4/12">
                <h1>Titan Air Blowers</h1>
                <div className="footer">
                  <div className="mt-10">
                    <OurOffice />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-8/12">
                <div className="contact_map">
                  <iframe
                    className="rounded-3xl card_box_shadow w-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.3611191059513!2d72.6478018!3d22.973744599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e896871963c9d%3A0x6df6260d714caed5!2sTitan%20Air%20Blowers!5e0!3m2!1sen!2sin!4v1718132837605!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
