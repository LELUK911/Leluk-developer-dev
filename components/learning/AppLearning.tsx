import React from "react";
import Image from "next/image";
import Link from "next/link";
import { workingProgress } from "../linkAddress/linkAddress";

const AppLearning: React.FC = () => {
  return (
    <div className="container learning-box">
      <div className="row">
        <div className="col col-image">
          <Image
            src="/images/learningImage.jpg"
            alt="Learn image"
            width={650}
            height={500}
          />
        </div>
        <div className="col textCol">
          <h1 className="h1-large title-1">
            Vuoi imparare a costruire Smartcontract?
          </h1>
          <hr />

          <h4>Segui le mie guide</h4>
          <p className="p-large ">
            Attraverso le mie guide apprenderai tutte le basi per poter
            costruire solidi Smartcontract e come costruire il tuo personale
            metodo di sviluppo.
          </p>
          <h4>Necessiti di supporto durante l apprendimento?</h4>
          <p className="p-large">
            Preferisci un percorso di apprendimento personalizato? possiamo
            stilare un piano di studio personalizzato con il mio supporto per
            ogni tuo dubbio.
          </p>
          <Link href={workingProgress} passHref>
            <button
              type="button"
              className="btn btn-solid-lg btn-border-radius"
             
            >
              Scopri di più
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default AppLearning;
