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
    name: fields.text({ label: "Name", validation: { isRequired: true } }),
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

export const churchSchema = block({
  label: "Church",
  schema: {
    name: fields.text({
      label: "Name",
      description: "Name of the church",
      validation: { isRequired: true },
    }),
    image: fields.image({
      label: "Image (optional)",
      directory: "public/images/church",
      publicPath: "/images/church",
    }),
    ministries: fields.array(
      fields.object({
        name: fields.text({
          label: "Name",
          description: "Name of the service",
          validation: { isRequired: true },
        }),
        time: fields.text({
          label: "Time",
          description: "Time of the service",
          validation: { isRequired: true },
        }),
      }),
      {
        label: "Ministries",
        itemLabel: (props) => props.fields.name.value,
      },
    ),
    location: fields.text({
      label: "Location",
      validation: { isRequired: true },
    }),
    description: fields.text({
      label: "Description (optional)",
      description: "Short Description of the church",
      multiline: true,
    }),
  },
});

export default config({
  storage: {
    kind: "local",
    repo: {
      owner: "utscacf-team",
      name: "utscacf-website",
    },
  },
  ui: {
    brand: { name: "UTSC ACF" },
    navigation: ["vision", "committee", "ministry", "church", "content"],
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
            CommitteeContainer: repeating({
              label: "Committee Container",
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
            MinistryContainer: repeating({
              label: "Ministry Container",
              children: ["Ministry"],
              schema: {},
            }),
            Ministry: ministrySchema,
          },
        }),
      },
    }),

    church: singleton({
      path: "content/church",
      label: "Church Page",
      schema: {
        content: fields.mdx({
          label: "Content",
          components: {
            ChurchContainer: repeating({
              label: "Church Container",
              children: ["Church"],
              schema: {},
            }),
            Church: churchSchema,
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
