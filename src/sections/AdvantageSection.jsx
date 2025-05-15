import third from "../third.png";
import forth from "../forth.png";
import logo7 from "../logo7.png"; // Update the path for logo7
import logo9 from "../logo9.png";

export default function AdvantageSection() {
  return (
    <section id="review" className="section-space mt-16">
      {/* Text */}
      <div className="space-y-6">
        <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
          Advantages
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 ">
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Why Choose Monitoring System?
            </h2>

            {/* Feature Blocks with Title, Description, and Logo */}
            <div className="md:mt-36 space-y-6 ">
              {[
                {
                  title: "Efficiency, Safety and Real-Time Insights",
                  description: [
                    "Our system leverages advanced AI algorithms, such as YOLO (You Only Look Once), to analyze live video feeds and monitor traffic conditions in real-time, enabling dynamic traffic flow optimization and reduced travel times.",
                    "It enhances road safety by detecting accidents and hazards proactively, ensuring faster emergency responses and safer roads for drivers and pedestrians.",
                    "Additionally, through IoT-enabled communication protocols like MQTT, the system facilitates seamless interaction between traffic infrastructure and vehicles, enabling smarter decision-making and improved overall traffic management.",
                  ],
                  logo: logo7,
                },
              ].map(({ title, description, logo }) => (
                <div key={title}>
                  <div className="flex items-start gap-3 mb-4">
                    <img src={logo} alt={title} className="h-12 w-12" />
                    <p className="font-bold text-2xl mt-2">{title}</p>
                  </div>
                  {description.map((desc, index) => (
                    <p key={index} className="text-sm text-gray-500">
                      {desc}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center mt-8">
            <img
              src={third}
              alt="Traffic monitoring"
              className=" max-w-sm  md:max-w-lg"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="flex justify-center md:order-1 order-last ">
          <img
            src={forth}
            alt="Traffic monitoring"
            className=" max-w-sm md:max-w-lg"
          />
        </div>
        <div className="md:mt-6 space-y-6 md:order-last">
          <div className="md:mt-28">
            <div className="flex items-start gap-4 ">
              <img src={logo9} alt="Logo for Benefits" className="h-12 w-12" />{" "}
              {/* Logo */}
              <p className="font-bold text-2xl mt-2 tracking-tighter">
                Benefits For Cities And Drivers
              </p>
            </div>
            <p className="text-gray-600">
              {/* Description of the feature */}
              For Cities: Reduce traffic congestion, lower carbon emissions, and
              improve urban planning with data-driven insights.
              <br />
              For Drivers: Enjoy shorter travel times, real-time traffic
              updates, and safer roads with proactive hazard detection.
              <br />
              For Emergency Services: Faster response times and prioritized
              routes ensure that help arrives when and where it is needed most.
            </p>
          </div>
          {/* No need for description here, as it's already covered in the paragraph above */}
        </div>
        {/* Text Section */}
      </div>
    </section>
  );
}
