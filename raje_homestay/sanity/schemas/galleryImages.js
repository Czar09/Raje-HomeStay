import { stringify } from "querystring";

export default {
  name: 'galleryImage',
  title: 'galleyImage',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of the Gallery Image",
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
