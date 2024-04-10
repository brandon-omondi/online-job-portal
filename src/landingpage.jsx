import React from "react";

function Landing() {
  return (
    <div>
      <body class="bg-gray-100">
        {/* <!-- Header --> */}
        <header class="bg-white shadow-md">
          <div class="flex justify-between items-center py-2 px-5 border-b-2 border-gray-200">
            <div class="flex items-center">{/* <!-- Logo --> */}</div>

            {/* <!-- Navbar Buttons --> */}
            <div class="flex items-center space-x-2">
              <a
                href="#"
                class="px-2 py-2 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white font-semibold rounded-lg text-sm"
              >
                About
              </a>
              <a
                href="#"
                class="px-2 py-2 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white font-semibold rounded-lg text-sm"
              >
                Contact
              </a>
              <a
                href="#"
                class="px-2 py-2 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white font-semibold rounded-lg text-sm"
              >
                Sign In
              </a>
            </div>
          </div>
        </header>

        {/* <!-- Landing Page --> */}
        <div class="bg-white">
          <div class="flex justify-between items-center py-28 px-5">
            <div class="w-1/2">
              <h2 class="text-5xl font-semibold text-gray-800">
                Welcome to Nairobi.Go
              </h2>
              <h3 class="text-xl font-semibold text-gray-600 mt-4">
                Your search for a job has come to and en!
              </h3>
              <p class="text-gray-600 mt-4">
                We receive and update job listsing on a daily basis and have
                processed well over +10,000 job openings
              </p>
            </div>
            <div class="w-1/2">
              <img
                src="https://www.emprenderconactitud.com/img/fidelizamas.png"
                alt=""
                class="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div class="bg-white grid grid-cols-4 gap-10 p-10 mt-10">
          {/* <!-- Section 2 --> */}
        </div>

        {/* <!-- Section 3 --> */}
        <div class="bg-white p-10 mt-10">
          <h2 class="text-center text-3xl">Our Mission</h2>
          <p class="mt-4">
            En FidelizaMás, nuestra misión es transformar la fidelización,
            conectando a empresas y clientes a través de emocionantes programas
            de recompensas basados en tokens...
          </p>
        </div>

        {/* <!-- Section 4  --> */}
        <div class="bg-gradient-to-r from-cyan-400 to-cyan-600 p-10 rounded-lg mt-10">
          <h2 class="text-white text-3xl text-center">Únete a FidelizaMás</h2>
          <p class="text-white mt-2 text-center">
            Descubre cómo podemos transformar la fidelización en una ventaja
            competitiva para tu empresa.
          </p>
          <div class="flex justify-center">
            <button class="mt-4 bg-white text-cyan-600 rounded-lg px-4 py-2">
              Saber más
            </button>
          </div>
        </div>

        {/* <!-- Section 5 Testimonials --> */}
        <div class="bg-white p-10 mt-10">
          <h2 class="text-lg font-bold">Lo que dicen nuestros clientes</h2>
          {/* <!-- cards --> */}

          <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-100 py-6 sm:py-12">
            <div class="min-h-28 ">
              <div class="max-w-screen-lg mx-auto py-4">
                <h2 class="font-bold text-center text-6xl text-slate-700 font-display">
                  Our Blog Post
                </h2>
                <p class="text-center mt-4 font-medium text-slate-500">
                  OUR NEWS FEED
                </p>
                <div class="flex gap-6 mt-20">
                  <div class="bg-white w-1/3 shadow rounded-lg overflow-hidden">
                    <img
                      src="https://loremflickr.com/320/240?random=1"
                      class="object-cover h-52 w-full"
                      alt=""
                    />
                    <div class="p-6">
                      <span class="block text-slate-400 font-semibold text-sm">
                        16 Juillet 2016
                      </span>
                      <h3 class="mt-3 font-bold text-lg pb-4 border-b border-slate-300">
                        <a href="https://play.tailwindcss.com/TGny89rOkl?layout=horizontal">
                          Finding best places to visit in California
                        </a>
                      </h3>
                      <div class="flex mt-4 gap-4 items-center">
                        <span class="flex gap-1 items-center text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-4 h-4"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                          35
                        </span>
                        <span class="flex gap-1 items-center text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="text-sky-400 w-4 h-4"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                            />
                          </svg>
                          20
                        </span>
                        <span class="flex gap-1 items-center text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-4 h-4 text-lime-500"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                            />
                          </svg>
                          15
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="bg-white w-1/3 shadow rounded-lg overflow-hidden">
                    <img
                      src="https://loremflickr.com/320/240?random=1"
                      class="object-cover h-52 w-full"
                      alt=""
                    />
                    <div class="p-6">
                      <span class="block text-slate-400 font-semibold text-sm">
                        16 Juillet 2016
                      </span>
                      <h3 class="mt-3 font-bold text-lg pb-4 border-b border-slate-300">
                        <a href="https://play.tailwindcss.com/TGny89rOkl?layout=horizontal">
                          Finding best places to visit in California
                        </a>
                      </h3>
                      <div class="flex mt-4 gap-4 items-center">
                        <span class="flex gap-1 items-center text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-4 h-4"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                          35
                        </span>
                        <span class="flex gap-1 items-center text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="text-sky-400 w-4 h-4"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                            />
                          </svg>
                          20
                        </span>
                        <span class="flex gap-1 items-center text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-4 h-4 text-lime-500"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                            />
                          </svg>
                          15
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="bg-white w-1/3 shadow rounded-lg overflow-hidden">
                    <img
                      src="https://loremflickr.com/320/240?random=1"
                      class="object-cover h-52 w-full"
                      alt=""
                    />
                    <div class="p-6">
                      <span class="block text-slate-400 font-semibold text-sm">
                        16 Juillet 2016
                      </span>
                      <h3 class="mt-3 font-bold text-lg pb-4 border-b border-slate-300">
                        <a href="https://play.tailwindcss.com/TGny89rOkl?layout=horizontal">
                          Finding best places to visit in California
                        </a>
                      </h3>
                      <div class="flex mt-4 gap-4 items-center">
                        <span class="flex gap-1 items-center text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-4 h-4"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                          35
                        </span>
                        <span class="flex gap-1 items-center text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="text-sky-400 w-4 h-4"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                            />
                          </svg>
                          20
                        </span>
                        <span class="flex gap-1 items-center text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-4 h-4 text-lime-500"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                            />
                          </svg>
                          15
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Footer --> */}
        <footer class="bg-gray-800 text-white p-4 mt-10">
          <p>Derechos reservados © FidelizaMás</p>
        </footer>
      </body>
    </div>
  );
}

export default Landing;
