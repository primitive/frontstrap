import React from "react";
import Link from "@frontity/components/link";

const Frame = ({ link, className, children }) => {

  if (!link) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  return (
    <div className={className}>
      <Link link={link}>
        {children}
      </Link>
    </div>
  );

};

export default Frame;