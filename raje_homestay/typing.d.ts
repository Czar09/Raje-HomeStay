interface sanityBody{
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image{
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface GalleryImage extends sanityBody{
    _type: "galleryImage";
    title: string;
    image: Image;
}

export interface BannerImage extends sanityBody{
    _type: "bannerImage";
    title: string;
    image: Image;
}

export interface Amenities extends sanityBody{
    _type: "amenities";
    title: string;
    image: Image;
}

export interface Room extends sanityBody{
    _type: "room";
    roomName: string;
    price: string;
    description:string;
    image: Image;
    roomTypeId: string;
    maxGuests: string;
    imageSmallFirst:Image;
    imageSmallSecond:Image;
    imageSmallThird:Image;
    imageSmallFourth:Image;
    offerPrice:string;
}
export interface Social extends sanityBody{
    _type: "social";
    title: string;
    url: string;
}

