import second from "../second.png";
import logo6 from "../logo6.png";
import logo5 from "../logo5.png";
import logo8 from "../logo8.png";

export default function FeatureSection() {
  const features = [
    {
      text: "Real-Time Object Detection",
      logo: logo5,
      description:
        "Using YOLO, our system can detect and classify vehicles, pedestrians, and obstacles in real-time, providing actionable insights for traffic management.",
    },
    {
      text: "Dynamic Traffic Signal Control",
      logo: logo6,
      description:
        "Our system adapts traffic signal timings based on real-time data, reducing congestion and improving traffic flow.",
    },
    {
      text: "Accident Detection & Response",
      logo: logo8,
      description:
        "In the event of an accident, our system immediately alerts emergency services and nearby vehicles, ensuring a swift and coordinated response.",
    },
  ];

  return (
    <section id="features" className="section-space space-y-16 ">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Image */}
        <div className="relative order-last md:order-1 ">
          <img
            src={second}
            alt=""
            className="w-full  md:mt-11 md:max-w-lg max-w-md mt-7 mx-auto  "
          />
          <div className="pointer-events-none absolute -left-14 -top-14 h-[130%] w-[130%] " />
        </div>

        {/* Features List */}
        <div className="mt-11 md:mt-0">
          <h3 className="mb-6 text-sm font-semibold text-blue-600 uppercase tracking-widest">
            Features
          </h3>
          <h2 className="text-3xl font-bold sm:text-4xl">Uifry Premium</h2>

          <ul className="mt-6 space-y-4 text-gray-600">
            {features.map(({ text, logo, description }) => (
              <li key={text} className="flex items-start gap-6">
                <img src={logo} alt={text} className="h-12 w-12" />{" "}
                {/* Logo size */}
                <div>
                  <p className="font-semibold text-lg">{text}</p>
                  <p className="mt-2 text-sm text-gray-500">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
