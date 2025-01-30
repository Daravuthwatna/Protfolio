import React from "react";

const contact = () => {
  return (
    <div className="bg-white flex items-center justify-center">
      <div className="max-w-screen-xl w-full flex flex-col sm:flex-row justify-center bg-gray-100 rounded-lg my-8 p-6 sm:p-10">
        <div className="text-center sm:text-left">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight leading-tight sm:text-4xl">
            Contact Me
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 text-center mb-6">
            If you have any questions or inquiries, please don't hesitate to
            contact me. I would be happy to assist you.
          </p>
          <div className="divide-y divide-gray-300">
          <div className="py-4">
              <p className="text-lg font-semibold text-gray-800">Telegram:</p>
              <a
                href="https://t.me/Daravuthwatna"
                className="text-blue-600 hover:underline"
              >
                Daravuthwatna Phorn
              </a>
            </div>
            <div className="py-4">
              <p className="text-lg font-semibold text-gray-800">Email:</p>
              <a
                href="Daravuthwatna@gmail.com"
                className="text-blue-600 hover:underline"
              >
                Daravuthwatna@gmail.com
              </a>
            </div>
            <div className="py-4">
              <p className="text-lg font-semibold text-gray-800">Linkin:</p>
              <a
                href="https://www.linkedin.com/in/daravuthwatna-phorn-276723298/"
                className="text-blue-600 hover:underline"
              >
                Daravuthwatna Phorn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
