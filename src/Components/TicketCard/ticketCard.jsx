const TicketCard = ({ ticket , setTicketCard , ticketCard }) => {
  

  const isStatusOpen = ticket.status === "Open";

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "HIGH PRIORITY":
        return "text-red-500";
      case "MEDIUM PRIORITY":
        return "text-amber-500";
      case "LOW PRIORITY":
        return "text-emerald-500";
      default:
        return "text-gray-500";
    }
  };
   const handleClick = () =>{
         setTicketCard( (ticketCard) => [...ticketCard , ticket])
   }
   console.log(ticketCard)
  return (
    <div onClick={()=> handleClick(ticket) } className="w-full cursor-pointer bg-white rounded-lg border border-gray-100 shadow-sm p-4 flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between gap-2 mb-2">
        <h3 className="font-semibold text-gray-900 text-base line-clamp-1">
          {ticket.title}
        </h3>

        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium shrink-0 ${
            isStatusOpen
              ? "bg-emerald-100 text-emerald-800"
              : "bg-amber-100 text-amber-800"
          }`}
        >
          <span
            className={`w-2 h-2 rounded-full ${
              isStatusOpen ? "bg-emerald-500" : "bg-amber-500"
            }`}
          ></span>
          {ticket.status}
        </span>
      </div>

      <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">
        {ticket.description}
      </p>

      <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-50">
        <div className="flex items-center gap-2">
          <span className="text-gray-400 font-normal">#{ticket.id}</span>
          <span className={`font-semibold ${getPriorityColor(ticket.priority)}`}>
            {ticket.priority}
          </span>
        </div>

        <div className="flex items-center gap-3 text-gray-600">
          <span className="font-medium">{ticket.assignee}</span>
          <div className="flex items-center gap-1 text-gray-400">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"
              />
            </svg>
            <span>{ticket.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
