import { useEffect, useState } from "react";
import { StyledApp } from "./App.styled";
import Form from "./components/Form";
import TicketList from "./components/TicketList";
import { ITicket } from "./hooks/form-hook/types";
import { crudClient } from "./services/crudClient";

function App() {
  const [tickets, setTickets] = useState<ITicket[]>([]);

  useEffect(() => {
    updateTickets();
  }, []);

  const updateTickets = async () => {
    const tickets = await crudClient.getTickets();
    setTickets(tickets);
  };
  return (
    <StyledApp>
      <Form updatesTickets={updateTickets} />
      <TicketList tickets={tickets} />
    </StyledApp>
  );
}

export default App;
