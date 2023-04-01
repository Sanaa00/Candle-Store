import React from "react";
import { Link } from "react-router-dom";
function LinkButton({ location, width, text }) {
  return (
    <Link
      to={`/${location}`}
      className={`bg-greeen w-${width} px-10 py-1 text-gray-100 text-center rounded-sm hover:bg-darkgreen hover:duration-500 duration-500 hover:shadow-lg `}
    >
      {text}
    </Link>
  );
}

export default LinkButton;
