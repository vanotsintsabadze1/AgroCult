interface Blog {
  title: string;
  body: string;
  tags: string[];
  id: number;
}

interface ShopItem {
  images: string[];
  title: string;
  description: string;
  price: number;
  id: number;
}

interface CartItem extends ShopItem {
  quantity: number;
}

interface CartItemDB {
  id: number;
  quantity: number;
}

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}
