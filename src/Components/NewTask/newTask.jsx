import TaskCard from "../TaskCard/taskCard";

const NewTask = ({ ticketCard , setResolvedTicket ,resolvedTicket , removeResolvedCard}) => {
  return (
    <div className="">
      <h3 className="w-full mt-5 font-bold">Task Status</h3>
      <div className="mt-5">
         {ticketCard.length === 0 && (
    <p>No Task Selected</p>
  )}
        {ticketCard.map((newTaskCard) => (
          <TaskCard removeResolvedCard={removeResolvedCard} resolvedTicket={resolvedTicket} setResolvedTicket={setResolvedTicket} newTaskCard={newTaskCard} key={newTaskCard.id}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default NewTask;
