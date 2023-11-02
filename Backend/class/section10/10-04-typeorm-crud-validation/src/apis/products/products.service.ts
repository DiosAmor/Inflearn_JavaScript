import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import {
  IProductsServiceCheckSoldout,
  IProductsServiceCreate,
  IProductsServiceFindOne,
  IProductsServiceUpdate,
} from './interfaces/products-service.interface';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>, //
  ) {}

  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  findOne({ productId }: IProductsServiceFindOne): Promise<Product> {
    return this.productsRepository.findOne({ where: { id: productId } });
  }

  create({ createProductInput }: IProductsServiceCreate): Promise<Product> {
    const result = this.productsRepository.save({
      ...createProductInput,
    });

    // result 안에는 무엇이 있을까?
    // result = {
    //     id:~~
    //     name:~~
    //     description: ~~
    //     price: ~~,
    // }
    return result;
    // nest는 알아서 await 해줌.
  }

  async update({
    productId,
    updateProductInput,
  }: IProductsServiceUpdate): Promise<Product> {
    // this.productsRepository.create() => DB 접속이라 관계 X, 등록을 위해서 빈 껍데기
    // this.productsRepository.insert() => 결과를 객체로 못 돌려 받는 등록 방법
    // this.productsRepository.update() => 결과를 객체로 못 돌려 받는 수정 방법

    // 수정 후, 수정되지 않은 다른 결과값까지 모두 객체로 돌려받고 싶을 때
    const product = await this.findOne({ productId });
    this.checkSoldout({ product });
    const result = this.productsRepository.save({
      ...product, // 수정 후, 수정되지 않은 다른 결과값까지 모두 객체로 돌려받고 싶을 때
      ...updateProductInput,
    });
    return result;
  }

  checkSoldout({ product }: IProductsServiceCheckSoldout): void {
    if (product.isSoldout) {
      throw new UnprocessableEntityException('이미 판매 완료된 상품입니다.');
    }
  }
}
