import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
