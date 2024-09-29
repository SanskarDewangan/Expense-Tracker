import React from "react";
import BudgetList from './_components/BudgetList'
function Budgets() {
  return (
    <div className="p-10">
      <h2 className="font-bold text-3xl "> MY Budgets</h2>
      <BudgetList />
    </div>
  );
}

export default Budgets;
