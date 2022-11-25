import React from 'react'

const SerSmartContract: React.FC = () => {
  return (
    <div className='row smSection'>
        <div className="col-6 colCode1">
            <pre className=' text-white  bg-dark mb-3'>
                {code}
            </pre>
        </div>
        <div className="col-6 colDef1">
                <h3>Definizione Smart Contract</h3>
                <hr />
                <p>
                    {smartContractDefinition}
                </p>
       
        </div>
        <div className="row">
            
        </div>
    </div>
  )
}
export  default SerSmartContract





const code = `

pragma solidity >=0.7.0 <0.9.0;


contract Withdraw {

    uint public _balance;

    function deposit() public payable {
    
        _balance = msg.value;
    }

    function balance()public view returns(uint){
        return address(this).balance;
    }

    function withdraw()public{
        (bool success,) = msg.sender.call{value:_balance}("");
        require(success,"Transaction fail");
        _balance = 0;
    }
}
`

const smartContractDefinition = `

 Un contratto intelligente è un contratto auto-eseguibile con i termini dell'accordo tra acquirente e venditore scritti direttamente in righe di codice.
 Il codice e gli accordi in esso contenuti esistono attraverso una rete blockchain distribuita e decentralizzata. Il codice controlla l'esecuzione
 e le transazioni sono tracciabili e irreversibili. I contratti intelligenti consentono di effettuare transazioni e accordi affidabili
  tra parti disparate e anonime senza la necessità di un'autorità centrale, di un sistema legale o di un meccanismo di applicazione esterno. Mentre la tecnologia blockchain è stata pensata principalmente come la base per bitcoin, si è evoluta ben oltre la base della valuta virtuale.`