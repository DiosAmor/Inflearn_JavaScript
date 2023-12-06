import React from "react";
import FormControl from "../../components/FormControl";
//import * as MyForm from "../../lib/MyForm";
import * as MyForm from "../../lib/MyForm-reducer";

const OrderForm = ({ onSubmit }) => {
  const validate = (values) => {
    const errors = {};

    if (!values.deliveryAddress) {
      errors.deliveryAddress = "주소를 입력하세요.";
    }
    if (!values.deliveryAddress) {
      errors.deliveryContact = "연락처를 입력하세요.";
    }
    if (!/^\d{2,3}-\d{3,4}-\d{4}$/.test(values.deliveryContact)) {
      errors.deliveryContact =
        "전화번호 형식으로 입력하세요. (예: 010-1234-5678)";
    }
    return errors;
  };

  return (
    <MyForm.Form
      className="OrderForm"
      id="order-form"
      initialValue={{
        deliveryAddress: "",
        deliveryContact: "",
        paymentMethod: "마이페이",
        messageToShop: "",
        messageToRider: "",
      }}
      validate={validate}
      onSubmit={onSubmit}
    >
      <FormControl
        label="주소"
        htmlFor={"deliveryAddress"}
        required
        error={<MyForm.ErrorMessage name="deliveryAddress" />}
      >
        <MyForm.Field
          type="text"
          name="deliveryAddress"
          id="deliveryAddress"
          placeholder="배달 받을 주소를 입력하세요"
          autoFocus
        />
      </FormControl>
      <FormControl
        label="연락처"
        htmlFor="deliveryContact"
        required
        error={<MyForm.ErrorMessage name="deliveryContact" />}
      >
        <MyForm.Field
          type="text"
          name="deliveryContact"
          placeholder="연락처를 입력하세요"
        />
      </FormControl>
      <FormControl label="결제수단" htmlFor={"paymentMethod"} required>
        <MyForm.Field as="select" name="paymentMethod">
          <option value="마이페이">마이페이</option>
          <option value="만나서 결제">만나서 결제</option>
        </MyForm.Field>
      </FormControl>
      <FormControl label="가게 사장님께" htmlFor={"messageToShop"}>
        <MyForm.Field
          as="textarea"
          name="messageToShop"
          placeholder="고운말로 부탁드려요."
        />
      </FormControl>
      <FormControl label="라이더님께" htmlFor={"messageToRider"}>
        <MyForm.Field
          as="textarea"
          name="messageToRider"
          placeholder="고운말로 부탁드려요."
        />
      </FormControl>
    </MyForm.Form>
  );
};

export default OrderForm;
