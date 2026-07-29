const DashboardSummary = ({ticketCard}) => {
  return (
    <div className=" lg:flex gap-5 mt-10">
      <div className="w-full md:p-20 p-10 md:rounded-2xl rounded-xl text-center text-white space-y-4 mb-4 lg:mb-0  bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
        <h2>in-Progress</h2>
        <p className="text-4xl">{ticketCard.length}</p>
      </div>
      <div className="w-full md:p-20 p-10 md:rounded-2xl rounded-xl text-center text-white space-y-4  bg-linear-to-r from-[#54CF68] to-[#00827A]">
        <h2>Resolved</h2>
        <p className="text-4xl">0</p>
      </div>
    </div>
  );
};

export default DashboardSummary;
