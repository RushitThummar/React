import "./App.css";
//import LudoBoard from "./LudoBoard";
//import TodoList from "./TudoList";
import Lottery from "./Lottery";
import TicketNum from "./TicketNum";
import Ticket from "./Ticket";
import { sum } from "./helper.js";

function App() {
  let winCondition = (ticket) => {
    // //ticket first number is 0
    return ticket[0] === 0;
    // //every number must be same to win
    // return ticket.every((num) => num === ticket[0]);
    // //ticket all number sum=15
    //return sum(ticket) === 15;
  };

  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
    </>
  );
}

export default App;
