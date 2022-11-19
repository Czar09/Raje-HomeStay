import { stringify } from "querystring";

export default {
  name: 'roomInfo',
  title: 'RoomInfo',
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
      name:"backgroundInfo",
      title:"BackgroundInformation",
      type:"string",
    },
  ],
}
