import Link from "next/link";
import React from "react";
import AppNavBarEVNM from "./navBar/AppNavBarEVNM";

const AppTokenERC20 = () => {
  return (
    <div className="row token-erc20Area">
      <AppNavBarEVNM />
      <div className="describ-token">
        <h1>Section under construction</h1>
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
        <form>
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">
              Nome
            </label>
            <input type="email" className="form-control" id="nameInput" />
          </div>
          <div className="mb-3">
            <label htmlFor="tickerInput" className="form-label">
              Tiker
            </label>
            <input type="text" className="form-control" id="tickerInput" />
          </div>
          <div className="mb-3">
            <label htmlFor="supplyInput" className="form-label">
              Max Circolante
            </label>
            <input type="number" className="form-control" id="supplyInput" />
          </div>

          

          <div className="mb-3">
            <label className="form-label">Circolante</label>
            <select className="form-select" aria-label="Default select example">
              <option value="1">fisso</option>
              <option value="2">variabile</option>
            </select>
          </div>

          <div className="mb-3 form-check">
            <input
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
            <input type="text" className="form-control" id="recipientInput" />
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="autoSetAddressCheck"
            />
            <label className="form-check-label" htmlFor="autoSetAddressCheck">
              Il destinatario è il wallet connesso
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            Deploy  (contract not still deploy)
          </button>
        
        </form>
        <div className="row Plus-service-section">

            <h4>Token personalizzato</h4>
            <p>
              Se necessiti di un token con funzioni customizzate, oppure di un
              infrastruttura che utilizzi il tuo token ERC-20 contattami per un
              preventivo.
            </p>
            <div className="col6">
            <button type="submit" className="btn btn-primary Plus-service-section-bt">
              Contattami
            </button>
            </div>
            
         
          </div>
        </div>
      </div>
    </div>
  );
};
export default AppTokenERC20;
