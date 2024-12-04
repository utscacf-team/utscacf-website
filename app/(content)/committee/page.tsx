import React from "react";
import Section from "@/components/layout/Section";
import { reader } from "@/app/_lib/reader";

import Committee from "@/components/content/committee/Committee";
import CommitteeContainer from "@/components/content/committee/CommitteeContainer";
import MDXContent from "@/components/shared/mdx/MDXContent";

const CommitteePage = async () => {
  const committeePage = await reader().singletons.committee.read();

  return (
    <Section className="">
      {committeePage && (
        <MDXContent
          source={await committeePage.content()}
          components={{
            Committee: Committee,
            CommitteeGrid: CommitteeContainer,
          }}
        />
      )}
    </Section>
  );
};

export default CommitteePage;
