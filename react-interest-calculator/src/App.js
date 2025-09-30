import React, { useState } from "react";
import BalanceDisplay from "./components/BalanceDisplay";
import BankControls from "./components/BankControls";

function App() {
  const [balance, setBalance] = useState(0);

  const deposit = (amount) =>
    setBalance((prev) => prev + parseFloat(amount || 0));
  const withdraw = (amount) =>
    setBalance((prev) => prev - parseFloat(amount || 0));
  const addInterest = (rate) =>
    setBalance((prev) => prev + (prev * parseFloat(rate || 0)) / 100);
  const chargeFees = (fee) => setBalance((prev) => prev - parseFloat(fee || 0));

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4"> React Interest Calculator</h1>
      <BalanceDisplay balance={balance} />
      <BankControls
        deposit={deposit}
        withdraw={withdraw}
        addInterest={addInterest}
        chargeFees={chargeFees}
        balance={balance}
      />
    </div>
  );
}

export default App;
