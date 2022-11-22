import type { NextApiRequest, NextApiResponse } from "next";
const SibApiV3Sdk = require('sib-api-v3-typescript');
let apiInstance = new SibApiV3Sdk.ContactsApi()

let apiKey = apiInstance.authentications['apiKey'];

apiKey.apiKey = process.env["SEND_MAIL_API_KEY"];


const sendMail = async(email:string, name:string, booking_date:string) => {
    let createContact = new SibApiV3Sdk.CreateContact();
    createContact.email = email;
    createContact.listIds = [2];
    createContact.attributes = {
          "FIRSTNAME": name,
          "BOOKING_DATE": booking_date
    }
    apiInstance.createContact(createContact)
        .then(function(data:string) {
            console.log('API called successfully. Returned data: ' + JSON.stringify(data));
        }, 
        function(error:string) {
        console.error(error);
        });
}


export default (sendMail);



