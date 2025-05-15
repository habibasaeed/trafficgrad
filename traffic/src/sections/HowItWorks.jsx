import logo2 from "../logo2.png";
import logo1 from "../logo1.png";

import logo3 from "../logo3.png";
import logo4 from "../logo4.png";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-space  mt-8">
      <h3 className="text-sm font-semibold text-center uppercase tracking-widest">
        From Data Collection to Decision Making
      </h3>
      <h2 className="text-3xl font-bold sm:text-4xl mt-4 text-center">
        How It Works
      </h2>

      {/* Grid layout with 2 rows, 2 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
        {/* Data Collection Block with blue background */}
        <div className="bg-blue-600 text-white p-6 rounded-lg flex flex-col items-center space-y-4">
          <img src={logo1} alt="Data Collection" className="h-16 w-16" />
          <h4 className="text-lg font-semibold">Data Collection</h4>
          <p className="text-sm text-center">
            Our system collects real-time traffic data from cameras, sensors,
            and IoT devices installed across the city.
          </p>
        </div>

        {/* AI-Powered Analysis Block */}
        <div className="p-6 rounded-lg border flex flex-col items-center space-y-4">
          <img src={logo2} alt="AI Powered Analysis" className="h-16 w-16" />
          <h4 className="text-lg font-semibold">AI-Powered Analysis</h4>
          <p className="text-sm text-center text-gray-600">
            Using machine learning models like YOLO, the system processes the
            data to detect traffic conditions, accidents, and potential hazards.
          </p>
        </div>

        {/* Real-Time Communication Block */}
        <div className="p-6 rounded-lg border flex flex-col items-center space-y-4">
          <img
            src={logo3}
            alt="Real-Time Communication"
            className="h-16 w-16"
          />
          <h4 className="text-lg font-semibold">Real-Time Communication</h4>
          <p className="text-sm text-center text-gray-600">
            The processed data is transmitted to traffic authorities and
            vehicles via the MQTT protocol, enabling immediate action and
            decision-making.
          </p>
        </div>

        {/* Dynamic Traffic Management Block */}
        <div className="p-6 rounded-lg border flex flex-col items-center space-y-4">
          <img
            src={logo4}
            alt="Dynamic Traffic Management"
            className="h-16 w-16"
          />
          <h4 className="text-lg font-semibold">Dynamic Traffic Management</h4>
          <p className="text-sm text-center text-gray-600">
            Based on real-time data, the system adjusts traffic signals,
            provides route recommendations, and prioritizes emergency vehicles
            to ensure optimal traffic flow and safety.
          </p>
        </div>
      </div>
    </section>
  );
}
