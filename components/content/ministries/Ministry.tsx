import React from "react";
import Image from "@/components/shared/ui/Image";
import { MinistryType } from "@/types";

const Ministry = async ({ name, image, description }: MinistryType) => {
  return (
    <div className="flex flex-col gap-6 rounded-2xl">
      <Image
        src={image || "/ministry.png"}
        alt={`Image of ${name}`}
        className="aspect-[4/3] w-full md:aspect-[16/9]"
      />
      <div>
        <p className="text-2xl font-bold">{name}</p>
        {description}
      </div>
    </div>
  );
};

export default Ministry;
