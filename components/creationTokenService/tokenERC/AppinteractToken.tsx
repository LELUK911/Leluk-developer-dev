import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TokenErc20TypeInterface } from "../../../type/type";
import Erc20FixSupply from "../../../contract/Erc20FixSupply.json";
import Erc20FixSupplyPausable from "../../../contract/Erc20FixSupplyPausable.json";
import Erc20VarSupply from "../../../contract/Erc20VariableSupply.json";
import Erc20VarSupplyPausable from "../../../contract/Erc20VariableSupplyPausable.json";
import { SmartContract } from "@thirdweb-dev/sdk";
import { useAddress, useChainId, useSDK } from "@thirdweb-dev/react";
import {

  GOERLI_SCAN,
  MUMBAI_SCAN,
} from "../../fixVariable/Constant";
import { ethers } from "ethers";

const IntertactWithERC20: React.FC = () => {
  const [typeContract, setTypeContract] = useState<any>();
  const [typeInterfaceRender, setTypeInterfaceRender] =
    useState<TokenErc20TypeInterface | null>();
  //const [addressToken,setAddressToken] = useState<string>()
  const [allowance, setAllowance] = useState<any>({
    delegate: "",
    amount: 0,
  });
  const [transfer, setTransfer] = useState<any>({
    recipient: "",
    amount: 0,
  });
  const [mintNewT, setMintNewT] = useState<any>({
    recipient: "",
    amount: 0,
  });
  const[burnT,setBurnT] = useState<number>(0);
  const [newOwner, setNewOwner] = useState<string>();

  const { handleSubmit, register } = useForm<TokenErc20TypeInterface>();




  const [contract, SetContract] = useState<SmartContract>();
  const [scan, setScan] = useState<string>("");

  const userAddress = useAddress()
  const chainId = useChainId()
  const sdk = useSDK();

  
  const getContractFunction =(addressToken:string) => {
    const getContract = async () => {
   
      if (!sdk || !addressToken) {
       
        return;
      }
      let contractGet;
      if (chainId === 5) {
        contractGet = await sdk.getContractFromAbi(
          addressToken,

          typeContract
        );

        setScan(GOERLI_SCAN);
      }
      if (chainId === 80001) {
        contractGet = await sdk.getContractFromAbi(
          addressToken,

          typeContract
        );
        setScan(MUMBAI_SCAN);
      }

      SetContract(contractGet);
    };

    getContract();
    console.log(contract)
  };




  const onSubmit: SubmitHandler<TokenErc20TypeInterface> = (data) => {
    //console.log(data)
    if (data.Pausable === "NotPausable") {
      if (data.Supply === "Fix") {
        setTypeContract(Erc20FixSupply.abi);
      }
      if (data.Supply === "Var") {
        setTypeContract(Erc20VarSupply.abi);
      }
    }
    if (data.Pausable === "Pausable") {
      if (data.Supply === "Fix") {
        setTypeContract(Erc20FixSupplyPausable.abi);
      }
      if (data.Supply === "Var") {
        setTypeContract(Erc20VarSupplyPausable.abi);
      }
    }
    setTypeInterfaceRender(data);

  };


  const allowSpender = async (spenderAddress:string, amount:number)=>{
    if(!contract){
      return
    }
    try {
      const bigNamount = ethers.utils.parseEther(amount.toString())
      await contract.erc20.setAllowance(spenderAddress, bigNamount.toString());
      
    } catch (error) {
      alert(error)
    }
  }
 
  const transferToken = async(toAddress:string, amount:number)=>{
    if(!contract){
      return
    }
    try {
      const bigNamount = ethers.utils.parseEther(amount.toString())
      await contract.erc20.transfer(toAddress, bigNamount.toString());
      
    } catch (error) {
      alert(error)
    }
  }

  const mintNewToken = async(toAddress:string, amount:number)=>{

    if(!contract){
      return
    }
    try {
      const bigNamount = ethers.utils.parseEther(amount.toString())
      await contract.call('mint',toAddress,bigNamount.toString())//,{gasLimit:500000})
      
    } catch (error) {
      alert(error)
    }
  }


  const burnToken = async(amount:number)=>{

    if(!contract){
      return
    }
    try {
      const bigNamount = ethers.utils.parseEther(amount.toString())
      await contract.erc20.burn(bigNamount.toString())
      
    } catch (error) {
      alert(error)
    }
  }
  const setPause = async()=>{
    if(!contract){
      return
    }
    try {
      const tx = await contract.call('pause')
      const receipt = tx.receipt;
      console.log(receipt)
    } catch (error) {
      console.log(error)
    }
  }
  const setUnPause = async()=>{
    if(!contract){
      return
    }
    try {
      const tx = await contract.call('unpause')
      const receipt = tx.receipt;
      console.log(receipt)
    } catch (error) {
      console.log(error)
    }
  }


  const transferOwner = async(newOwner:string|undefined)=>{
    if(!contract || !newOwner){
      alert("Set correct new Owner Address, if problem persist contact administrator")
      return
    }
    try {
      const tx = await contract.call('transferOwnership',newOwner)
      const receipt = tx.receipt;
      console.log(receipt)
    } catch (error) {
      console.log(error)
    }
  }

  const renderStandardOperation = () => {
    return (
      <>
        <div className="row g-3">
          <h6>Address Token</h6>
          <input type="text" className="form-control" placeholder="0x00"
          onChange={(e)=>{getContractFunction(e.target.value)}} />
        </div>
        <div className="row g-3">
          <h6>Approva Spesa</h6>
          <div className="col">
            <label htmlFor="AddressInput" className="form-label">
              Delegato
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="0x00"
              id="AddressInput"
              onChange={(e) => {
                setAllowance({ ...allowance, delegate: e.target.value });
              }}
            />
          </div>
          <div className="col">
            <label htmlFor="AmountInput" className="form-label">
              Quantità
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="0"
              id="AmountInput"
              onChange={(e) => {
                setAllowance({ ...allowance, amount: +e.target.value });
              }}
            />
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-solid-lg btn-border-radius"
              onClick={() => {
                console.log(allowance);
                allowSpender(allowance.delegate,allowance.amount)
              }}
            >
              Approva
            </button>
          </div>
        </div>
        <div className="row g-3">
          <h6>Trasferisci Token</h6>
          <div className="col">
            <label htmlFor="AddressInput" className="form-label">
              Ricevente
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="0x00"
              id="AddressInput"
              onChange={(e) => {
                setTransfer({ ...transfer, recipient: e.target.value });
              }}
            />
          </div>
          <div className="col">
            <label htmlFor="AmountInput" className="form-label">
              Quantità
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="0"
              id="AmountInput"
              onChange={(e) => {
                setTransfer({ ...transfer, amount: +e.target.value });
              }}
            />
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-solid-lg btn-border-radius"
              onClick={() => {
                console.log(transfer);
                transferToken(transfer.recipient,transfer.amount)
              }}
            >
              Invia
            </button>
          </div>
        </div>
      </>
    );
  };

  const renderPausableOperation = () => {
    return (
      <>
        <div className="row g-3">
          <h6></h6>
          <div className="col">
            <p>Setta in pausa</p>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-solid-lg btn-border-radius PausableButton"
              onClick={()=>{setPause()}}
            >
              Pausa
            </button>
            <button
              type="button"
              className="btn btn-solid-lg btn-border-radius UnPausableButton"
              onClick={()=>{setUnPause()}}
            >
              Attiva
            </button>
          </div>
        </div>
      </>
    );
  };

  const renderVariableSupplyOperation = () => {
    return (
      <>
        <div className="row g-3">
          <h6>Minta nuovi token</h6>
          <div className="col">
            <label htmlFor="AddressInput" className="form-label">
              Ricevente
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="0x00"
              id="AddressInput"
              onChange={(e)=>{setMintNewT({...mintNewT,recipient:e.target.value})}}
            />
          </div>
          <div className="col">
            <label htmlFor="AmountInput" className="form-label">
              Quantità
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="0"
              id="AmountInput"
              onChange={(e)=>{setMintNewT({...mintNewT,amount:+(e.target.value)})}}

            />
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-solid-lg btn-border-radius"
              onClick={()=>{
                mintNewToken(mintNewT.recipient,mintNewT.amount)
              }}
            >
              Mint
            </button>
          </div>
        </div>

        <div className="row g-3">
          <h6>Brucia Token</h6>
          <div className="col">
            <label htmlFor="AmountInput" className="form-label">
              Quantità
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="0"
              id="AmountInput"
              onChange={(e)=>{setBurnT(+(e.target.value))}}
            />
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-solid-lg btn-border-radius burnButton"
              onClick={()=>{burnToken(burnT)}}
            >
              Burn
            </button>
          </div>
        </div>
      </>
    );
  };

  const renderNewOwner = () => {
    return (
      <>
        <div className="row g-3">
          <h6>Trasferisci Proprietà</h6>
          <div className="col">
            <label htmlFor="AddressInput" className="form-label">
              Nuovo proprietario
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="0x00"
              id="AddressInput"
              onChange={(e) => {
                setNewOwner(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-solid-lg btn-border-radius transfer-Owner"
              onClick={() => {
                console.log(newOwner);
                transferOwner(newOwner)
              }}
            >
              Trasferisci proprietà
            </button>
          </div>
        </div>
      </>
    );
  };

  const renderClearInterfaceButton = () => {
    return (
      <>
        <button
          type="button"
          className="btn btn-solid-lg btn-border-radius"
          onClick={() => {
            setTypeContract(null);

            setTypeInterfaceRender(null);
          }}
        >
          Pulisci interfaccia
        </button>
      </>
    );
  };






  return (
    <>
      <div className="box-form interact">
        <div className="col-10 ">
          <div className="row g-3 interface-header">
            <h4>Interfaccia Token</h4>
            <p>(N.B. Su tesnet potrebbero esserci problemi nella Stima del Gas e le Tx potrebbero fallire o non inizializzarsi)</p>
            <form className="form-interface" onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="Supply-type" className="form-label">
                Tipo Circolante
              </label>
              <select
                {...register("Supply")}
                className="form-select contract-selector"
                aria-label="Default select example"
                id="Supply-type"
              >
                <option selected>Circolante</option>
                <option value="Fix">Fisso</option>
                <option value="Var">Variabile</option>
              </select>
              <label htmlFor="pausable-transaction" className="form-label">
                Transazioni sospendibili
              </label>

              <select
                {...register("Pausable")}
                className="form-select contract-selector"
                aria-label="Default select example"
                id="pausable-transaction"
              >
                <option selected>Transazioni sospendibili</option>
                <option value="Pausable">Si</option>
                <option value="NotPausable">No</option>
              </select>
              <button
                type="submit"
                className="btn btn-solid-lg btn-border-radius"
              >
                Seleziona
              </button>
            </form>
          </div>
          {typeInterfaceRender && renderStandardOperation()}
          {typeInterfaceRender?.Supply === "Var" &&
            renderVariableSupplyOperation()}
          {typeInterfaceRender?.Pausable === "Pausable" &&
            renderPausableOperation()}
            {typeInterfaceRender?.Supply === "Var" ||typeInterfaceRender?.Pausable === "Pausable" &&
            renderNewOwner()}
          {typeInterfaceRender && renderNewOwner()}
          {typeInterfaceRender && renderClearInterfaceButton()}
        </div>
      </div>
    </>
  );
};

export default IntertactWithERC20;
