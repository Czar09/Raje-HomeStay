import { stringify } from "querystring";

export default {
  name: 'bannerImage',
  title: 'bannerImage',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of the Banner",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
}
