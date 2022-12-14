import { useState } from "react";
import ContactImage from "../assests/images/contact-img.svg";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const formDetails = {
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    message: "",
  };

  const [form, setForm] = useState(formDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const SERVICE_ID = "service_eqrr56j";
  const TEMPLATE_ID = "template_tf72iy4";
  const USER_ID = "nAyM_GfTBmGA76jc9";

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target);
    setButtonText("Sending...");
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    setButtonText("Send");
    e.target.reset();
    setForm(formDetails);
  };

  return (
    <section className="contact" id="contact">
      <div className="pt-24 pb-24">
        <div className="flex flex-col  lg:flex-row justify-between  lg:mx-24 ">
          <div className=" flex flex-row justify-center items-start lg:w-1/2 mb-20 lg:mb-0 lg:mr-10">
            <img src={ContactImage} />
          </div>
          <div className="lg:w-1/2 px-6">
            <h2 className="text-4xl mb-6">Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="flex  flex-col lg:flex-row justify-between">
                <input
                  className="  lg:w-1/2"
                  required
                  name="first_name"
                  type="text"
                  value={form.first_name}
                  placeholder="First Name"
                  onChange={(e) =>
                    setForm({ ...form, first_name: e.target.value })
                  }
                />
                <input
                  name="last_name"
                  className=" lg:w-1/2"
                  type="text"
                  value={form.last_name}
                  placeholder="Last Name"
                  onChange={(e) =>
                    setForm({ ...form, last_name: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col lg:flex-row justify-between">
                <input
                  name="email"
                  required
                  className=" lg:w-1/2"
                  type="email"
                  value={form.email}
                  placeholder="Email"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <input
                  name="phone_number"
                  required
                  className=" lg:w-1/2"
                  type="tel"
                  value={form.phone_number}
                  placeholder="Phone No."
                  onChange={(e) =>
                    setForm({ ...form, phone_number: e.target.value })
                  }
                />
              </div>
              <div className="w-full ml-4 mr-4 mb-4 flex justify-start">
                <textarea
                  name="message"
                  value={form.message}
                  placeholder="Message"
                  onChange={(e) => {
                    setForm({ ...form, message: e.target.value });
                  }}
                />
              </div>
              <div className="flex justify-center lg:justify-start pl-4 ">
                <div className="relative inline-block ">
                  <button className="contact_button" type="submit">
                    <span>{buttonText}</span>
                  </button>
                </div>
              </div>
              <div>
                <p className={status.success === false ? "danger" : "success"}>
                  {status.message}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
