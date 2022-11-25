import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { IemailPreventive, ITablePreventive } from "../../type/type";
import SendPreventiveRequestemail from "./sendPreventiveRequestemail";

const AppPreventive: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

const handleChange: SubmitHandler<FieldValues> = async (data) =>{
  
  const dataEmail:IemailPreventive = {
    service_id: process.env.NEXT_PUBLIC_SERVICE_ID_EMAIL || "",
    template_id: process.env.NEXT_PUBLIC_TEMPLATE_ID_EMAIL_PREVENTIVE||"",
    user_id: process.env.NEXT_PUBLIC_PUBLICK_KEY||"",
    template_params: {
      Email_send: data.Email_send,
      Object:data.Object,
      Service: data.Service,
      Budget: data.Budget,
      DeadLine : data.DeadLine,
      Describe : data.Describe,
      Priority : data.Priority,
      Name: data.Name ,
    }
  }
  //console.log(dataEmail) 
   await SendPreventiveRequestemail(dataEmail);
  
}
//preventiveForm
  return (
  
      <div className="row preventiveForm">
        <form className="form-inline" onSubmit={handleSubmit(handleChange)}>
          <fieldset>
            <h2 className="TitleForm">Preventivo:</h2>
            <div className="form-group col-md-6">
              <label aria-describedby="inputName">Nome / Azienda</label>
              <input
                {...register("Name")}
                type="text"
                className="form-control"
                id="inputName"
                placeholder="Nome"
              />
            </div>
            <div className="form-group col-md-6">
              <label aria-describedby="inputEmail4">Email</label>
              <input
                {...register("Email_send")}
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
              />
            </div>
            <div className="form-group col-md-6">
              <label aria-describedby="inputObject">Oggetto</label>
              <input
                {...register("Object")}
                type="text"
                className="form-control"
                id="inputObject"
                placeholder="Oggetto"
              />
            </div>

            <div className="form-group row">
              <div className="col-md-6">
                <label>Servizio richiesto</label>
                <select {...register("Service")} className="form-control">
                  <option value="">Tipo di Servizio</option>
                  <option value="Pagina web">Pagina Web</option>
                  <option value="Multi sig-wallet">Multi Sig-wallet</option>
                  <option value="ERC-">Token ERC-20</option>
                  <option value="ERC-721">Token ERC-721 (NFT)</option>
                  <option value="ERC-777">Token ERC-777 (Semi fungible)</option>
                  <option value="marketplace">MarketPlace NFT/SFT</option>
                  <option value="smartcontrac pers">
                    SmartContract personalizzato
                  </option>
                  <option value="Dap completa">Dap DEFI</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <label>Priorità</label>
                <select {...register("Priority")} className="form-control">
                  <option value="">livello</option>
                  <option value="High">Alta</option>
                  <option value="Average">Media</option>
                  <option value="Low">Bassa</option>
                </select>
              </div>
            </div>
            <div className="form-group col-md-6">
              <div className="col-sm-10">
                <label aria-describedby="inputBudget">Budget</label>
                <input
                  {...register("Budget")}
                  type="number"
                  data-bs-input
                  className="form-control"
                  step="any"
                  min="0"
                  id="inputBudget"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <label aria-describedby="inputDeathLine">Scadenza</label>
                <input
                  {...register("DeadLine")}
                  type="date"
                  className="form-control"
                  id="inputDeathLine"
                />
              </div>
            </div>

            <div className="form-group">
              <label
                className="col-sm-4 control-label"
                aria-describedby="firstName"
              >
                Descrizione{" "}
              </label>
              <div className="col-sm-8">
                <textarea
                  {...register("Describe")}
                  className="form-control"
                  id="firstName"
                  placeholder="Descrivi la tua richiesta"
                ></textarea>
              </div>
            </div>
            <div className="clearfix"></div>

            <div className="form-group row">
              <div className="col-sm-12"></div>
            </div>
            <div className="form-group row">
              <div className="col-sm-12">
                <button type="submit" className="btn btn-default">
                  Richiedi
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    
  );
};

export default AppPreventive;
