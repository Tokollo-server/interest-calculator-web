import React from "react";

function BalanceDisplay({ balance }) {
  const isNegative = balance < 0;

  return (
    <div
      className={`alert R{
        isNegative ? "alert-danger" : "alert-success"
      } text-center`}
    >
      <h4>
        Current Balance: <strong>R{balance.toFixed(2)}</strong>
      </h4>
      {isNegative && <p className="mb-0"> Your balance is negative!</p>}
    </div>
  );
}

export default BalanceDisplay;
