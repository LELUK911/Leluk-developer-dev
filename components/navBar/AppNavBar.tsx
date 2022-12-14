import Link from "next/link";
import { contacts, creatorNft, creatorTokenERC20, preventive, workingProgress } from "../linkAddress/linkAddress";
const AppNavBar: React.FC = () => {
  return (
    <nav className="nav-bar fixed-top">
      <div className="row nav-row">
        <div className="col">
          <h1 className="title-page">
            <Link className="homeLink" href={"/"}>
              LeLuk Blockchain Dev
            </Link>
          </h1>
        </div>
        <div className="nav-head col">
          <ul className="nav justify-content-end  list-navBar">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                role="button"
                aria-expanded="false"
              >
                Servizi
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    href={workingProgress}
                    passHref
                  >
                    Smartcontract personalizati
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href={creatorTokenERC20}
                    passHref
                  >
                    Creazione Token ERC-20
                  </Link>{" "}
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href={creatorNft}
                    passHref
                  >
                    Creazione Nft ERC-721
                  </Link>{" "}
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href={workingProgress}
                    passHref
                  >
                    Costruzione Dapp
                  </Link>{" "}
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href={workingProgress}
                    passHref
                  >
                    Creazione e gestione MultiSig Wallet
                  </Link>{" "}
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href={workingProgress}
                    passHref
                  >
                    WebApp
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href={preventive}
                    passHref
                  >
                    Preventivo
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                role="button"
                aria-expanded="false"
              >
                Learning
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    href={workingProgress}
                    passHref
                  >
                    Tutorial
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href={workingProgress}
                    passHref
                  >
                    Corso personalizzato
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                role="button"
                aria-expanded="false"
              >
                About
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    href={workingProgress}
                    passHref
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href={contacts} passHref>
                    Contact
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppNavBar;
