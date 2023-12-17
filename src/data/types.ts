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
    title: string,
    price: number,
    quantity: number;
    img: string;
}

export interface User {
    id: number, 
    name: string,
    phone: string,
    address: Address,
}

export interface Order {
    id: number,
    user: User,
    items: CartItem[],
    address: Address,
    phone: string,
    comment: string,
    payMethod: string,
    delieveryPrice: number
    date: Date,
}

export interface Address {
    city: string,
    house_number: string,
    road: string,
    building: string,
    entrance: string,
    floor: string,
    flat: string,
    comment: string,
}



