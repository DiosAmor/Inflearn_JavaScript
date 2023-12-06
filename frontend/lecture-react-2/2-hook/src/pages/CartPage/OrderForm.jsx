import React from "react";
import FormControl from "../../components/FormControl";

const OrderForm = ({ onSubmit }) => {
  const getInputValueByName = (name) => {
    // todo
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const deliveryAddress = getInputValueByName("deliveryAddress");
    const deliveryContact = getInputValueByName("deliveryContact");
    const paymentMethod = getInputValueByName("paymentMethod");
    const messageToShop = getInputValueByName("messageToShop");
    const messageToRider = getInputValueByName("messageToRider");

    onSubmit({
      deliveryAddress,
      deliveryContact,
      paymentMethod,
      messageToShop,
      messageToRider,
    });
  };

  return (
    <form
      className="OrderForm"
      id="order-form"
      // ref={this.formRef}
      onSubmit={handleSubmit}
    >
      <FormControl label="주소" htmlFor={"deliveryAddress"} required>
        <input
          type="text"
          name="deliveryAddress"
          id="deliveryAddress"
          placeholder="배달 받을 주소를 입력하세요"
          required
          autoFocus
        />
      </FormControl>
      <FormControl label="연락처" htmlFor={"deliveryContact"} required>
        <input
          type="text"
          name="deliveryContact"
          id="deliveryContact"
          placeholder="연락처를 입력하세요"
          required
          pattern="^\d{2,3}-\d{3,4}-\d{4}$"
        />
      </FormControl>
      <FormControl label="결제수단" htmlFor={"paymentMethod"} required>
        <select name="paymentMethod" id="paymentMethod">
          <option value="마이페이">마이페이</option>
          <option value="만나서 결제">만나서 결제</option>
        </select>
      </FormControl>
      <FormControl label="가게 사장님께" htmlFor={"messageToShop"}>
        <textarea
          type="textarea"
          name="messageToShop"
          id="messageToShop"
          placeholder="고운말로 부탁드려요."
        />
      </FormControl>
      <FormControl label="라이더님께" htmlFor={"messageToRider"}>
        <textarea
          type="textarea"
          name="messageToRider"
          id="messageToRider"
          placeholder="고운말로 부탁드려요."
        />
      </FormControl>
    </form>
  );
};

export default OrderForm;
