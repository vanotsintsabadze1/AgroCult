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
  buyable: string;
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
  extra_details: {
    country: string;
    city: string;
    address: string;
    postal_code: string;
  };
}

interface Logs {
  id: number;
  performer_name: string;
  performer_id: string;
  type: string;
  description: string;
  performed_at: Date;
}

interface ContactForm {
  username: string;
  email: string;
  description: string;
  topic: string;
}

interface Blog {
  id: number;
  wid: string;
  wname: string;
  title: string;
  description: string;
  tags: string[];
  created_at: Date;
  thumbnail: string;
}
