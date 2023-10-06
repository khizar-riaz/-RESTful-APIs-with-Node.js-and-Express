import {
  addNewContact,
  getContacts,
  getContactsWithID,
  updateContact,
  deleteContact,
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
    //update the contact
    .put(updateContact)
    //delete the contact
    .delete(deleteContact);
};

export default routes;
