import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

const ContactHeroSection = () => {
  useGSAP(() => {

    const tl = gsap.timeline({ delay: 0.5 });

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

  return (
    <section className="contact-hero-section">
      <img
        src="https://i.ibb.co/bM4SPYtd/bg-contact.webp"
        alt="contact-hero"
        className="absolute md:inset-0 top-0 left-0 lg:w-fit w-full lg:h-fit h-full object-cover object-center"
      />
      <div className="contact-hero-container">
        <div className="relative z-10 h-full grid lg:grid-cols-2 grid-cols-1 lg:gap-4 md:gap-12 gap-6">
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
          <div className="contact-hero-form">
            <div className="flex flex-col items-center lg:my-0 md:my-2 sm:my-7 my-10">
              <h3 className="">Don’t be shy.</h3>
              <h3 className="">Hit us up and we’ll get back to you!</h3>
            </div>

            <div className="block mt-[3vw] mb-4">
              <form className="grid sm:grid-cols-2 grid-cols-1 md:gap-[2vw] gap-4 h-full">
                <input
                  className="child-form"
                  type="text"
                  placeholder="Full name"
                />
                <input
                  className="child-form"
                  type="text"
                  placeholder="Email address"
                />
                <select
                  className="child-form bg-[url('https://i.ibb.co/ymKSvjS6/drop-icon.webp')] bg-no-repeat bg-position-[92%]"
                  name="Subject"
                  id="Subject"
                >
                  <option value="">Subject</option>
                  <option value="1">Order Questions</option>
                  <option value="2">Product Questions</option>
                  <option value="3">Event Inquiries</option>
                  <option value="4">Press and Media</option>
                  <option value="5">Deal Dairy (Distributors/Retail)</option>
                  <option value="6">General</option>
                </select>
                <input
                  className="child-form"
                  type="text"
                  placeholder="Order number (optional)"
                />
                <textarea
                  className="child-form grid-area-select lg:h-[10vw]! h-42! lg:pt-[1.5vw]! pt-6! rounded-[3vw]!"
                  name="Message"
                  id="Message"
                  placeholder="Message"
                />
                <div className="grid-area-select place-self-center w-full flex justify-center items-center">
                  <input
                    className="input-submit"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;