import {
    addNewContact,
    getContacts,
    getContactsWithID,
  } from "../controllers/crmController";
  
  const routes = (app) => {
    app
      .route("/contacts") // Changed endpoint from "/contact" to "/contacts"
      // Get all contacts
      .get((req, res, next) => {
        // Middleware
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
      }, getContacts)
  
      // Post new contact
      .post(addNewContact);
  
    app
      .route("/contacts/:contactId") // Dynamic parameter added to the endpoint
      // Get specific contact
      .get(getContactsWithID)
      .put((req, res) => res.send("PUT request successful"))
      .delete((req, res) => res.send("DELETE request successful"));
  };
  
  export default routes;
  

console.log(addNewContact);
console.log(getContacts);
console.log(getContactsWithID);