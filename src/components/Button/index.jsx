
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[10px]",
};
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-gray-600",
    deep_purple_600: "bg-deep_purple-600 text-white-A700",
  },
  outline: {
    deep_purple_600: "border-deep_purple-600 border border-solid text-deep_purple-600",
  },
};
const sizes = {
  sm: "h-[47px] px-[9px] text-xl",
  xs: "h-[23px] pl-2.5 pr-[22px] text-xs",
  md: "h-[50px] px-[35px] text-base",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  variant = "fill",
  size = "md",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["sm", "xs", "md"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["white_A700", "deep_purple_600"]),
};

export { Button };
