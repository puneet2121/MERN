const Category = require('../models/category');
exports.getCategoryById = (req,res, next,id) => {

  Category.findById(id).exec((err,category) => {
    if(err) {
      return res.status(400).json({
        error: 'Category not found in DB'
      })
    }
    req.category = category;
    next();
  })
  next();
}

exports.createCategory = (req,res) => {
  const category = new Category(req.body);
  category.save((err,category) => {
    if(err) {
      return res.status(400).json({
        error: 'Not able to save category in DB'
      });
    }
    res.json({category})
  })

}

exports.getCategory = (req,res) => {
  return res.json(req.category);
}

exports.getAllCategory = (req,res) => {
  Category.find().exec((err, items) => {
    if(err) {
      return res.status(400).json({
        error: 'Not found(categories)'
      });
    }
    res.json(items);
  });
}

exports.updateCategory = (req,res) => {
  const category = req.category;
  category.name = req.body.name;

  category.save((err,updatedCategory) => {
    if(err) {
      return res.status(400).json({
        error: 'Unable to update the category'
      });
    }
    res.json(updatedCategory);
  })
}

exports.deleteCategory = (req,res) => {
  const category = req.category;
  category.remove((err,category) => {
    if(err) {
      return res.status(400).json({
        error: 'Unable to delete the category)'
      });
    }
    res.json({
      message: `this ${category} was sucessfully deleted`
    });
  });
}