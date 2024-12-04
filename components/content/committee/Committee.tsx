import React from "react";
import Image from "@/components/shared/ui/Image";
import { CommitteeType } from "@/types";
import SocialIcon from "@/components/shared/buttons/SocialIcon";

const Committee = ({ name, roles, handles, image }: CommitteeType) => {
  return (
    <div className="flex flex-col pt-6">
      {/* Image */}
      <Image
        src={image || "/committee.jpg"}
        alt={`image of ${name}`}
        className="aspect-[1/1] w-full"
      />
      {/* Name */}
      <p className="pt-6 text-xl">{name}</p>
      {/* Roles */}
      <div className="flex flex-row gap-2">
        {roles.map((elm, i) => (
          <p key={i} className="text-sm text-slate-600">
            {elm}
          </p>
        ))}
        {/* Handles */}
      </div>
      <div className="flex flex-row gap-4 pt-3">
        {handles.map((elm, i) => (
          <SocialIcon
            className="hover:bg-black hover:text-beige"
            key={i}
            provider={elm.provider}
            href={elm.href}
            variant="ghost"
          />
        ))}
      </div>
    </div>
  );
};

export default Committee;
