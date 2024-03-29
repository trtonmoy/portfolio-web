import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9w3lzbp",
        "template_iqzhlvs",
        form.current,
        "1leqQsJkGshzPjw2s"
      )
      .then(
        (result) => {
          form.current.reset();
          console.log(result.text);
          if (result.text === "OK") {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your email has been sent successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="max-w-4xl mx-auto">
      <div className="">
        <h3 className="text-2xl text-red-700 font-bold mb-12">Contact Me</h3>
        <form className="" ref={form} onSubmit={sendEmail}>
          <label className="">
            Name
            <input className="w-full py-2 my-4" type="text" name="user_name" />
          </label>
          <label className="">
            Email
            <input
              className="w-full py-2 my-4"
              type="email"
              name="user_email"
            />
          </label>
          <label className="">
            Message
            <textarea className="w-full py-2 my-4" name="message" />
          </label>
          <input
            className="border  px-12 py-3 bg-red-500 tracking-wide font-medium hover:text-white hover:bg-red-600  mt-4"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
