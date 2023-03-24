import { useState } from "react";

export default function ContactForm() {
  const [name, setname] = useState("");
  // const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  return (
    <>
      <div>
        <div class="md:gap-6">
          <div class="mt-5 md:col-span-2 md:mt-0">
            <h1 className="mb-4 text-xl">Contact Me.</h1>
            <form action="#" method="POST">
              <div class="shadow sm:overflow-hidden sm:rounded-md">
                <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div>
                    <label
                      for="name"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Name *
                    </label>
                    <div class="mt-2">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Jon Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      for="email"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email *
                    </label>
                    <div class="mt-2">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        class="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="jon@someprovider.com"
                      />
                    </div>
                  </div>
                  <div class="grid grid-cols-3 gap-6">
                    <div class="col-span-3 ">
                      <label
                        for="company-website"
                        class="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Website <em class="txt-xs italic">Optional</em>
                      </label>
                      <div class="mt-2 flex rounded-md shadow-sm w-full">
                        <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
                          http://
                        </span>
                        <input
                          type="text"
                          name="company-website"
                          id="company-website"
                          class="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="www.example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      for="message"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Message*
                    </label>
                    <div class="mt-2">
                      <textarea
                        id="message"
                        name="message"
                        rows="3"
                        class="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 pl-2 sm:text-sm sm:leading-6"
                        placeholder="I would like to inquire about your services..."
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    class="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Send Email
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
