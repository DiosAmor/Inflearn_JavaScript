import { CashService } from "./services/cash-service.js";

export class CouponController {
  cashService;

  constructor(cashService) {
    this.cashService = cashService;
  }

  buyCoupon = (req, res) => {
    // 1. 가진돈 검증하는 코드
    // const cashService = new CashService(); // tight-coupling
    const hasMoney = this.cashService.checkValue(); // loose-coupling

    // 2. 상품권 구매하는 코드
    if (hasMoney) {
      res.send("상품권 구매 완료!!");
    }
  };
}
