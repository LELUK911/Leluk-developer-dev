import createRecordAirtable from './updateDatabaseEmail'
import { Iemail } from "../../type/type";





const sendEmail = async (data: Iemail) => {

    const API = process.env.NEXT_PUBLIC_API_EMAIL
    try {
    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  })
  if (await res.text() === 'OK') {
    createRecordAirtable({name : data.template_params.from_name,
        Email :data.template_params.email,
        Object :data.template_params.object,
        Describe:data.template_params.describe})
    return res;
  } else {
    throw new Error('error sending email')
  };
  } catch (error) {
    console.log(error);
    return {response: error };
  }
};

export default sendEmail;
