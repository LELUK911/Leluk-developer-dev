import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  ADDRESS_CREATE_ERC20_GOERLI,
  ADDRESS_CREATE_ERC20_MUMBAI,
  ERC_FEES,
  GOERLI_SCAN,
  MUMBAI_SCAN,
} from "../../fixVariable/Constant";
import AppNavBarEVNM from "../navBar/AppNavBarEVNM";
import { SubmitHandler, useForm } from "react-hook-form";
import { TokenEer20form } from "../../../type/type";
import Abi from "../../../contract/creatorTokenERC.json";
import { useAddress, useChainId, useSDK } from "@thirdweb-dev/react";
import { SmartContract } from "@thirdweb-dev/sdk";
import { CircularProgress } from "@chakra-ui/react";
import { preventive } from "../../linkAddress/linkAddress";
import { ethers } from "ethers";
import HelperButton from "../helper/HelperButton";
import GitContractButton from "../helper/GitContractButton";

const AppTokenERC20: React.FC = () => {
  const [contract, SetContract] = useState<SmartContract>();
  const [txReceipt, setTxReceipt] = useState<any>("");
  const [txLoading, setTxLoading] = useState<boolean>(false);
  const [scan, setScan] = useState<string>("");
  const [token, setToken] = useState<string>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TokenEer20form>();
  const userAddress = useAddress();
  const chainId = useChainId();
  const sdk = useSDK();

  useEffect(() => {
    const getContract = async () => {
      if (!sdk) {
       
        return;
      }
      let contractGet;
      if (chainId === 5) {
        contractGet = await sdk.getContractFromAbi(
          ADDRESS_CREATE_ERC20_GOERLI,

          Abi.abi
        );

        setScan(GOERLI_SCAN);
      }
      if (chainId === 80001) {
        contractGet = await sdk.getContractFromAbi(
          ADDRESS_CREATE_ERC20_MUMBAI,

          Abi.abi
        );
        setScan(MUMBAI_SCAN);
      }

      SetContract(contractGet);
    };

    getContract();

  });

  useEffect(() => {
    if (txReceipt !== "") {
      alert(`
      transaction submit success ${scan}${txReceipt.transactionHash} ,
      Address Token: ${token}
      `);
    }
  }, [txReceipt]);

  const onSubmit: SubmitHandler<TokenEer20form> = async (data) => {
    let functionCall: string;
    if (!contract) {
      alert("Problem with contract instance, contact page Administrator");
      return;
    }

    if (data.RecipientIsConnect && userAddress) {
      data.Recipient = userAddress;
    }

    if (data.TypeSupply === "fix") {
      if (data.Pausable == false) {
        functionCall = "createFixSupply";
      } else {
        functionCall = "createFixSupplyPausable";
      }
    } else {
      if (data.Pausable == false) {
        functionCall = "createVariableSupply";
      } else {
        functionCall = "createVariableSupplyPausable";
      }
    }

    try {
      setTxLoading(true);
      const tx = await contract.call(
        functionCall,
        data.Name,
        data.Ticker,
        data.Supply,
        data.Recipient,
        { value: ethers.utils.parseEther(ERC_FEES) }
      );
      setToken(tx.receipt.events[1].args.token);
      setTxReceipt(tx.receipt);
      console.log(txReceipt);
    } catch (error) {
      alert(error);
      console.log(error);
    }
    setTxLoading(false);
  };

  const renderButtonNotLoading = () => {
    return (
      <button type="submit" className="btn btn-primary">
        Deploy (fees {ERC_FEES} ETH)
      </button>
    );
  };

  const renderSpinnerLoading = () => {
    return <CircularProgress isIndeterminate color="blue" />;
  };

  const renderAddressNextDeploy = () => {
    return (
      <div className="row">
        <p className="address-token">
        <strong>Address token :  </strong>
           {token}</p>
      </div>
    );
  };

  return (
    <div className="row token-erc20Area">
      <AppNavBarEVNM />

      <div className="describ-token">
        <h1>In alpha su Goerli & Mumbai tesnet</h1>
        <h2>Token ERC-20</h2>
        <ul>
          <li>
            <h5>Definizione</h5>
            <p>
              Per token ERC-20 si intende precisamente la standardardizzazione
              dei contratti che regolano i token(monete) circolanto sulla
              blockchain, basti pensare che il fatto che tutti i token ERC-20
              condividono le identiche funzionalità di base, ne rende possibile
              la facile implementazione nelle varie piattaforme Defi o più
              semplicemente nei vari scambi di risorse digitali
            </p>
          </li>
          <li>
            <h5>Utilizzi comuni</h5>
            <p>
              I token ERC-20 sono dei token fungibili, quindi ogni unita di
              questi token è esattamente uguale, e non è possibile attribuire
              funzioni o diritti speciali a singole unità del token; Ciò rende i
              token ERC20 utili per cose come valuta per scambi, diritto di voto
              relazionato alla quantita di token posseduti, oppure lo steaking.
            </p>
          </li>
          <li>
            <h5>Codice</h5>
            <p>
              Per la creazione del Token verrà utilizato il contratto di
              <Link href="https://docs.openzeppelin.com/contracts/4.x/erc20">
                OpenZeppelin
              </Link>
              , che oltre ad essere auditato, rappresenta un altissimo standar
              di codice open-source.
            </p>
          </li>
          <li>
            <h5>Rischi</h5>
            <p>
              Seppur lo standar ERC-20 e i contratti di OpenZeppelin
              rappresentano un solido standard, bisogna comprendere che ogni
              contratto su blockchain può essere pontenzialmente rischioso, ed
              espone a rischi il wallet che interaggisce con esso. I rischi in
              genere sono rappresentati dalla presenza di bug all interno del
              codice che permettono ad un attore malevolo di interagire con le
              risorse della propria vittima senza il suo consenso. Altri rischi
              sono collegati a fenomeni di phisign o a possibili manipolazioni
              di mercato, ma questo esula dai rischi intrinsechi dei contratti
              in se.
            </p>
          </li>
        </ul>
      </div>
      <div className="box-form">
        <div className="col-10">
          <h2 className="titleform">Token ERC-20</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="nameInput" className="form-label">
                Nome
              </label>
              <input
                {...register("Name")}
                type="text"
                className="form-control"
                id="nameInput"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tickerInput" className="form-label">
                Tiker
              </label>
              <input
                {...register("Ticker")}
                type="text"
                className="form-control"
                id="tickerInput"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="supplyInput" className="form-label">
                Max Circolante
              </label>
              <input
                {...register("Supply")}
                type="number"
                className="form-control"
                id="supplyInput"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Circolante</label>
              <select
                {...register("TypeSupply")}
                className="form-select"
                aria-label="Default select example"
              >
                <option value="fix">fisso</option>
                <option value="var">variabile</option>
              </select>
            </div>

            <div className="mb-3 form-check">
              <input
                {...register("Pausable")}
                type="checkbox"
                className="form-check-input"
                id="SetPausableCheck"
              />
              <label className="form-check-label" htmlFor="SetPausableCheck">
                Transazioni sospendibili
              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="recipientInput" className="form-label">
                Destinatario Token
              </label>
              <input
                {...register("Recipient")}
                type="text"
                className="form-control"
                id="recipientInput"
              />
            </div>

            <div className="mb-3 form-check">
              <input
                {...register("RecipientIsConnect")}
                type="checkbox"
                className="form-check-input"
                id="autoSetAddressCheck"
              />
              <label className="form-check-label" htmlFor="autoSetAddressCheck">
                Il destinatario è il wallet connesso
              </label>
            </div>
            {!txLoading && renderButtonNotLoading()}
            {txLoading && renderSpinnerLoading()}
            <GitContractButton />
            <HelperButton />
            {token && renderAddressNextDeploy()}
          </form>
          <div className="row Plus-service-section">
            <h4>Token personalizzato</h4>
            <p>
              Se necessiti di un token con funzioni customizzate, oppure di un
              infrastruttura che utilizzi il tuo token ERC-20 contattami per un
              preventivo.
            </p>
            <div className="col6">
              <Link href={preventive} passHref>
                <button
                  type="button"
                  className="btn btn-solid-lg btn-border-radius"
                >
                  Contattami
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AppTokenERC20;
