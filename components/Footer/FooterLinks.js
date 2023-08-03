import classNames from "classnames";
import React from "react";

const FooterLinks = ({ children, box }) => {
  return (
    <div
      className={classNames(
        "hover:cursor-pointer p-2 border border-orange-400 hover:bg-orange-400 transition-all duration-200",
        box ? 'border-2' : "rounded-full self-center"
      )}
    >
      {children}
    </div>
  );
};

export default FooterLinks;
