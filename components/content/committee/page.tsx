import React from "react";
import Section from "@/components/layout/Section";
import { reader } from "@/app/_lib/reader";

import Committee from "./_components/Committee";
import CommitteeGrid from "./_components/CommitteeGrid";
import MDXContent from "@/components/shared/mdx/MDXContent";

import { text } from "@/app/_lib/textComponents";

const CommitteePage = async () => {
  const committeePage = await reader().singletons.committee.read();

  return (
    <Section className="">
      {committeePage && (
        <MDXContent
          source={await committeePage.content()}
          components={{
            Committee: Committee,
            CommitteeGrid: CommitteeGrid,
            ...text,
          }}
        />
      )}
    </Section>
  );
};

export default CommitteePage;
