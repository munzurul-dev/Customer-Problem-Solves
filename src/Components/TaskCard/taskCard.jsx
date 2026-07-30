import { toast } from "react-toastify";

const TaskCard = ({ newTaskCard, setResolvedTicket, resolvedTicket , removeResolvedCard}) => {
  const handleComplete = () =>{
   resolvedHandle();
   removeHandle(newTaskCard);
  }
  const resolvedHandle = () => {
    setResolvedTicket([...resolvedTicket , newTaskCard])
   
  };
  const removeHandle = () =>{
    removeResolvedCard(newTaskCard)
    toast.success("Task added successfully!");
  }
  return (
    <div className="">
      <div className="w-full  border border-gray-300 rounded-xl p-2 mt-5">
        <h2 className="font-bold ">{newTaskCard.title}</h2>
        <button   onClick={handleComplete} className="w-full py-2 mt-4 cursor-pointer rounded-2xl bg-green-500">
          Complete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
