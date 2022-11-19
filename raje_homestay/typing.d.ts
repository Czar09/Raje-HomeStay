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
    backgroundInfo: string | null;
    heroImage: Image | null;
    name: string | null;
    price: string | null;
    roomId: string | null;
    
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

