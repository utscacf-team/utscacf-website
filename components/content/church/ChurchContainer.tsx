import React from "react";

const ChurchContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-10 flex w-full max-w-[1200px] flex-col gap-10">
      {children}
    </div>
  );
};

export default ChurchContainer;
