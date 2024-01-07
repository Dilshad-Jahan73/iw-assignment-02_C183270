import AvailableBudget from "./AvailableBudget";
import Income from "./Income";
import Expense from "./Expense";

export default function Budget() {
  return (
    <div className="mx-auto max-w-sm px-5 py-8 text-center text-white">
        {/* AvailableBuget  */}
        <AvailableBudget />

        {/* Income  */}
        <Income />

        {/* Expense  */}
        <Expense />
    </div>
  );
}