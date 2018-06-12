const routes = (app) => {
   
    app.route('/contact')
    .get((req, res) => {
        //middle ware
        console.log(`Request from ${req.orignalUrl}`)
        console.log(`Request from ${req.method}`)
        next();
    }, (req, res, next) => {
        res.send('GET request successful!')
    })
   
    .post((req, res) =>
    res.send('POST request successful!'));

    app.route('/contact/:contactId')
    .put((req, res) =>
    res.send('POST request successful!'))

    .delete((req, res)  =>
    res.send('DELETE request successful!'));
}

export default routes;

