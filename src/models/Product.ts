import Category from './Category';
import User from './User';

export default interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  photo: string;
  category: Category | null;
  user: User | null;
}