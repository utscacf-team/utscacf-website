import Section from "@/components/layout/Section";
import React from "react";
import { reader } from "@/app/_lib/reader";
import MDXContent from "@/components/shared/mdx/MDXContent";
import Church from "@/components/content/church/Church";
import ChurchContainer from "@/components/content/church/ChurchContainer";

const FindingChurch = async () => {
  const churchPage = await reader().singletons.church.read();

  return (
    <Section className="bg-beige text-black">
      {churchPage && (
        <MDXContent
          source={await churchPage.content()}
          components={{
            Church: Church,
            ChurchContainer: ChurchContainer,
          }}
        />
      )}
    </Section>
  );
};

export default FindingChurch;
