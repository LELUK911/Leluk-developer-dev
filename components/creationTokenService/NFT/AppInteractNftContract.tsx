import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TokenErc721TypeInterface } from "../../../type/type";
import Erc721ProStoURIburnalblePausable from "../../../contract/Erc721ProStoURIburnalblePausable.json";
import Erc721ProStoURIpausable from "../../../contract/Erc721ProStoURIpausable.json";

const AppInteractNftContract = () => {
  const [typeContract, setTypeContract] = useState<any>();
  const [typeInterfaceRender, setTypeInterfaceRender] =
    useState<TokenErc721TypeInterface | null>();
  const [newOwner, setNewOwner] = useState<string>();

  const { handleSubmit, register } = useForm<TokenErc721TypeInterface>();

  const onSubmit: SubmitHandler<TokenErc721TypeInterface> = (data) => {
    if (data.Pausable === "pausable") {
      setTypeContract(Erc721ProStoURIburnalblePausable.abi);
    } else if (data.Pausable === "unPausable") {
      setTypeContract(Erc721ProStoURIpausable.abi);
    }
    setTypeInterfaceRender(data);
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
              }}
            >
              Trasferisci proprietà
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
            >
              Pausa
            </button>
            <button
              type="button"
              className="btn btn-solid-lg btn-border-radius UnPausableButton"
            >
              Attiva
            </button>
          </div>
        </div>
      </>
    );
  };

  const renderInterface = () => {
    return (
      <>
        <>
          <div className="row g-3">
            <h6>Address Contract</h6>
            <input type="text" className="form-control" placeholder="0x00" />
          </div>

          <div className="row g-3">
            <h6>Minta nuovo Nft</h6>
            <div className="col">
              <label htmlFor="AddressInput" className="form-label">
                Destinatario
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="0x00"
                id="AddressInput"
              />
            </div>
            <div className="col">
              <label htmlFor="AmountInput" className="form-label">
                Token URI
              </label>
              <input
                type="string"
                className="form-control"
                placeholder="{'name': 'Name','description': 'describe you NFT','image': 'Image find URL','attribute':'value'}"
                id="AmountInput"
              />
            </div>
            <div className="col">
              <button
                type="button"
                className="btn btn-solid-lg btn-border-radius"
              >
                Mint
              </button>
            </div>
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
              />
            </div>
            <div className="col">
              <label htmlFor="AmountInput" className="form-label">
                Token Id
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="0"
                id="AmountInput"
              />
            </div>
            <div className="col">
              <button
                type="button"
                className="btn btn-solid-lg btn-border-radius"
              >
                Approva
              </button>
            </div>
          </div>
          <div className="row g-3">
            <h6>Approva Spesa per tutti</h6>
            <div className="col">
              <label htmlFor="AddressInput" className="form-label">
                Delegato
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="0x00"
                id="AddressInput"
              />
            </div>
            <div className="col">
              <label htmlFor="AmountInput" className="form-label">
                Approva / Rimuovi
              </label>
              <select
                className="form-select contract-selector"
                aria-label="Default select example"
                id="Delegation-All"
              >
                <option selected></option>
                <option value="true">Approva</option>
                <option value="false">Rimuovi</option>
              </select>
            </div>
            <div className="col">
              <button
                type="button"
                className="btn btn-solid-lg btn-border-radius"
              >
                Approva
              </button>
            </div>
          </div>
          <div className="row g-3">
            <h6>Trasferisci Nft</h6>
            <div className="col">
              <label htmlFor="AddressInput" className="form-label">
                Ricevente
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="0x00"
                id="AddressInput"
              />
            </div>
            <div className="col">
              <label htmlFor="AmountInput" className="form-label">
                Token Id
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="0"
                id="AmountInput"
              />
            </div>
            <div className="col">
              <button
                type="button"
                className="btn btn-solid-lg btn-border-radius"
              >
                Invia
              </button>
            </div>
          </div>

          <div className="row g-3">{renderNewOwner()}</div>
        </>
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
            <h4>Interfaccia ERC-721</h4>
            <p>
              (N.B. Su tesnet potrebbero esserci problemi nella Stima del Gas e
              le Tx potrebbero fallire o non inizializzarsi)
            </p>
            <form className="form-interface" onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="Supply-type" className="form-label">
                Transazioni sospendibili
              </label>
              <select
                {...register("Pausable")}
                className="form-select contract-selector"
                aria-label="Default select example"
                id="Supply-type"
              >
                <option selected>Transazioni sospendibili</option>
                <option value="pausable">Si</option>
                <option value="unPausable">No</option>
              </select>

              <button
                type="submit"
                className="btn btn-solid-lg btn-border-radius"
              >
                Seleziona
              </button>
            </form>
          </div>
          {typeInterfaceRender && renderInterface()}
          {typeInterfaceRender?.Pausable ==='pausable' && renderPausableOperation()}
          {typeInterfaceRender && renderClearInterfaceButton()}
        </div>
      </div>
    </>
  );
};

export default AppInteractNftContract;
