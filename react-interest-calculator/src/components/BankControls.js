import React, { useState } from "react";

function BankControls({ deposit, withdraw, addInterest, chargeFees }) {
  const [depositAmt, setDepositAmt] = useState("");
  const [withdrawAmt, setWithdrawAmt] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [feeAmt, setFeeAmt] = useState("");

  return (
    <div className="card p-4 shadow-sm">
      <div className="row g-3">
        {/* Deposit */}
        <div className="col-md-6">
          <input
            type="number"
            className="form-control"
            placeholder="Deposit Amount"
            value={depositAmt}
            onChange={(e) => setDepositAmt(e.target.value)}
          />
          <button
            className="btn btn-primary w-100 mt-2"
            onClick={() => {
              deposit(depositAmt);
              setDepositAmt("");
            }}
          >
            Deposit
          </button>
        </div>

        {/* Withdraw */}
        <div className="col-md-6">
          <input
            type="number"
            className="form-control"
            placeholder="Withdraw Amount"
            value={withdrawAmt}
            onChange={(e) => setWithdrawAmt(e.target.value)}
          />
          <button
            className="btn btn-warning w-100 mt-2"
            onClick={() => {
              withdraw(withdrawAmt);
              setWithdrawAmt("");
            }}
          >
            Withdraw
          </button>
        </div>

        {/* Interest */}
        <div className="col-md-6">
          <input
            type="number"
            className="form-control"
            placeholder="Interest Rate (%)"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
          <button
            className="btn btn-success w-100 mt-2"
            onClick={() => {
              addInterest(interestRate);
              setInterestRate("");
            }}
          >
            Add Interest
          </button>
        </div>

        {/* Fees */}
        <div className="col-md-6">
          <input
            type="number"
            className="form-control"
            placeholder="Fee Amount"
            value={feeAmt}
            onChange={(e) => setFeeAmt(e.target.value)}
          />
          <button
            className="btn btn-danger w-100 mt-2"
            onClick={() => {
              chargeFees(feeAmt);
              setFeeAmt("");
            }}
          >
            Charge Fees
          </button>
        </div>
      </div>
    </div>
  );
}

export default BankControls;
// This component provides controls for depositing, withdrawing, adding interest, and charging fees.
