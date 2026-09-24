export interface ProductData {
    imgSrc: string;
    name: string;
    description: string;
    price: string;
}

export interface Message {
    id: string;
    text: string;
    sender: "user" | "bot";
    timestamp: number;
}