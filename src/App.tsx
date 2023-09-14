import { useState } from "react";
import Form from "./components/Form.tsx";
import WelcomeOptions from "./components/WelcomeOptions.tsx";
import ManageCustomers from "./components/customers/ManageCustomers.tsx";
const App = () => {
  const MANAGE_CUSTOMERS = "Manage Customers";
  const MANAGE_ROOMS = "Manage Rooms";
  const [isloggedin, setIsLoggedIn] = useState(true);
  const [selectedWelcomeOption, setSelectedWelcomeOption] = useState(null);
  const loginHandler = (username: string, password: string) => {
    if (username === "admin" && password === "admin") {
      setIsLoggedIn(true);
    } else {
      console.log("invalid details");
    }
  };

  const welcomeOptionsHandler = (option) => {
    setSelectedWelcomeOption(option);
  };
  return (
    <div>
      {!isloggedin ? (
        <Form onLogin={loginHandler} />
      ) : (
        <WelcomeOptions onOptionsChoose={welcomeOptionsHandler} />
      )}

      {selectedWelcomeOption && (
        <div>
          {selectedWelcomeOption === MANAGE_CUSTOMERS && <ManageCustomers />}
          {selectedWelcomeOption === MANAGE_ROOMS && <p>manage rooms WIP</p>}
        </div>
      )}
    </div>
  );
};

export default App;
