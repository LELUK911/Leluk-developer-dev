import Link from "next/link"
import { gitHubLink, linkedinLink, twitterLink } from "../linkAddress/linkAddress";

const AppFooter: React.FC = () => {
  return (
    <div className="row appFooter">
        <div className="row">
            <div className="col">
                <h3>LeLuk Blockchain Dev</h3>
            </div>
            <div className="col col2">
                <div className="text-start">
                    <p className="list-title text-start">
                        Servizi
                    </p>
                    <ul className='list'>
                        <li className='list-group-item'>SmartContract Personalizati</li>
                        <li className='list-group-item'>Creazione Token e Nft</li>
                        <li className='list-group-item'>Creazione Dapp</li>
                        <li className='list-group-item'>Creazione e gestione MultiSig-wallet</li>
                        <li className='list-group-item'>WebApp</li>
                    </ul>
                </div>
            </div>
            <div className="col col3">
            <div className="text-start">
                    <p className="list-title text-start">
                        Tutorial
                    </p>
                    <ul className='list'>
                        <li className='list-group-item'>Fai da te</li>
                        <li className='list-group-item'>1 to 1</li>
                    </ul>
                </div>
            </div>
                <div className="col socials">
                    <div className="footer-col third">
                    <span className="fa-stack">
                        <Link href={twitterLink}>
                            <i className="fas fa-circles fa-stack-2x "></i>
                            <i className="fab fa-twitter fa-stack-1x"></i>
                        </Link>
                    </span>
                    <span className="fa-stack">
                        <Link href={linkedinLink}>
                            <i className="fas fa-circles fa-stack-2x "></i>
                            <i className="fab fa-linkedin fa-stack-1x"></i>
                        </Link>
                    </span>
                    <span className="fa-stack">
                        <Link href={gitHubLink}>
                            <i className="fas fa-circles fa-stack-2x "></i>
                            <i className="fab fa-github fa-stack-1x"></i>
                        </Link>
                    </span>
                    <span className="fa-stack">
                        <Link href='#yourLink'>
                            <i className="fas fa-circles fa-stack-2x "></i>
                            <i className="fab fa-medium fa-stack-1x"></i>
                        </Link>
                    </span>
                    <span className="fa-stack">
                        <Link href='#yourLink'>
                            <i className="fas fa-circles fa-stack-2x "></i>
                            <i className="fab fa-facebook-f fa-stack-1x"></i>
                        </Link>
                    </span>
         </div>
            </div>
        </div>
    </div>
  )
}


export default AppFooter;