import { addNewContact } from "../controllers/crmController";
const routes = (app) => {
 app.route('/contact')
 .get((req , res) =>
 res.send('GET request successfull')
 )

 .post(addNewContact);

 app.route('/contact/contactId')
 .put((req , res) =>
 res.send('PUT request successfull')
 )

 .delete((req , res) =>
 res.send('DELETE request successfull')
 )
}

export default routes;