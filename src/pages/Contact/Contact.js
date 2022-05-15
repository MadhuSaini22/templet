/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import pic from "../../assets/one.jpg";
// import Hemu from "../../assets/hemanshi1.jpg";
// import Kimi from "../../assets/kimi1.jpg";
// import Krisha from "../../assets/krisha1.jpg";
// import Yesha from "../../assets/yesha1.jpg";
const Contact = () => {
  return (
    <>
      <div className="w-screen h-full">
        <div class="flex justify-center mt-4 p-2">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <img class="rounded-t-lg h-28" src={pic} alt="" />
            <div class="py-2 px-4">
              <h5 class="text-red-700 text-2xl font-semibold text-center font-serif">Smart Brts Ltd</h5>
              <p class="text-gray-700 text-base mb-3">

              </p>
              <div class="ml-16">
                <span class="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href="mailto:brtsofficial123@gmail.com" className="text-blue-400">brtsofficial123@gmail.com</a></span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 py-5 px-5 gap-x-7">
          <div class="max-w-xs rounded-lg shadow-lg min-h-fit p-4 h-52 d-inline-block">
            <div class="px-3 py-3">
              <div class="text-xl text-center text-yellow-500 font-serif font-bold">Madhu Saini</div>
              <p class="text-gray-500 font-semibold font-sans text-center my-4">
                Web Developer
              </p>
            </div>
            <div class="mx-2">
              <span class="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href="mailto:madhusaini46810@gmail.com" className="text-blue-400">madhusaini46810@gmail.com</a></span>
            </div>
          </div>
          <div class="max-w-xs rounded-lg shadow-lg min-h-fit p-4 h-52 d-inline-block">
            <div class="px-3 py-3">
              <div class="text-xl text-center text-yellow-500 font-serif font-bold">Krisha Goti</div>
              <p class="text-gray-500 text-center my-4 font-semibold font-sans">
              Developer
              </p>
            </div>
            <div class="mx-4">
              <span class="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href="mailto:Krishagoti25@gmail.com" className="text-blue-400">Krishagoti25@gmail.com</a></span>
            </div>
          </div>
          <div class="max-w-xs rounded-lg shadow-lg min-h-fit p-4 h-52 d-inline-block">
            <div class="px-3 py-3">
              <div class="text-xl text-center text-yellow-500 font-serif font-bold">Kimi Gajjar</div>
              <p class="text-gray-500  text-center my-4 font-semibold font-sans">
              Lead Designer
              </p>
            </div>
            <div class="mx-4">
              <span class="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href="mailto:gajjarkimi723@gmail.com" className="text-blue-400">gajjarkimi723@gmail.com</a></span>
            </div>
          </div>
          <div class="max-w-xs rounded-lg shadow-lg min-h-fit p-4 h-52 d-inline-block">
            <div class="px-3 py-3">
              <div class="text-xl text-center text-yellow-500 font-serif font-bold">Hemanshi Ukani </div>
              <p class="text-gray-500 font-semibold text-center my-4 font-sans">
              Programmer
              </p>
            </div>
            <div class="">
              <span class="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href="mailto:hemanshiukani2002@gmail.com" className="text-blue-400">hemanshiukani2002@gmail.com</a></span>
            </div>
          </div>
          <div class="max-w-xs rounded-lg shadow-lg min-h-fit p-4 h-52 d-inline-block">
            <div class="px-3 py-3">
              <div class="text-xl text-center text-yellow-500 font-serif font-bold">Yesha Patel</div>
              <p class="text-gray-500 font-semibold font-sans text-center my-4">
              Lead Designer
              </p>
            </div>
            <div class=" mx-8">
              <span class="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href="mailto:yeshana10@gmail.com" className="text-blue-400">yeshana10@gmail.com</a></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
