import TaskCard from "../TaskCard/taskCard";

const NewTask = ({ ticketCard }) => {
  return (
    <div className="">
      <h3 className="w-full mt-5 font-bold">Task Status</h3>
      <div className="mt-5">
        {ticketCard.map((newTaskCard) => (
          <TaskCard newTaskCard={newTaskCard} key={newTaskCard.id}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default NewTask;
