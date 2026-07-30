import SolvedCard from "../solvedCard/solvedCard";

const AllSolvedCard = ({
  resolvedTicket,
  removeSolvedCard,
  solvedCard,
  setSolvedCard,
}) => {
  return (
    <div>
         {resolvedTicket.length === 0 && (
    <p>No resolved tasks yet.</p>
  )}
      {resolvedTicket.map((newSolvedCard) => (
        <SolvedCard removeSolvedCard={removeSolvedCard} setSolvedCard={setSolvedCard} solvedCard={solvedCard} newSolvedCard={newSolvedCard} key={newSolvedCard.id}></SolvedCard>
      ))}
    </div>
  );
};

export default AllSolvedCard;
