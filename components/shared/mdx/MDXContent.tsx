import React from "react";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import Text from "@/components/shared/ui/Text";

interface prop {
  children?: React.ReactNode;
}

export const text = {
  h1: ({ children }: prop) => (
    <Text variant="h1" className="font-bold">
      {children}
    </Text>
  ),
  p: ({ children }: prop) => <Text variant="p">{children}</Text>,
};

const MDXContent = async ({
  source,
  components,
}: {
  source: string;
  components?: any;
}) => {
  const { default: Component } = await evaluate(source, runtime);

  return (
    <>
      {components ? (
        <Component components={{ ...text, ...components }} />
      ) : (
        <Component components={text} />
      )}
    </>
  );
};

export default MDXContent;
