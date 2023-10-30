// const express = require('express')   // 옛날 방식 => commonjs
import express from "express"; // 요즘 방식 => module
import { ProductController } from "./mvc/controllers/product-controller.js";
import { CouponController } from "./mvc/controllers/coupon-controller.js";
import { CashService } from "./mvc/controllers/services/cash-service.js";
import { PointService } from "./mvc/controllers/services/point-service.js";
import { ProductService } from "./mvc/controllers/services/product-service.js";

const app = express();

// 의존성 주입 형태 (DI: Dependency Injection)
// 1. new 한 번으로 메모리 관리가 좋아짐 (singleton pattern)
// 다만, 의존성 주입이라고 해서 무조건 singleton은 아님. 두 개씩 하는 경우도 있음.
// 2. 한꺼번에 변경하는 식으로 코드 관리하기 좋아짐.
// 3. loose-coupling 형태로 변경
// 4. Inversion-Of-Control (IOC)

const cashService = new CashService();
const cashService2 = new CashService(); // -> 싱글톤 아님.
const productService = new ProductService();
const pointService = new PointService();

// 상품 API
const productController = new ProductController(cashService, productService);
// 상품 구매하기 API
app.post("/products/buy", productController.buyProduct);
// 상품 환불하기 API
app.post("/products/refund", productController.refundProduct);

// 쿠폰(상품권) API
const couponController = new CouponController(pointService);
app.post("/coupons/buy", couponController.buyCoupon);

// 게시판 API

app.listen(3000);
