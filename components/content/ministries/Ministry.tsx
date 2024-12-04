import React from "react";
import Image from "@/components/shared/ui/Image";
import { MinistryType } from "@/types";

const Ministry = async ({ name, image, description }: MinistryType) => {
  return (
    <div className="flex max-w-[1600px] flex-col gap-6 rounded-2xl">
      <Image
        src={image || "/ministry.png"}
        alt={`Image of ${name}`}
        className="h-[300px] w-[100%] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[800px]"
      />
      <div>
        <p className="text-2xl font-bold">{name}</p>
        {description}
      </div>
    </div>
  );
};

export default Ministry;
