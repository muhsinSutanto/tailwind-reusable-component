import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariant> {
  children: ReactNode;
}

const Button = ({
  variant,
  children,
  className,
  size,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={twMerge(clsx(buttonVariant({ variant, size, className })))}
      {...props}
    >
      {children}
    </button>
  );
};

const buttonVariant = cva("rounded-md", {
  variants: {
    variant: {
      primary: " border border-black bg-white text-black",
      secondary: "border border-white bg-black text-white hover:bg-neutral-800",
      danger: "border-none  bg-red-500 text-white hover:bg-red-600",
    },
    size: {
      sm: "text-sm px-1 py-0",
      md: "text-base px-3 py-0",
      lg: "text-xl px-1 py-0",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export default Button;
