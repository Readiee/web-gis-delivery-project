export interface Dish {
    id: number,
    categoryId: number,
    title: string,
    price: number,
    img: string,
}

export interface Category {
    id: number,
    title: string,
    icon: string,
}

export interface CartItem {
    id: number, 
    title: string;
    price: number;
    quantity: number;
    img: string;
}

export interface User {
    id: number, 
    name: string;
    phone: string;
    address: string;
}

export interface Order {
    user: User,
    items: CartItem[],
    address: string;
    phone: string;
    comment: string,
    payMethod: string
}

