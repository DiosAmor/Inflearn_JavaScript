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
import { ProductsSaleslocationsService } from '../productsSaleslocations/productsSaleslocations.service';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>, //
    private readonly productsSaleslocationsService: ProductsSaleslocationsService,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productsRepository.find({
      relations: ['productSaleslocation', 'productCategory'],
    });
  }

  findOne({ productId }: IProductsServiceFindOne): Promise<Product> {
    return this.productsRepository.findOne({
      where: { id: productId },
      relations: ['productSaleslocation'],
    });
  }

  async create({
    createProductInput,
  }: IProductsServiceCreate): Promise<Product> {
    // 1. 상품 하나만 등록할 때 사용하는 방법
    // const result = this.productsRepository.save({
    //   ...createProductInput,
    // });

    // 2. 상품과 상품거래위치를 같이 등록하는 방법
    const { productSaleslocation, productCategoryId, ...product } =
      createProductInput;

    const result = await this.productsSaleslocationsService.create({
      ...productSaleslocation,
    });
    // 서비스를 타고 가야 하는 이유는...?
    // 레퍼지토리에 직접 접근하면 검증 로직을 통일 시킬 수 없음!

    const result2 = this.productsRepository.save({
      ...product,
      productSaleslocation: result,
      productCategory: {
        id: productCategoryId,
      },
    });

    return result2;
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

  async delete({ productId }: IProductsServiceDelete): Promise<boolean> {
    // 1. 실제 삭제
    //const result = await this.productsRepository.delete({ id: productId });

    // 2. 소프트 삭제 - isDeleted
    // this.productsRepository.update({id:productId},{isDeleted: true});

    // 3. 소프트 삭제 - deletedAt
    // this.productsRepository.update({id:productId},{deletedAt: new Date()});

    // 4. 소프트 삭제 - typeorm 제공 - softRemove
    // this.productsRepository.softRemove({id:productId});
    // 장점: 여러 id 한 번에 지우기 가능 ex) .softRemove([{id:qq},{id:aa}])
    // 단점: id로만 삭제 가능

    // 5. 소프트 삭제 - typeorm 제공 - softDelete
    const result = await this.productsRepository.softDelete({ id: productId });
    // 장점: 다른 컬럼으로 삭제 가능
    // 단점: 여러 ID 한 번에 지우기 불가능

    return result.affected ? true : false;
  }

  checkSoldout({ product }: IProductsServiceCheckSoldout): void {
    if (product.isSoldout) {
      throw new UnprocessableEntityException('이미 판매 완료된 상품입니다.');
    }
  }
}

interface IProductsServiceDelete {
  productId: string;
}
