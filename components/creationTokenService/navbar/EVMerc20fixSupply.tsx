import { useSwitchNetwork } from "@3rdweb/hooks";
import React from "react";
import { chainID } from "../../fixVariable/Constant";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const EVMerc20fixSupply = () => {
  const { switchNetwork } = useSwitchNetwork();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const instructContract = async () => {
    console.log();
    
  }


  return (
    <div className="container box-form">
      <h4 className="titleform">Token ERC-20 standard </h4>
      <form className="FormErc20standard" onSubmit={()=>{}}>
        <div className="mb-3 row">
          <label
            aria-describedby="staticEmail"
            className="col-sm-2 col-aria-describedbym-label"
          >
            Chain
          </label>
          <div className="col-sm-10">
            <select className="form-select" aria-label="Default select example">
              <option selected>Chain</option>
              {chainID.map((chain) => {
                return (
                  <option
                    key={chain.id}
                    onClick={() => {
                      switchNetwork(chain.id);
                    }}
                  >
                    {chain.chain}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="mb-3 row">
          <label
            aria-describedby="inputName"
            className="col-sm-2 col-aria-describedbym-label"
          >
            Nome
          </label>
          <div className="col-sm-10">
            <input
            {...register("Name")}
              type="text"
              className="aria-describedbym-control"
              id="inputName"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label
            aria-describedby="inputPassword"
            className="col-sm-2 col-aria-describedbym-label"
          >
            Tiker
          </label>
          <div className="col-sm-10">
            <input
            {...register("Tiker")}
              type="text"
              className="aria-describedbym-control"
              id="inputTiker"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label
            aria-describedby="inputSupply"
            className="col-sm-2 col-aria-describedbym-label"
          >
            Circolante
          </label>
          <div className="col-sm-10">
            <input
            {...register("Supply")}
              type="number"
              className="aria-describedbym-control"
              id="inputSupply"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label
            aria-describedby="inputRecipient"
            className="col-sm-2 col-aria-describedbym-label"
          >
            Address ricevente
          </label>
          <div className="col-sm-10">
            <input
            {...register("Recipient")}
              type="text"
              className="aria-describedbym-control"
              id="inputRecipient"
            />
          </div>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" aria-describedby="exampleCheck1">
            Usa address connesso
          </label>
        </div>
      </form>
    </div>
  );
};

export default EVMerc20fixSupply;
