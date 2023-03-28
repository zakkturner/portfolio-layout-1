import { useEffect, useState, useRef, useContext } from "react";
// import axios from "axios";
import gsap from "gsap";
import { ModalDispatchContext } from "../../context/ModalContext";
export default function ContactForm() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const successRef = useRef();
  const dispatch = useContext(ModalDispatchContext);

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
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", name);
    formData.append("message", message);
    formData.append("email", email);
    formData.append("subject", subject);
    try {
      // await axios({
      //   method: "post",
      //   url: "/",
      //   data: formData,
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //     "Access-Control-Allow-Origin": "*",
      //     "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      //     "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
      //   },
      // })
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
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
            <h1 className="mb-4 text-xl">Contact Me.</h1>
            <form
              name="contact"
              onSubmit={handleSubmit}
              method="POST"
              data-netlify="true"
              action="/"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div>
                    <label
                      htmlFor="name"
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
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
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
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 ">
                      <label
                        htmlFor="subject"
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
                      htmlFor="message"
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
            <button
              type="button"
              className="inline-flex mt-2 lg:hidden justify-center rounded-full bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500  sm:w-auto "
              onClick={() => {
                dispatch({
                  type: "closed",
                });
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
