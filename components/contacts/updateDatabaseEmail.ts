import Airtable from "airtable";
import { IemailTable } from "../../type/type";



const createRecordAirtable = (data:IemailTable)=>{

  
    const  base = new Airtable({apiKey:process.env.NEXT_PUBLIC_AIRTABLE_API_KEY }).base('appoYaDzrGbxtzral');
    
    
    base('Send me Email').create([
      {
        "fields": {
          "name": `${data.name}`,
          "Email": `${data.Email}`,
          "Object": `${data.Object}`,
          "Describe": `${data.Describe}`
        }
      }
    ], function(err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records?.forEach(function (record) {
        console.log(record.getId());
      });
    });
}


export default createRecordAirtable
