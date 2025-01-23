import { useEffect } from "react";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div id="about" className="min-h-screen bg-amber-50 py-12  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center"
          data-aos="fade-right">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
          >
            About <span className="text-3xl font-extrabold text-amber-600">LuxStay</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Your luxury destination for memorable stays
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <img
                className="w-full min-h-10 object-cover rounded-lg"
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
                alt="Luxury hotel exterior"
                data-aos="zoom-in"
              />
            </div>
            <div className="flex flex-col justify-center" data-aos="fade-left">
              <h3 className="text-2xl font-bold text-gray-900">Our Story</h3>
              <p className="mt-4 text-gray-600">At LuxStay, our journey began with a simple mission: to create unforgettable travel experiences that feel like home, no matter where you are.</p>
              <br />
              <p className="mt-4 text-gray-600">
                Born from a passion for hospitality and a desire to connect people with extraordinary stays, we launched with a commitment to offering more than just accommodations. We wanted to create spaces where memories are made, whether it’s a romantic getaway, a family vacation, or a solo adventure.

                What started as a small idea has grown into a trusted destination for travelers worldwide, blending comfort, luxury, and exceptional service at every step.
              </p>
            </div>
          </div>



          <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              At LuxStay, our mission is to provide unforgettable experiences through
              exceptional hospitality. We strive to exceed our guests' expectations by
              delivering personalized service, maintaining the highest standards of luxury,
              and creating memorable moments that last a lifetime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;