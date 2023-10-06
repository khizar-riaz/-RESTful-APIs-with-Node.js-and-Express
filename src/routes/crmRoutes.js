import {
  addNewContact,
  getContacts,
  getContactswithID,
} from "../controllers/crmController";
const routes = (app) => {
  app
    .route("/contact")
    //get all contacts
    .get((req, res, next) => {
      //middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getContacts)

    //post new contact
    .post(addNewContact);

  app
    .route("/contact/contactId")
    //get specific contact
    .get(getContactswithID)
    .put((req, res) => res.send("PUT request successfull"))

    .delete((req, res) => res.send("DELETE request successfull"));
};

export default routes;
