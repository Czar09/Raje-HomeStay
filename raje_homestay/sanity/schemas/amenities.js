import { stringify } from "querystring";

export default {
  name: 'amenities',
  title: 'amenities',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of Amenity",
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
