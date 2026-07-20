import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-[transform,box-shadow,background-color,border-color,filter,color] duration-200 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "rounded-lg text-primary-foreground bg-gradient-to-b from-[#e2503f] to-[#c33223] shadow-[0_10px_26px_rgba(217,58,43,0.32),inset_0_1px_0_rgba(255,255,255,0.22)] hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_16px_36px_rgba(217,58,43,0.42),inset_0_1px_0_rgba(255,255,255,0.22)] active:translate-y-0 active:shadow-[0_6px_16px_rgba(217,58,43,0.3)]",
        outline:
          "rounded-lg border border-border bg-background text-foreground shadow-soft hover:-translate-y-0.5 hover:border-foreground/25 active:translate-y-0",
        ghost: "rounded-lg hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 text-sm",
        sm: "h-9 px-4 text-sm",
        lg: "h-12 px-7 text-[15px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
