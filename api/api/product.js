module.exports = app => {
  const prodModel = app.model.product

  const get = (req, res) => {

    prodModel.find()
    .then(prods => res.json(prods))
    .catch(err => res.status(500).send(err))
    
  }
  
  const getByName = (req, res) => {
    prodModel.findOne({ name: req.params.name }).exec()
      .then(prods => res.json(prods))
      .catch(err => res.status(500).send(err))
    
  }

  const post = async (req, res) => {
    const prod = { ...req.body }
    if (req.params.id) prod.id = req.params.id

    const prodDB = await prodModel.findOne({ name: prod.name }).exec()

    if (prodDB) {
      return res.status(404).send("Produto já cadastrado")
    }

    var product = new prodModel({
      name: prod.name,
      description: prod.description
    })
    product.save(function (err, book) {
      if (err) res.status(500).send(err);
      res.status(204).send()
    });
  }

  return {
    get,
    getByName,
    post
  }
}