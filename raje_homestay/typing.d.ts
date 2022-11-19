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

export interface RoomInformation extends sanityBody{
    _type: "roomInfo";
    roomId: string;
    name: string;
    price: string;
    heroImage: Image;
    heroImage2: Image;
    heroImage3: Image;
    heroImage4: Image;
    heroImage5: Image;
    backgroundInfo: string;
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

export interface Social extends sanityBody{
    _type: "social";
    title: string;
    url: string;
}

