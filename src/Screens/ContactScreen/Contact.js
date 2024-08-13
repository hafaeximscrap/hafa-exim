import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  let [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_m66i8k6", "template_l5ay7qw", form.current, {
        publicKey: "DnPREEHp5GccDjLLI",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          setLoading(false);
          Swal.fire({
            icon: "success",
            title: "Successfully sent!",
            text: "Our team will contact you shortly.",
            showConfirmButton: false,
            timer: 3000,
            width: "25rem",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong, please try again.",
            timer: 3000,
            showConfirmButton: false,
            width: "25rem",
          });
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
            the <b>1500s</b>.<br></br>
            <address className="contact-address">
              <p>
                <b>
                  Hafa Exim,
                  <br></br> 1234 NW Bobcat Lane,
                  <br></br> St. Robert,
                  <br></br> MO 65584-5678.
                </b>
              </p>
            </address>
            Lorem Ipsum is simply dummy text.
          </p>
        </div>

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

          {loading ? (
            <button className="he-button send-button">
              <div class="spinner-border text-light" />
            </button>
          ) : (
            <button type="submit" className="he-button send-button">
              <p class="send-text"> Send </p>
              <span class="material-symbols-rounded send-icon"> send </span>
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
