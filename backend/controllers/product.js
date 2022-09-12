const Product = require('../models/product')
const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');

exports.getProductById = (req, res, next, id) => {
  Product.findById(id)
  .populate('category')
  .exec((err,product) => {
    if(err) {
      return res.status(400).json({
        error:'Product not found'
      })
    }
    req.product = product;
    next();
  })
}

exports.createProduct = (req,res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req,(err, fields, file) => {
    if(err) {
      return res.status(400).json({
        error: "Problems with Image"
      });
    }
    //destructure the fields
    const {name, description, price, category, stock, } = fields;
    if(
      !name ||
      !description ||
      !price ||
      !category ||
      !stock
    ) {
      return res.status(400).json( {
        error: 'Please include all fields'
      });
    }

    let product = new Product(fields)

    //handle the file
    if(file.photo) {
      if(file.photo.size > 3000000) {
        return res.status(400).json({
          error:'file size is too big'
        })
      }
      product.photo.data = fs.readFileSync(file.photo.path)
      product.photo.contentType = file.photo.type
    }
    // save to DB
    product.save((err,product) => {
      if(err) {
        res.status(400).json({
          error: 'Saving product in DB failed'
        })
      }
      res.json(product);
    })
  })
}