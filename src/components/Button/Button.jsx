/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef } from "react";
import {cls} from "../../utils/helpers";

const classes = {
  base: "focus:outline-none transition ease-in-out duration-300",
  disabled: "opacity-50 cursor-not-allowed",
  pill: "rounded-full",
  size: {
    small: "px-2 py-1 text-sm",
    normal: "px-5 py-1.5",
    large: "px-8 py-3 text-lg",
  },
  variant: {
    primary:
      "bg-primary hover:bg-[#e15600] focus:ring-2 focus:ring-primary focus:ring-opacity-50 text-secondary rounded-medium",
    secondary:
      "bg-gray-200 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-gray-900 hover:text-white rounded-medium",
    neutral:
      "bg-secondary hover:opacity-70 text-tertiary border-none",
    outlined:
        "border border-tertiary bg-transparent focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-tertiary hover:opacity-70 rounded-medium",
  },
};

const Button = forwardRef(
  (
    {
      children,
      type = "button",
      className,
      variant = "primary",
      size = "normal",
      pill,
      disabled = false,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      disabled={disabled}
      type={type}
      className={cls(`
                ${classes.base}
                ${classes.size[size]}
                ${classes.variant[variant]}
                ${pill && classes.pill}
                ${disabled && classes.disabled}
                ${className}
            `)}
      {...props}
    >
      {children}
    </button>
  )
);

export default Button;
