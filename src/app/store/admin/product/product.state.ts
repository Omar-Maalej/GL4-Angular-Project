import { Product } from '../../../models/product';

export interface AdminProductState {
  products: Product[];
  error: string;
}

export const initialState: AdminProductState = {
  products: [],
  error: '',
};
