import React from "react";
import NextImage from "next/image";

const Image = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) => {
  return (
    <div className={`relative ${className}`}>
      <NextImage
        src={`${src}`}
        alt={alt}
        fill={true}
        priority={true}
        className="rounded-2xl object-cover"
      />
    </div>
  );
};

export default Image;
