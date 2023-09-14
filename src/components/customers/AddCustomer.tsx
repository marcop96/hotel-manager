import customerList from "../../data/customerListData.json";
import { useRef } from "react";

export default function AddCustomer() {
  const customerNameRef = useRef(null);
  const customerNEmailRef = useRef(null);
  const customerPhoneRef = useRef(null);

  function submitHandler(e) {
    e.preventDefault();

    customerList.push({
      id: Math.random(),
      name: customerNameRef.current.value,
      email: customerNEmailRef.current.value,
      phone: customerPhoneRef.current.value,
    });
  }
  return (
    <form onSubmit={submitHandler}>
      <label>Name</label>
      <input ref={customerNameRef}></input>
      <br />
      <label>Email</label>
      <input ref={customerNEmailRef}></input>
      <br />
      <label>Phone</label>
      <input ref={customerPhoneRef}></input>
      <button>submit</button>
    </form>
  );
}
