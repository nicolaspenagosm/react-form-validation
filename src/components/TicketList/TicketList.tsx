import { ITicket } from "../../hooks/form-hook/types";
import Card from "../commons/wrappers/Card/Card";
import { ListItem, StyledTicketList, Ticket } from "./TicketList.styled";

const TicketList: React.FC<{ tickets: ITicket[] }> = ({ tickets }) => {
  return (
    <StyledTicketList>
      <h2>Current Tickets</h2>
      {tickets.length > 0 && <ul>{renderTickets(tickets)}</ul>}
      {tickets.length === 0 && <p>No tickets added</p>}
    </StyledTicketList>
  );
};
export default TicketList;

const renderTickets = (tickets: ITicket[]) =>
  tickets.map((t) => (
    <ListItem key={t.id!}>
      <Card>
        <Ticket>
          <h3>{t.title}</h3>
          <p>{t.description}</p>
          <div>{`P${t.priority}`}</div>
        </Ticket>
      </Card>
    </ListItem>
  ));
