

const sizes = {
  s: "text-[25px] font-bold",
  md: "text-[42px] font-bold leading-[110%]",
  xs: "text-sm font-bold leading-[110%]",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
