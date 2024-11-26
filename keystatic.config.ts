import { collection, config, fields, singleton } from "@keystatic/core";

import { block, repeating } from "@keystatic/core/content-components";

export const committeeSchema = block({
  label: "Committee",
  schema: {
    name: fields.text({ label: "Name" }),
    image: fields.image({
      label: "Image (optional)",
      directory: "public/images/committee",
      publicPath: "/images/committee",
    }),
    roles: fields.array(
      fields.select({
        label: "Role",
        options: [
          { label: "Chair", value: "Chair" },
          { label: "Vice-Chair", value: "Vice-Chair" },
          {
            label: "Small Group Coordinator",
            value: "Small Group Coordinator",
          },
          { label: "Treasurer", value: "Treasurer" },
          {
            label: "Worship Coordinator",
            value: "Worship Coordinator",
          },
          {
            label: "Social Coordinator",
            value: "Social Coordinator",
          },
          {
            label: "AFC Advisor",
            value: "AFC Advisor",
          },
        ],
        defaultValue: "Chair",
      }),
      {
        label: "Roles",
        description: "Roles for this committee member",
        validation: { length: { min: 1 } },
        itemLabel: (props) => props.value,
      },
    ),
    handles: fields.array(
      fields.object({
        provider: fields.select({
          label: "Provider",
          options: [
            { label: "Facebook", value: "facebook" },
            { label: "Instagram", value: "instagram" },
            { label: "Discord", value: "discord" },
            { label: "Email", value: "email" },
          ],
          defaultValue: "email",
        }),
        href: fields.url({
          label: "Link",
          description: "Link to the account",
          validation: {
            isRequired: true,
          },
        }),
      }),
      {
        label: "Handles",
        description: "Social media handles or email",
        itemLabel: (props) => props.fields.href.value || "Item",
      },
    ),
  },
});

export const ministrySchema = block({
  label: "Ministry",
  schema: {
    name: fields.text({ label: "Name" }),
    image: fields.image({
      label: "Image (optional)",
      directory: "public/images/ministry",
      publicPath: "/images/ministry",
    }),
    description: fields.text({
      label: "Description",
      description:
        "Detailed description of the ministry (Who, What, Where, When, How, etc...)",
      multiline: true,
    }),
  },
});

export default config({
  storage: {
    kind: "github",
    repo: {
      owner: "utscacf-team",
      name: "utscacf-website",
    },
  },
  ui: {
    brand: { name: "UTSC ACF" },
    navigation: ["vision", "committee", "ministry", "content"],
  },

  singletons: {
    // @see VisionType
    vision: singleton({
      path: "content/vision/",
      label: "Vision",
      entryLayout: "content",
      format: {
        contentField: "vision",
      },
      schema: {
        vision: fields.mdx({
          label: "Vision",
          description: "Vision of the Year",
        }),
        year: fields.text({
          label: "Year",
          description: "In the format 20XX-20YY",
        }),
      },
    }),

    committee: singleton({
      path: "content/committee",
      label: "Committee Page",
      schema: {
        content: fields.mdx({
          label: "Content",
          components: {
            CommitteeGrid: repeating({
              label: "CommitteeGrid",
              children: ["Committee"],
              schema: {},
            }),
            Committee: committeeSchema,
          },
        }),
      },
    }),

    ministry: singleton({
      path: "content/ministry",
      label: "Ministry Page",
      schema: {
        content: fields.mdx({
          label: "Content",
          components: {
            MinistryGrid: repeating({
              label: "MinistryGrid",
              children: ["Ministry"],
              schema: {},
            }),
            Ministry: ministrySchema,
          },
        }),
      },
    }),
  },

  collections: {
    content: collection({
      path: "content/content/*",
      label: "Content",
      slugField: "name",
      schema: {
        name: fields.slug({ name: { label: "Name" } }),
        title: fields.text({ label: "Title" }),
        content: fields.mdx({
          label: "Content",
          description: "Content of the page",
        }),
      },
    }),
  },
});
