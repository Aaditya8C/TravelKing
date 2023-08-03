import classNames from "classnames";
import React from "react";

const HeaderOneLink = ({ children, isFromFooter }) => {
  return (
    <div
      className={classNames(
        "hover:cursor-pointer hover:text-orange-400 transition-all duration-200",
        isFromFooter ? "hover:text-white" : "hover:text-orange-400"
      )}
    >
      {children}
    </div>
  );
};

export default HeaderOneLink;
