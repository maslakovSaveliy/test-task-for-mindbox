import React, { Dispatch, FC, SetStateAction } from "react";
interface Props {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}
const Filters: FC<Props> = ({
  value: filterValue,
  setValue: setFilterValue,
}) => {
  return (
    <div className="filters">
      <button
        style={
          filterValue === "all"
            ? { border: "1px solid black" }
            : { border: "none" }
        }
        onClick={() => setFilterValue("all")}
      >
        All
      </button>
      <button
        style={
          filterValue === "active"
            ? { border: "1px solid black" }
            : { border: "none" }
        }
        onClick={() => setFilterValue("active")}
      >
        Active
      </button>
      <button
        style={
          filterValue === "completed"
            ? { border: "1px solid black" }
            : { border: "none" }
        }
        onClick={() => setFilterValue("completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default Filters;
