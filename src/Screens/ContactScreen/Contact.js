import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_m66i8k6", "template_l5ay7qw", form.current, {
        publicKey: "DnPREEHp5GccDjLLI",
      })
      // .sendForm("service_001f2ts", "template_pkdrwgf", form.current, {
      //      publicKey: "e2F3pvCKkMYkbWieU",
      //    })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Successfully sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Something went wrong. Please try again later");
        }
      );
  };

  return (
    <div id="Contact" className="contact-container">
      <div className="contact-heading">
        <h2 data-aos="fade-up" data-aos-duration="1000">
          Contact
        </h2>
      </div>

      <div className="contact-content">
        <div
          className="contact-para"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h5>Let's make it happen</h5>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
        {/* <div className="d-flex align-tems-center justify-content-center"> */}
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input
            className="he-input"
            type="text"
            placeholder="Name"
            name="Name" // Name
            // value={formDetails.Name}
            // onChange={handleChange}
            required
          />

          <input
            type="email"
            className="he-input"
            placeholder="Email" //Email
            name="Email"
            // value={formDetails.Email}
            // onChange={handleChange}
            required
          />

          <textarea
            className="he-input"
            placeholder="Type your message here..."
            name="Message" //Message
            // value={formDetails.Message}
            rows={3}
            // onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="he-button send-button">
            Send
          </button>
        </form>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Contact;
