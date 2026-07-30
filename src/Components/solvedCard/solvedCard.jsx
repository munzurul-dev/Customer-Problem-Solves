import { toast } from "react-toastify";
const SolvedCard = ({ newSolvedCard, removeSolvedCard }) => {
  const solvedCardHandle = () => {
    removeSolvedCard(newSolvedCard);
    toast.info("Task history removed!");
  };
  return (
    <div className=" w-full rounded-2xl bg-green-100 p-4 mt-5">
      <h2 className="font-bold text-black">{newSolvedCard.title}</h2>
      <div className="flex justify-between items-center mt-2">
        <p className="text-green-400 flex items-center ">
          <span className="text-2xl">✓</span> <span>Completed</span>
        </p>
        <button
          onClick={solvedCardHandle}
          className="tex-gray-400 cursor-pointer text-black"
        >
          {" "}
          Click to remove
        </button>
      </div>
    </div>
  );
};

export default SolvedCard;
