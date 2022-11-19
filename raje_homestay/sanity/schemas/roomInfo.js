import { stringify } from "querystring";

export default {
  name: 'roomInfo',
  title: 'roomInfo',
  type: 'document',
  fields: [
    {
      name:"roomId",
      title:"RoomId",
      type:"string",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name:"price",
      title: "Price",
      type: "string",
    },
    {
      name: "heroImage",
      title: "Image",
      type: "image",
      options: {
        hotspot:true,
      },
    },
    {
      name: "heroImage2",
      title: "Image",
      type: "image",
      options: {
        hotspot:true,
      },
    },
    {
      name: "heroImage3",
      title: "Image",
      type: "image",
      options: {
        hotspot:true,
      },
    },
    {
      name: "heroImage4",
      title: "Image",
      type: "image",
      options: {
        hotspot:true,
      },
    },
    {
      name: "heroImage5",
      title: "Image",
      type: "image",
      options: {
        hotspot:true,
      },
    },
    {
      name:"backgroundInfo",
      title:"BackgroundInformation",
      type:"string",
    },
  ],
}
