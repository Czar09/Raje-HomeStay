import { stringify } from "querystring";

export default {
  name: 'room',
  title: 'Room',
  type: 'document',
  fields: [
    {
      name: "roomName",
      title: "Room Name",
      description: "Name Of the ROom",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "string",
    },
    {
        name:"description",
        title:"Description",
        type: "string"
    },
    {
        name:"image",
        title:"Image",
        type:"image"
    },
    {
        name: "roomTypeId",
        title:"RoomTypeId",
        type:"string"
    }
  ],
}
