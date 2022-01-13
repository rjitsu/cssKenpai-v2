import React from "react";
import Link from "next/dist/client/link";

const about = () => {
  return (
    <div>
      <button className="m-8 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-yellow-300  group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800">
        <span className="font-bold relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          <Link href="/">Go back</Link>
        </span>
      </button>
      <h1 className="font-bold text-4xl m-8">Hey there! I am Rishav Jadon</h1>
    </div>
  );
};

export default about;
