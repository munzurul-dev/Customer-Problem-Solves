
import TicketCard from "../TicketCard/ticketCard";

const AllTicketCard = ({
  allTickets,
  setAllTickets,
  ticketCard,
  setTicketCard,
}) => {

  return (
    <>  <div>
        <h3 className="w-full mt-5 font-bold">Customer Ticket</h3>
      <div className="md:grid grid-cols-2 gap-2 mt-5 md:space-y-0 space-y-4">
        {allTickets.map((ticket) => (
        <TicketCard
          key={ticket.id}
          ticket={ticket}
          allTickets={allTickets}
          setAllTickets={setAllTickets}
          ticketCard={ticketCard}
          setTicketCard={setTicketCard}
        />
      ))}
      </div>
    </div>
      
    </>
  );
};

export default AllTicketCard;
