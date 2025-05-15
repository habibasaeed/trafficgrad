/*  src/sections/HeroSection.jsx  */
import first from "../first.png"; // adjust path if your folder depth differs

export default function HeroSection() {
  return (
    <section
      id="home"
      className="section-space flex flex-col-reverse gap-12 lg:grid lg:grid-cols-2 lg:items-center "
    >
      {/* ---------- copy & promo text ---------- */}
      <div className="space-y-6">
        <h1 className="text-4xl/tight font-extrabold sm:text-5xl lg:text-6xl">
          Smart <span className="text-primary">Traffic App</span>
          <br />
          For Smarter Cities
        </h1>
        <div>
          <p className="max-w-xl text-gray-500 font-mono text-sm">
            Our AI and IoT-based Traffic Monitoring System is designed to tackle
            the growing challenges of urban traffic congestion, accidents, and
            inefficiencies. By leveraging cutting-edge technologies like machine
            learning, real-time data processing, and vehicle-to-everything (V2X)
            communication, we provide a dynamic and intelligent solution for
            modern traffic management. Whether it is reducing travel time,
            enhancing road safety, or enabling smart communication between
            vehicles and infrastructure, our system is built to transform the
            way cities handle traffic.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#download"
            className="rounded-md bg-black px-6 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-glow hover:bg-blue-600"
          >
            Book a Demo {" > "}
          </a>

          <a
            href="#video"
            className="flex items-center gap-2 text-lg font-semibold hover:shadow-xl px-6 py-4"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-8 w-8 fill-primary stroke-primary  rounded-full border-black border p-1 "
            >
              <polygon points="5,3 19,12 5,21" />
            </svg>
            Watch Video
          </a>
        </div>
      </div>

      {/* ---------- phone mock-up image ---------- */}
      <div className="relative mx-auto max-w-md lg:max-w-full">
        <img src={first} alt="App screens" className=" " />
        <div className="pointer-events-none absolute -left-16 -top-16 h-[150%] w-[150%]" />
      </div>
    </section>
  );
}
