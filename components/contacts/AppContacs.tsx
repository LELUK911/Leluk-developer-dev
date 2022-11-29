import Image from "next/image";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Iemail} from "../../type/type";
import AllertSubmit from "../chakraComponent/alert";
import sendEmail from "./sendEmail";

const AppContacs: React.FC = () => {
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [actionAllert, setActionAllert] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const dataEmail: Iemail = {
      service_id: process.env.NEXT_PUBLIC_SERVICE_ID_EMAIL || "",
      template_id: process.env.NEXT_PUBLIC_TEMPLATE_ID_EMAIL || "",
      user_id: process.env.NEXT_PUBLIC_PUBLICK_KEY || "",
      template_params: {
        from_name: data.Name,
        email: data.Email,
        object: data.Object,
        describe: data.Describe,
      },
    };

    if (!actionAllert) {
      setActionAllert(true);
      const res = await sendEmail(dataEmail);
      if (!res) {
        alert("email send error");
        setActionAllert(false);
        return;
      }
    } else {
      setActionAllert(false);
    }
    console.log(actionAllert);
    setTimeout(() => {
      setActionAllert(false);
    }, 6000);
  };

  return (
    <div className="row  contactForm">
      {actionAllert && AllertSubmit()}

      <div className="col-6 align-center colText">
        <h2 className="TitleForm">Scrivimi un email</h2>
        <form className="contact-fieldset" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Nome / Azienda</label>
            <input
              {...register("Name")}
              type="text"
              className="form-control"
              id="InputName"
              aria-describedby="NameHelp"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              {...register("Email")}
              type="email"
              className="form-control"
              id="InputEmail1"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Oggetto</label>
            <input
              {...register("Object")}
              type="text"
              className="form-control"
              id="InputObject"
              required
              aria-describedby="requestHelp"
            />
          </div>
          <div className="form-floating mb-3">
            <textarea
              {...register("Describe")}
              className="form-control inputDescribe"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
            ></textarea>
            <label aria-describedby="floatingTextarea2">Descrizione</label>
          </div>
          <button
            type="submit"
            disabled={actionAllert}
            className="btn btn-primary"
          >
            Invia
          </button>
        </form>
      </div>
      <div className="col-6 colImage">
        <Image
          src="/images/pexels-taryn-elliott-4112363.jpg"
          alt="send me one email"
          width={300}
          height={500}
          priority
        />
      </div>
    </div>
  );
};

export default AppContacs;
