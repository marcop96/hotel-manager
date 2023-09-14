import customerListData from "../../data/customerListData.json";
import { useState } from "react";
import AddCustomer from "./AddCustomer.js";
export default function ManageCustomers() {
  const [displayCustomers, setDisplayCustomers] = useState(false);
  const [customerList, setCustomerList] = useState(customerListData);
  const [addNewCustomer, setAddNewCustomer] = useState(false);
  function showCustomers() {
    setDisplayCustomers(!displayCustomers);
  }

  function addNewCustomerForm() {
    setAddNewCustomer(!addNewCustomer);
  }
  function deleteCustomer(id: number) {
    const updatedCustomerList = [...customerList];
    const indexToRemove = updatedCustomerList.findIndex(
      (customer) => customer.id === id
    );

    if (indexToRemove !== -1) {
      updatedCustomerList.splice(indexToRemove, 1);
      setCustomerList(updatedCustomerList);
    }
  }
  return (
    <div>
      <div>
        <button onClick={addNewCustomerForm}> Add new Customer</button>
        <button onClick={showCustomers}>View customers</button>
      </div>

      {addNewCustomer && <AddCustomer />}
      <ul>
        {displayCustomers &&
          customerList.map((customer) => (
            <li key={customer.id}>
              <span>
                {customer.id} - {customer.name}
              </span>
              <button onClick={() => deleteCustomer(customer.id)}>X</button>
            </li>
          ))}
      </ul>
      <button onClick={() => console.log(customerList)}>check</button>
    </div>
  );
}
