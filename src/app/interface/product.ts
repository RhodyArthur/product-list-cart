export interface Image {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
}

export interface Item {
    category: string;
    price: number;
}

export interface Product {
    addedToCart: boolean;
    image: Image;
    name: string;
    category: string;
    price: number;

}
