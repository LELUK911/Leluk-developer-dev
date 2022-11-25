import { IemailPreventive } from "../../type/type";
import updateDatabasePreventive from "./updateDatabasePreventive";

export const SendPreventiveRequestemail = async (data: IemailPreventive) => {
  const API = process.env.NEXT_PUBLIC_API_EMAIL;
  updateDatabasePreventive(data.template_params);
  try {
    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    if ((await res.statusText) === "OK") {
      updateDatabasePreventive(data.template_params);
      return res;
    } else {
      throw new Error("error sending email");
    }
  } catch (error) {
    console.log(error);
    return { response: error };
  }
};

export default SendPreventiveRequestemail;
