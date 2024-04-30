import FinishedTasksCard from "./FinishedTasksCard";
import Pending from "./Pendingcard";
import Processcard from "./Processcard";
import TestingCard from "./TestingCard";

const Cards = () => {
  return (
    <>
      <div className="my-8 mx-10">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          <Pending />
          <Processcard />
          <TestingCard />
          <FinishedTasksCard />
          {/* <Task /> */}
        </div>
      </div>
    </>
  );
};

export default Cards;
