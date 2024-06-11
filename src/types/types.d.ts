interface ShopItem {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  brand: string;
  extra_details: {
    [key: string]: string;
  };
  category: string[];
  discount: number;
  amount: number;
}

interface CartItem {
  product_id: number;
  title: string;
  description: string;
  price: number;
  discount: number;
  images: string[];
  quantity: number;
}

interface CartItemDB {
  id: number;
  quantity: number;
}

interface User {
  user_id: string;
  name: string;
  email: string;
  image: string;
  role: string[];
}

interface UserDB {
  user_id: string;
  name: string;
  email: string;
  image?: string;
  role: string;
  created_at?: Date;
}

interface Logs {
  id: number;
  performer_name: string;
  performer_id: string;
  type: string;
  description: string;
  performed_at: Date;
}
