import { Suspense, useEffect, useState } from "react";
import "./App.css";
import DashboardSummary from "./Components/DashboardSummary/dashboardSummary";
import Navbar from "./Components/Navbar/navbar";
import AllTicketCard from "./Components/AllTicketCard/allTicketCard";
import NewTask from "./Components/NewTask/newTask";
import AllSolvedCard from "./Components/AllSolvedCard/AllSolvedCard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer/Footer";

function App() {
  const [allTickets, setAllTickets] = useState([]);
  const [ticketCard, setTicketCard] = useState([]);
  const [resolvedTicket, setResolvedTicket] = useState([]);
  const [solvedCard, setSolvedCard] = useState([]);
  useEffect(() => {
    fetch("/ticket.json")
      .then((res) => res.json())
      .then((data) => setAllTickets(data));
  }, []);

  const removeSolvedCard = (nsc) => {
    const solvedCardFilter = resolvedTicket.filter(
      (newSolvedCard) => nsc.id !== newSolvedCard.id,
    );
    setResolvedTicket(solvedCardFilter);
  };
  const removeResolvedCard = (tc) => {
    const filteredCard = ticketCard.filter((rTicket) => tc.id !== rTicket.id);
    setTicketCard(filteredCard);
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-6xl mx-auto lg:p-0 md:p-2 sm:p-0">
        <Suspense fallback={ <div className="flex flex-col items-center justify-center py-20">
    <span className="loading loading-spinner loading-lg text-green-500"></span>
    <p className="mt-4 text-gray-600 font-medium">
      Loading tickets...
    </p>
  </div>}>
          <DashboardSummary
            ticketCard={ticketCard}
            resolvedTicket={resolvedTicket}
          ></DashboardSummary>
        </Suspense>

        <div className="lg:grid grid-cols-4 gap-5">
          <Suspense fallback={<h2>Content Loading</h2>}>
            <div className=" col-span-3">
              <AllTicketCard
                allTickets={allTickets}
                setAllTickets={setAllTickets}
                ticketCard={ticketCard}
                setTicketCard={setTicketCard}
              ></AllTicketCard>
            </div>

            <div className="col-span-1">
              <div className="">
                <NewTask
                  removeResolvedCard={removeResolvedCard}
                  resolvedTicket={resolvedTicket}
                  setResolvedTicket={setResolvedTicket}
                  ticketCard={ticketCard}
                ></NewTask>
              </div>
              <div>
                <h2 className="mt-5 font-bold">Resolved task history</h2>
                <AllSolvedCard
                  removeSolvedCard={removeSolvedCard}
                  solvedCard={solvedCard}
                  resolvedTicket={resolvedTicket}
                  setSolvedCard={setSolvedCard}
                ></AllSolvedCard>
              </div>
            </div>
          </Suspense>
        </div>
      </div>
      <Footer></Footer>
        <ToastContainer />
    </>
  );
}

export default App;
