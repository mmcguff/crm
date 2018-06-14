import { addNewContact, getContacts, getContactWithID } from "../controllers/crmController";

const routes = (app) => {
   
    app.route('/contact')
    .get((req, res, next) => {
        //middle ware
        console.log(`Request from ${req.originalUrl}`)
        console.log(`Request from ${req.method}`)
        next();
    }, getContacts)
   
    //POST endpoint
    .post(addNewContact);

    app.route('/contact/:contactId')
    //get specific Contact
    .get(getContactWithID)

    //put request
    .put((req, res) =>
    res.send('PUT request successful!'))

    //delete request
    .delete((req, res)  =>
    res.send('DELETE request successful!'));
}

export default routes;

