module.exports = app => {

    app.route('/')
        .get(app.status.get)
    app.route('/status')
        .get(app.status.get)

    app.route('/product')
        .get(app.product.get)
        .post(app.product.post)
    app.route('/product/:name')
        .get(app.product.getByName)
}