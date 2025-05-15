import fifth from "../fifth.png";
export default function TestimonialSection() {
  return (
    <section id="testimonial" className="section-space  mt-8">
      <h3 className="text-sm font-semibold text-black uppercase tracking-widest text-center">
        Testimonial
      </h3>
      <h2 className="text-3xl md:text-5xl font-extrabold sm:text-4xl mt-4 text-center tracking-tighter">
        What Our Users Say About Us?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8   mt-7">
        {/* Left Side: User Image and Quote Icon */}
        <div className="flex justify-center  items-center">
          <div className="">
            <img
              src={fifth} // Update with actual user image path
              alt="User"
              className="object-cover md:h-96 max-w-sm lg:max-w-full"
            />
          </div>
        </div>

        {/* Right Side: Testimonial Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:mt-20">
          <h4 className="text-2xl font-bold text-gray-800 tracking-tighter">
            The Best Financial Accounting App Ever!
          </h4>
          <p className="mt-4 text-sm text-gray-600 md:w-72">
            “Arcu At Dicitum Sapien, Mollis. Vulputate Sit Id Accumsan,
            Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis
            Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus,
            Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ao Dolor
            Neque Lorem Sapien, Suspendisse Aliquam.”
          </p>
          <h4 className="mt-6 font-semibold text-gray-800">Nick Jonas</h4>
        </div>
      </div>
    </section>
  );
}
