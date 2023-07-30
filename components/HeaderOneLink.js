import React from "react";

const HeaderOneLink = ({ children }) => {
  return (
    <div className="hover:cursor-pointer hover:text-orange-400 transition-all duration-200">
      {children}
    </div>
  );
};

export default HeaderOneLink;
