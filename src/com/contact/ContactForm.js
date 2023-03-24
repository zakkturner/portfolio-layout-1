import { useEffect, useState, useRef } from "react";
import axios from "axios";
import gsap from "gsap";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const successRef = useRef();

  useEffect(() => {
    if (success) {
      gsap.fromTo(
        successRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          duration: 0.5,
          opacity: 1,
          ease: "expo.out",
        }
      );
    } else {
      gsap.set(successRef.current, { opacity: 0 });
    }
  });
  const handleSubmit = async (e) => {
    let formData = new FormData();
    formData.append("name", name);
    formData.append("message", message);
    formData.append("email", email);
    formData.append("subject", subject);
    e.preventDefault();

    try {
      await axios
        .post(process.env.REACT_APP_EMAIL_URL, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          console.log(response);
          setName("");
          setSubject("");
          setEmail("");
          setMessage("");
          setSuccess(true);
        })
        .finally(() => {
          setTimeout(() => {
            setSuccess(false);
          }, 5000);
        });
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <>
      <div>
        <div className="md:gap-6">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <h1 classNameName="mb-4 text-xl">Contact Me.</h1>
            <form onSubmit={handleSubmit}>
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div>
                    <label
                      for="name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Name *
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Jon Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      for="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email *
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="jon@someprovider.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 ">
                      <label
                        for="subject"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Subject{" "}
                      </label>
                      <div className="mt-2 flex rounded-md shadow-sm w-full">
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Website update ..."
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      for="message"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Message*
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="message"
                        name="message"
                        rows="3"
                        className="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 pl-2 sm:text-sm sm:leading-6"
                        value={message}
                        placeholder="I would like to inquire about your services..."
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md bg-black py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-portfolio-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Send Email
                  </button>
                </div>
                <p
                  ref={successRef}
                  className="text-green-600 font-bold absolute bottom-16 left-8 md:left-12  lg:left-12"
                >
                  Successfully sent email!
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
