import { useState } from "react";
import ContactImage from "../assests/images/contact-img.svg";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send")
    let result=response.json();
    setForm(formDetails);
    if(result.code===200)
    {
        setStatus({success:true,message:"Message sent successfully"})

    }
    else
    {
        setStatus({success:false,message:"Something went wrong"})
    }

  };

  return (
    <section className="contact" id="contact">
    <div className="pt-20 pb-40">
      <div className="flex flex-col  md:flex-row justify-between  mx-24 ">
        <div className=" flex flex-row justify-center items-start w-1/2">
          <img src={ContactImage} />
        </div>
        <div className="w-1/2 px-6">
          <h2 className="text-4xl mb-6">Get In Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-row justify-between">
              <input
              className="w-1/2"
                type="text"
                value={form.first_name}
                placeholder="First Name"
                onChange={(e) =>
                  setForm({ ...form, first_name: e.target.value })
                }
              />
              <input
              className="w-1/2"
                type="text"
                value={form.last_name}
                placeholder="Last Name"
                onChange={(e) =>
                  setForm({ ...form, last_name: e.target.value })
                }
              />
            </div>
            <div className="flex flex-row justify-between">
              <input
              className="w-1/2"
                type="email"
                value={form.email}
                placeholder="Email"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <input
              className="w-1/2"
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
                value={form.message}
                placeholder="Message"
                onChange={(e) => {
                  setForm({ ...form, message: e.target.value });
                }}
              />
            </div>
            <div className="flex justify-start pl-4 ">
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
