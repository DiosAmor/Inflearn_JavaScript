import { CreateProductInput } from '../dto/create-product.input';

export interface IProductsServiceFindOne {
  productId: string;
}

export interface IProductsServiceCreate {
  createProductInput: CreateProductInput;
}
