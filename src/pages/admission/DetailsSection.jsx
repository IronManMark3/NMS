import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { FaWhatsapp } from 'react-icons/fa';
import Button from '../../components/ui/Button';

const DetailsSection = () => {
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please complete the reCAPTCHA");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ recaptchaToken: captchaValue }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("CAPTCHA verified successfully!");
      } else {
        alert("CAPTCHA failed: " + data.message);
      }
    } catch (error) {
      console.error("Error during CAPTCHA verification:", error);
      alert("An error occurred during submission.");
    }
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1280px] mx-auto px-[81px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start" data-aos="fade-up">

          {/* Left Form Section */}
          <div className="bg-[#f9f9f9] rounded-xl p-6 sm:p-10 shadow-md w-full">
            <h2 className="text-[28px] sm:text-[32px] text-[#2b0a3d] font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#c30015] to-[#0025ae]">
              Connect with Us
            </h2>
            <p className="font-[poppins] text-[15px] mb-6">Enter your details to get more information</p>

            <form onSubmit={handleSubmit} className="font-[poppins] space-y-4">
              <div>
                <label className="block text-[15px] font-medium text-black mb-1">
                  Contact Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter Full Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-[15px] font-medium text-black mb-1">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Enter Mobile Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-[15px] font-medium text-black mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-[15px] font-medium text-black mb-1">
                  Apply for Campus <span className="text-red-500">*</span>
                </label>
                <select required className="w-full px-4 py-3 border border-gray-300 rounded-md">
                  <option value="">Select Campus</option>
                  <option value="mansarovar">Mansarovar</option>
                  <option value="kalwara">Kalwara</option>
                </select>
              </div>

              <div>
                <label className="block text-[15px] font-medium text-black mb-1">
                  Class in which admission sought <span className="text-red-500">*</span>
                </label>
                <select required className="w-full px-4 py-3 border border-gray-300 rounded-md">
                  <option value="">Select</option>
                  <option value="nursery">Nursery</option>
                  <option value="kg">KG</option>
                  <option value="1">Class 1</option>
                  <option value="2">Class 2</option>
                </select>
              </div>

              <div className="pt-4">
                <p className="font-semibold text-[15px] text-black">Terms & Conditions</p>
                <p className="text-sm text-gray-600 pt-1">
                  I acknowledge that I have read, and do hereby accept the terms and conditions of Neerja Modi School, Jaipur.
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <input type="checkbox" required />
                  <span className="text-sm text-gray-700">I Agree</span>
                </div>
              </div>

              <div className="pt-4">
                <ReCAPTCHA
                  sitekey="6LeO0GQrAAAAAG8WaDNhQmp3eBkmLU0f4YapqWVC"
                  onChange={handleCaptchaChange}
                />
              </div>

              <Button
                type="submit"
                variant="gradient"
                className="mt-6 px-[25px] py-[9px] text-[13px] leading-[19px] text-center rounded-sm hover:border-transparent max-[360px]:text-[12px] max-[360px]:px-[20px] max-[360px]:py-[8px]"
              >
                Submit
              </Button>
            </form>
          </div>

          {/* Right Contact Info Section */}
          <div className="w-full text-[15px]">
            <h2 className="text-[24px] sm:text-[28px] font-semibold mb-4 text-[#2b0a3d]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c30015] to-[#0025ae]">
                For Admission Request
              </span>
            </h2>

            <p className="font-[poppins] font-semibold text-black">Contact -</p>
            <div className="font-[poppins] my-3 space-y-2">
              <p><strong>Ms. Suman Mathur</strong> &nbsp; <a href="tel:+918905551586" className="underline text-[#555]">+918905551586</a></p>
              <p><strong>Mr. Surendra Singh</strong> &nbsp; <a href="tel:+919649261850" className="underline text-[#555]">+919649261850</a></p>
            </div>

            <p className="font-[poppins] font-semibold mt-6 text-black">Whatsapp enquiry -</p>
            <div className="font-[poppins] space-y-2 mt-2">
              <p className="flex items-center gap-2">
                <FaWhatsapp size={20} color="#25D366" />
                <a href="https://api.whatsapp.com/send?phone=918905551586" className="text-[#0025ae] underline">Mansarovar Campus</a>
              </p>
              <p className="flex items-center gap-2">
                <FaWhatsapp size={20} color="#25D366" />
                <a href="https://api.whatsapp.com/send?phone=918905551585" className="text-[#0025ae] underline">Kalwara Campus</a>
              </p>
            </div>

            <p className="font-[poppins] mt-6 text-gray-700">
              For more information, please feel free to call us or email us at <a href="mailto:nmsjaipur@yahoo.com" className="underline font-medium text-[#c30015]">nmsjaipur@yahoo.com</a>
            </p>

            <p className="font-[poppins] mt-4">
              <a href="/files/fee-structure.pdf" className="text-[#6a1b9a] underline">Fee Structure 2022–23</a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
