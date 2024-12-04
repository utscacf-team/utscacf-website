import React from "react";

type variantType = "h1" | "h2" | "p";

interface TextProps {
  className?: string;
  children: React.ReactNode;
  variant: variantType;
}

interface SubTextProps {
  className?: string;
  children: React.ReactNode;
}

const H1 = ({ className, children }: SubTextProps) => {
  return (
    <h1
      className={`pb-5 text-3xl md:pb-8 md:text-5xl lg:pb-10 lg:text-6xl ${className}`}
    >
      {children}
    </h1>
  );
};

const H2 = ({ className, children }: SubTextProps) => {
  return (
    <h2
      className={`pb-3 text-2xl md:pb-6 md:text-3xl lg:pb-8 lg:text-4xl ${className}`}
    >
      {children}
    </h2>
  );
};

const P = ({ className, children }: SubTextProps) => {
  return <div className={`md:text-xl ${className}`}>{children}</div>;
};

const Text = ({ variant, className, children }: TextProps) => {
  switch (variant) {
    case "h1":
      return <H1 className={className}>{children}</H1>;
    case "h2":
      return <H2 className={className}>{children}</H2>;
    case "p":
      return <P className={className}>{children}</P>;
  }
};

export default Text;
