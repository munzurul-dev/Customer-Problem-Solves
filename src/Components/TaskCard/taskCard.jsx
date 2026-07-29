const TaskCard = ({ newTaskCard }) => {
  console.log(newTaskCard);
  return (
    <div className="">
      <div className="w-full  border border-gray-300 rounded-xl p-2 mt-5">
        <h2 className="font-bold ">{newTaskCard.title}</h2>
        <button className="w-full py-2 mt-4 cursor-pointer rounded-2xl bg-green-500">
          Complete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
