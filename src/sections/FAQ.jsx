export default function FAQSection() {
  return (
    <section id="faq" className="section-space mt-8">
      <h3 className="text-sm font-semibold text-black uppercase tracking-widest text-center">
        FAQ
      </h3>
      <h2 className="text-5xl font-extrabold sm:text-4xl mt-4 text-center">
        Frequently Asked Questions
      </h2>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* FAQ Item 1 */}
        <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Can It Detect Accidents?</h3>
          <p className="mt-4 text-sm">
            Yes, it uses AI-powered computer vision to detect accidents and
            hazards in real-time. It instantly alerts emergency services and
            nearby vehicles, ensuring faster response and preventing accidents.
          </p>
        </div>

        {/* FAQ Item 2 */}
        <div className=" p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">
            How Does It Improve Traffic Efficiency?
          </h3>
          <p className="mt-4 text-sm">
            The system analyzes real-time traffic data to adjust signal timings,
            suggest alternative routes, and prioritize emergency vehicles,
            reducing congestion and travel times.
          </p>
        </div>

        {/* FAQ Item 3 */}
        <div className=" p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">What Hardware is Needed?</h3>
          <p className="mt-4 text-sm">
            The system uses Raspberry Pi for processing, ESP32 for vehicle
            control, cameras, sensors, and MQTT for communication. It’s
            cost-effective and easy to integrate.
          </p>
        </div>

        {/* FAQ Item 4 */}
        <div className=" bg-blue-600 text-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">
            What is the AI and IoT-Based Traffic Monitoring System?
          </h3>
          <p className="mt-4 text-sm">
            A smart traffic solution using AI and IoT to monitor traffic, detect
            accidents, and optimize flow in real-time.
          </p>
        </div>

        {/* FAQ Item 5 */}
        <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">
            Is It Scalable For Large Cities?
          </h3>
          <p className="mt-4 text-sm">
            The system is designed to be highly scalable and can be deployed in
            cities of all sizes. Its modular architecture allows for phased
            implementation, and it can handle increasing amounts of data and
            devices as the city grows.
          </p>
        </div>

        {/* FAQ Item 6 */}
        <div className=" p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">
            How Is Data Privacy Ensured?
          </h3>
          <p className="mt-4 text-sm">
            Data security and privacy are top priorities for us. The system uses
            encrypted communication protocols like MQTT to ensure secure data
            transmission.
          </p>
        </div>
      </div>
    </section>
  );
}
