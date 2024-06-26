import Head from "next/head";
import Header from "/components/header";
import Footer from "/components/footer";
import Image from "next/image";
import Advantages from "../components/advantages";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Titan Air Blowers | Products</title>
        <meta name="description" content="Titan Air Blowers | Products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="w-full bg-no-repeat bg-cover bg-center flex items-end page_hero page_product">
          <div className="container mx-auto px-6 page_title uppercase mb-5">
            Our Products
          </div>
        </div>
        <Advantages />
        <div className="w-full mb-12 md:mb-16 lg:mb-20">
          <div className="container mx-auto md:px-12 px-6">
            <div className="flex flex-col justify-center mx-auto mb-8">
              <h2>Products</h2>
              <p>
                One of our core strengths lies in our unwavering dedication to
                customer service. With Titan Air Blowers, you're not just
                purchasing a product; you're forging a lasting partnership built
                on trust and reliability. Our strong client relationships are a
                testament to this commitment.
              </p>
              <h3 className="mb-4 text-base">Key Features:</h3>
              <ul className="list-disc space-y-2 list-inside">
              <li>Longevity</li>
              <li>Robust Design</li>
              <li>Low Noise Level</li>
              <li>Versatility</li>
              <li>Superior Components</li>
              </ul>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center mx-auto">
              <div className="w-full md:w-6/12 bg_LightGray p-6 md:p-8 lg:p-16 rounded-3xl">
                <h2>1. Twin Lobe Roots Blower</h2>
                <p>
                  Our Twin Lobe Roots Blower features high-quality casting
                  casing and covers, ensuring durability and reliability in
                  every application. Utilizing advanced machining processes, we
                  guarantee precise dimensions, providing optimal performance in
                  varied conditions
                </p>
              </div>
              <div className="w-full md:w-6/12 flex justify-center p-6 md:p-8">
                <Image
                  src="/images/product/twin lobe roots blower.png"
                  alt=""
                  width={531}
                  height={321}
                  className="rounded-3xl w-full"
                  style={{ width: "350px", height: "250px" }}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center mx-auto">
              <div className="w-full md:w-6/12 flex justify-center p-6 md:p-8 order-last md:order-none">
                <Image
                  src="/images/product/bulker unloading system.png"
                  alt=""
                  width={531}
                  height={321}
                  className="rounded-3xl w-full"
                  style={{ width: "350px", height: "250px" }}
                />
              </div>
              <div className="w-full md:w-6/12 bg_LightGray p-6 md:p-8 lg:p-16 rounded-3xl">
                <h2>2. Bulker Unloading System</h2>
                <p>
                  The Twin Lobe Blowers employed in our Bulker Unloading System
                  enable high-volume, low-pressure operation, facilitating the
                  swift unloading of materials from bulkers within a remarkably
                  short timeframe. High-quality silencers, air filters, and
                  other accessories make our system more efficient.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center mx-auto">
              <div className="w-full md:w-6/12 bg_LightGray p-6 md:p-8 lg:p-16 rounded-3xl">
                <h2>3. Cement Feeding System</h2>
                <p>
                  The Cement Feeding System is made from high-quality steel,
                  ensuring superior structural strength and durability. It
                  features a tough-screw mechanism and an efficient roots blower
                  that make transferring cement easy and keeps your workflow
                  smooth, reducing downtime.
                </p>
              </div>
              <div className="w-full md:w-6/12 flex justify-center p-6 md:p-8">
                <Image
                  src="/images/product/cement_feeding_system.png"
                  alt=""
                  width={531}
                  height={321}
                  className="rounded-3xl w-full"
                  style={{ width: "350px", height: "250px" }}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center mx-auto">
              <div className="w-full md:w-6/12 flex justify-center p-6 md:p-8  order-last md:order-none">
                <Image
                  src="/images/product/cement silo.png"
                  alt=""
                  width={531}
                  height={321}
                  className="rounded-3xl w-full"
                  style={{ width: "350px", height: "250px" }}
                />
              </div>
              <div className="w-full md:w-6/12 bg_LightGray p-6 md:p-8 lg:p-16 rounded-3xl">
                <h2>4. Cement Silo</h2>
                <p>
                  Our Silos come with a Robust design and durable structure. The
                  silos attain zero water permeability and superior strength at
                  welding joints. It requires very little time for installation.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center mx-auto">
              <div className="w-full md:w-6/12 bg_LightGray p-6 md:p-8 lg:p-16 rounded-3xl">
                <h2>5. Water ring vacuum pump</h2>
                <p>
                  Water Ring Vacuum Pumps can be customized as per the
                  requirement. These are widely known for their durability and
                  quality. The usage of these pumps is diversified and includes
                  drying, Condensing, Distilling, Impregnating, and sterilizing.
                </p>
              </div>
              <div className="w-full md:w-6/12 flex justify-center p-6 md:p-8">
                <Image
                  src="/images/product/water ring vacuum pump.png"
                  alt=""
                  width={531}
                  height={321}
                  className="rounded-3xl w-full"
                  style={{ width: "350px", height: "250px" }}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center mx-auto">
              <div className="w-full md:w-6/12 flex justify-center p-6 md:p-8 order-last md:order-none">
                <Image
                  src="/images/product/tri lobe roots blower.png"
                  alt=""
                  width={531}
                  height={321}
                  className="rounded-3xl w-full"
                  style={{ width: "350px", height: "250px" }}
                />
              </div>
              <div className="w-full md:w-6/12 bg_LightGray p-6 md:p-8 lg:p-16 rounded-3xl">
                <h2>6. Tri Lobe Roots Blower</h2>
                <p>
                  It is commonly used for applications requiring the movement of
                  large volumes of gas or air at relatively low-pressure
                  differentials. These lobes are designed to rotate in synchrony
                  without contacting each other or the housing, thereby
                  minimizing internal leakage and reducing energy losses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
