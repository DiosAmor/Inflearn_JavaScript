import { InputType, PartialType } from '@nestjs/graphql';
import { CreateProductInput } from './create-product.input';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  // 아래 내용을 상속 받음
  // name?:string
  // description?: string;
  // price?: number;
}
