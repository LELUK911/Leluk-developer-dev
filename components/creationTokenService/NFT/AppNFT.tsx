import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  ADDRESS_CREATE_NFT_GOERLI,
  ADDRESS_CREATE_NFT_MUMBAI,
  NFT_FEES,
  GOERLI_SCAN,
  MUMBAI_SCAN,
} from "../../fixVariable/Constant";
import AppNavBarEVNM from "../navBar/AppNavBarEVNM";
import { SubmitHandler, useForm } from "react-hook-form";
import { TokenEer721form } from "../../../type/type";
import Abi from "../../../contract/creatorTokenNFT.json";
import { useAddress, useChainId, useSDK } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { SmartContract } from "@thirdweb-dev/sdk";
import { CircularProgress} from "@chakra-ui/react";
import { preventive } from "../../linkAddress/linkAddress";
import GitContractButton from "../helper/GitContractButton";
import HelperButton from "../helper/HelperButton";
import AppInteractNftContract from "./AppInteractNftContract";

const AppNFT: React.FC = () => {
  const [contract, SetContract] = useState<SmartContract>();
  const [txReceipt, setTxReceipt] = useState<any>("");
  const [txLoading, setTxLoading] = useState<boolean>(false);
  const [scan, setScan] = useState<string>("");
  const [token, setToken] = useState<string>();
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TokenEer721form>();
  const userAddress = useAddress();
  const chainId = useChainId();
  const sdk = useSDK();

  useEffect(() => {
    const getContract = async () => {
      if (!sdk) {
    
        return;
      }

     
      if (chainId === 5) {
        const contractGet = await sdk.getContractFromAbi(
          ADDRESS_CREATE_NFT_GOERLI,
  
          Abi.abi
        );
        setScan(GOERLI_SCAN);
        SetContract(contractGet);
      }
      if (chainId === 80001) {
        const contractGet = await sdk.getContractFromAbi(
          ADDRESS_CREATE_NFT_MUMBAI,
  
          Abi.abi
        );
        setScan(MUMBAI_SCAN);
        SetContract(contractGet);
      }




  
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

  const onSubmit: SubmitHandler<TokenEer721form> = async (data) => {
    let functionCall: string;
    if (!contract) {
      alert("Problem with contract instance, contact page Administrator");
      return;
    }


    if(data.Pausable == true){
      functionCall = 'createNftProStoURIburnalblePausable'
    }else{
      functionCall = 'createNftProStoURIburnalble'
    }


    if (data.RecipientIsConnect && userAddress) {
      data.Recipient = userAddress;
    }


    try {
      setTxLoading(true);
      const tx = await contract.call(
        functionCall,
        data.Recipient,
        data.Name,
        data.Ticker,
      
        { value: ethers.utils.parseEther(NFT_FEES) }
      );
     
      setToken(tx.receipt.events[2].args.nft);
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
        Deploy (fees {NFT_FEES.toString()} ETH)
      </button>
    );
  };

  const renderSpinnerLoading = () => {
    return (

      <CircularProgress isIndeterminate color='blue' />
    
    );
  };


  const renderAddressNextDeploy = () => {
    return (
      <div className="row">
        <p className="address-token">
        <strong>Address Nft contract :  </strong>
           {token}</p>
      </div>
    );
  };

  return (
    <div className="row token-erc20Area">
      <AppNavBarEVNM />

      <div className="describ-token">
        <h1>In alpha su Goerli & Mumbai tesnet</h1>
        <h2>Not fungible token (ERC-721)</h2>
        <ul>
          <li>
            <h5>Definizione</h5>
            <p>
              Un token non fungibile (NFT)
              viene utilizzato per catalogare in delle informazioni in 
              modo univoco. Questo tipo di token è perfetto per 
              essere utilizzato su piattaforme che offrono oggetti da collezione,
              chiavi di accesso, biglietti della lotteria, posti numerati per concerti
              e partite sportive, ecc.
            </p>
          </li>
          <li>
            <h5>Utilizzi comuni</h5>
            <p>
              Come gia citato nella definizione, gli NFT offrono innumerevoli possibilità al loro utilizzo,
              di fatti oltre ai classici oggetti da collezione , questi possono rappresentare vere e proprie 
              prove di proprieta di un oggetto fisico, o ancora possono contenere delle istanze notarili che 
              necessitano di essere pubbliche e sempre accessibili oltre che immutabili.
            </p>
          </li>
          <li>
            <h5>Codice</h5>
            <p>
              Per la creazione del NFT verrà utilizato il contratto di
              <Link href="https://docs.openzeppelin.com/contracts/4.x/erc721">
                OpenZeppelin
              </Link>
              , che oltre ad essere auditato, rappresenta un altissimo standar
              come codice open-source.
            </p>
          </li>
          <li>
            <h5>Rischi</h5>
            <p>
              Seppur lo standar ERC-721 e i contratti di OpenZeppelin
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
          <h2 className="titleform">Non fungible token ERC-721</h2>
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
            <h4>NFT personalizzato</h4>
            <p>
              La complessità e versatilità nella loro applicazione, rende gli NFT
              degli asset digitali altamente personalizzabili,
              Se necessiti di funzioni customizzate, oppure di un
              infrastruttura che utilizzi NFT contattami per un
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
            <AppInteractNftContract/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AppNFT;
