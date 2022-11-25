import Airtable from "airtable";

import { ITablePreventive } from "../../type/type";

const updateDatabasePreventive = (data : ITablePreventive) => {
  const Airtable = require("airtable");
  const base = new Airtable({apiKey:process.env.NEXT_PUBLIC_AIRTABLE_API_KEY }).base("appoYaDzrGbxtzral");



  base('Preventive').create({
    "Email send": `${data.Email_send}`,
    "object": `${data.Object}`,
    "Service": `${data.Service}`,
    "Budget": `${data.Budget}`,
    "DeadLine": `${data.DeadLine}`,
    "Describe": `${data.Describe}`,
    "Priority": `${data.Priority}`,
    "Name": `${data.Name}`,
  }, {typecast: true}, function(err:any, record:any) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(record.getId());
  });

};

export default updateDatabasePreventive;
