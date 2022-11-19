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

export interface RoomInfo extends sanityBody{
    _type: "roomInfo";
    roomId: string;
    name: string;
    price: string;
    heroImage: string;
    heroImage2: string;
    heroImage3: string;
    heroImage4: string;
    heroImage5: string;
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

