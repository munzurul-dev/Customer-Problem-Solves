import { use } from "react";
import TicketCard from "../TicketCard/ticketCard";

const AllTicketCard = ({ ticketPromise , setTicketCard ,ticketCard }) => {
  const ticketData = use(ticketPromise);
  console.log(ticketData);
  return (
    <div>
        <h3 className="w-full mt-5 font-bold">Customer Ticket</h3>
      <div className="md:grid grid-cols-2 gap-2 mt-5 md:space-y-0 space-y-4">
        {ticketData.map((ticket) => (
          <TicketCard ticket={ticket} key={ticket.id} setTicketCard ={setTicketCard } ticketCard={ticketCard}></TicketCard>
        ))}
      </div>
    </div>
  );
};

export default AllTicketCard;
