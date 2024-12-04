import React from "react";
import { ChurchType } from "@/types";
import Text from "@/components/shared/ui/Text";
import Image from "@/components/shared/ui/Image";

const Church = ({
  name,
  image,
  ministries,
  location,
  description,
}: ChurchType) => {
  return (
    <div className="flex flex-col gap-2">
      <Text variant="h2" className="font-bold">
        {name}
      </Text>
      <Image
        src={image || "/default.png"}
        alt={name}
        className="h-32 w-full object-cover sm:h-56 md:h-72 lg:h-96"
      />
      <p className="text-sm text-slate-600">{description}</p>
      <Text variant="p">{location}</Text>
      <div className="flex flex-row flex-wrap justify-between">
        {ministries.map((ministry) => (
          <Text key={ministry.name} variant="p" className="text-slate-600">
            {ministry.name}: {ministry.time}
          </Text>
        ))}
      </div>
    </div>
  );
};

export default Church;
