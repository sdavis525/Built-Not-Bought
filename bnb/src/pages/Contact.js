import React, { useState } from "react";

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (

    <section className="PT-form">
      <h1 data-testid="h1tag">Contact A Personal Trainer</h1>
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >


      <div className="form-input">
        <input
          type="text"
          placeholder="Your Name"

          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>

      <div className="form-input">

        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>


      <div className="form-input">
        <textarea
          placeholder="Message US"

          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>

      <div className="form-input">

        <button
          className="submit-btn"
          type="submit"
        >

          Send Message

        </button>
      </div>
    </form>
    </section>
  );
};

export default ContactForm;