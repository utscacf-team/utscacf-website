import Section from "@/components/layout/Section";
import Text from "@/components/shared/ui/Text";
import { reader } from "@/app/_lib/reader";

import Content from "@/components/shared/ui/Content";
import MDXContent from "@/components/shared/mdx/MDXContent";
import Ministry from "@/components/content/ministries/Ministry";
import MinistryGrid from "@/components/content/ministries/MinistryGrid";

export default async function Home() {
  const vision = await reader().singletons.vision.read();
  const ministryPage = await reader().singletons.ministry.read();

  return (
    // Vision Statement
    <div>
      <Section>
        {vision && <MDXContent source={await vision.vision()} />}
        <Text variant="p" className="self-end italic">
          - ACF Vision {vision && vision.year}
        </Text>
      </Section>

      <Section className="bg-black text-white">
        <Content slug="about" />

        <div className="pt-10">
          {ministryPage && (
            <MDXContent
              source={await ministryPage.content()}
              components={{
                Ministry: Ministry,
                MinistryGrid: MinistryGrid,
              }}
            />
          )}
        </div>
      </Section>
    </div>
  );
}
