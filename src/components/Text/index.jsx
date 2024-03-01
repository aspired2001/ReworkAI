import React from "react";

const sizes = {
  xs: "text-sm font-normal",
  s: "text-base font-normal",
  md: "text-2xl font-medium",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-900 font-manrope ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
