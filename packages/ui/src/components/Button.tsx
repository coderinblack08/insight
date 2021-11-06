import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
} from "react";

const variants = {
  size: {
    sm: "py-1.5 px-4 rounded-lg text-sm",
    md: "py-2 px-6 rounded-lg text-base",
    lg: "py-2.5 px-8 rounded-lg text-base",
  },
  color: {
    primary: "bg-purple-500 hover:bg-purple-600 text-white",
    secondary: "bg-gray-800 text-white",
  },
};

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  size?: keyof typeof variants["size"];
  color?: keyof typeof variants["color"];
  loading?: boolean;
  ref?: any;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = "md",
      color = "primary",
      disabled,
      loading,
      children,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={`flex items-center justify-center font-bold select-none focus:outline-none ${
          (disabled || loading) && "opacity-50 cursor-not-allowed"
        } ${variants.size[size]} ${variants.color[color]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
