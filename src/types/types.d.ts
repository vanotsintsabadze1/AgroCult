export interface Blog {
  title: string;
  body: string;
  tags: string[];
  id: number;
}

export interface ShopItem {
  images: string[];
  title: string;
  description: string;
  price: number;
  id: number;
}

export interface CartItem extends ShopItem {
  quantity: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}
