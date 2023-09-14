export default function WelcomeOptions(props) {
  const chosenOption = (e) => {
    props.onOptionsChoose(e.target.innerHTML);
  };

  return (
    <div>
      <h2>Choose </h2>
      <button onClick={chosenOption} name="Manage Customers">
        Manage Customers
      </button>
      <button onClick={chosenOption} name="Manage Rooms">
        Manage Rooms
      </button>
    </div>
  );
}
