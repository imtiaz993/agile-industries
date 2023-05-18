import React from "react";

const Form = () => {
  return (
    <form className="rounded-2xl shadow-xl py-16 px-8 mt-10">
      <div className="grid md:grid-cols-2 gap-3">
        <div>
          <input
            required
            className="bg-[#EEEEEE] rounded-lg w-full py-2.5 px-4 mb-3 outline-1 outline-blue"
            type="text"
            placeholder="Your Full Name"
          />
          <input
            required
            className="bg-[#EEEEEE] rounded-lg w-full py-2.5 px-4 mb-3.5 outline-1 outline-blue"
            type="email"
            placeholder="Your Email"
          />
          <input
            required
            className="bg-[#EEEEEE] rounded-lg w-full py-2.5 px-4 outline-1 outline-blue"
            type="tel"
            placeholder="Your Phone no"
          />
        </div>
        <div>
          <textarea
            required
            className="bg-[#EEEEEE] rounded-lg w-full py-2 px-4 resize-none outline-1 outline-blue"
            placeholder="Message"
            rows={6}
          />
        </div>
      </div>
      <div className="md:w-1/2 mx-auto mt-5">
        <button className="bg-blue rounded-xl text-white font-medium text-lg py-3 w-full">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
