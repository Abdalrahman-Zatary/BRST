import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

const ContactHeroSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    orderNumber: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({ 
      delay: 0.5 
    });

    const splitTitle = SplitText.create(".contact-hero-content h1", {
      type: "chars",
    });

    tl.from(splitTitle.chars, {
      yPercent: 100,
      opacity: 0,
      ease: "elastic.out(1, 0.5)",
      stagger: {
        each: 0.08,
        from: "center",
      },
    }).from(".contact-hero-content p", {
      opacity: 0,
      yPercent: 30,
      duration: 0.8,
      ease: "power2.inOut",
    });
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim())
      newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.subject) newErrors.subject = "Please select a subject";
    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section className="contact-hero-section">
      <img
        src="https://i.ibb.co/bM4SPYtd/bg-contact.webp"
        alt="contact-hero"
        className="absolute md:inset-0 top-0 left-0 lg:w-fit w-full lg:h-fit h-full object-cover object-center"
      />
      <div className="contact-hero-container">
        <div className="relative z-10 h-full grid lg:grid-cols-2 grid-cols-1 lg:gap-4 md:gap-12 gap-6">
          {/* Left: heading */}
          <div className="contact-hero-content">
            <div className="flex lg:justify-start justify-center">
              <h1 className="">Get</h1>
              <h1 className="ml-[2vw]">in</h1>
            </div>
            <h1 className="xl:-mt-3 mt-0">touch</h1>
            <p className="opacity-100">
              We love to hear from you. Reach out with comments, questions and
              feedback. Our lovely team will reply as quickly as we can. <br />
              <br />
              Feel free to shoot us an email contact@BRST.com.
            </p>
          </div>

          {/* Right: form / success */}
          <div className="contact-hero-form">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 gap-6">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-mango-burst">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path
                      d="M8 20L16 28L32 12"
                      stroke="#0D1F2D"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="text-[2.5rem]! leading-none mb-2">
                    Thank you!
                  </h3>
                  <p className="font-paragraph text-deep-navy text-base max-w-xs mx-auto">
                    Your submission has been received!
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: "",
                      email: "",
                      subject: "",
                      orderNumber: "",
                      message: "",
                    });
                    setErrors({});
                  }}
                  className="input-submit cursor-pointer"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <div className="flex flex-col items-center lg:my-0 md:my-2 sm:my-7 my-10">
                  <h3 className="">Don’t be shy.</h3>
                  <h3 className="">Hit us up and we’ll get back to you!</h3>
                </div>

                <div className="block mt-[3vw] mb-4">
                  <form
                    className="grid sm:grid-cols-2 grid-cols-1 md:gap-[2vw] gap-4 h-full"
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    {/* Full name */}
                    <div className="flex flex-col gap-1">
                      <input
                        className={`child-form ${errors.fullName ? "ring-2 ring-hot-orange-red" : ""}`}
                        type="text"
                        name="fullName"
                        placeholder="Full name"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                      {errors.fullName && (
                        <span className="text-hot-orange-red font-paragraph text-xs pl-4">
                          {errors.fullName}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1">
                      <input
                        className={`child-form ${errors.email ? "ring-2 ring-hot-orange-red" : ""}`}
                        type="email"
                        name="email"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <span className="text-hot-orange-red font-paragraph text-xs pl-4">
                          {errors.email}
                        </span>
                      )}
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col gap-1">
                      <select
                        className={`child-form bg-[url('https://i.ibb.co/ymKSvjS6/drop-icon.webp')] bg-no-repeat bg-position-[92%] ${errors.subject ? "ring-2 ring-hot-orange-red" : ""}`}
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      >
                        <option value="">Subject</option>
                        <option value="1">Order Questions</option>
                        <option value="2">Product Questions</option>
                        <option value="3">Event Inquiries</option>
                        <option value="4">Press and Media</option>
                        <option value="5">
                          Deal Dairy (Distributors/Retail)
                        </option>
                        <option value="6">General</option>
                      </select>
                      {errors.subject && (
                        <span className="text-hot-orange-red font-paragraph text-xs pl-4">
                          {errors.subject}
                        </span>
                      )}
                    </div>

                    {/* Order number (optional) */}
                    <input
                      className="child-form"
                      type="text"
                      name="orderNumber"
                      placeholder="Order number (optional)"
                      value={formData.orderNumber}
                      onChange={handleChange}
                    />

                    {/* Message */}
                    <div className="flex flex-col gap-1 grid-area-select">
                      <textarea
                        className={`child-form lg:h-[10vw]! h-42! lg:pt-[1.5vw]! pt-6! rounded-[3vw]! ${errors.message ? "ring-2 ring-hot-orange-red" : ""}`}
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                      {errors.message && (
                        <span className="text-hot-orange-red font-paragraph text-xs pl-4">
                          {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit */}
                    <div className="grid-area-select place-self-center w-full flex justify-center items-center">
                      <button
                        type="submit"
                        className="input-submit cursor-pointer"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;