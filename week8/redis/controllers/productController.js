const Product = require("../models/products");
const redisClient = require("../config/redisdb");

exports.createProduct = async (req, res) => {
  try {
    const sellerId = req.user.id;
    const { product_name, description, price } = req.body;

    if (!product_name || !description || !price) {
      return res
        .status(400)
        .json("Missing fields.Please enter all the fields.");
    }
    const product = new Product({
      product_name,
      description,
      price,
      seller_id: sellerId,
    });
    await product.save();
    res.status(201).json({ message: "Success", data: product });
  } catch (error) {
    res.status(500).json({ message: "Failed", error: error.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const page = req.query.page;
    const limit = req.query.limit;

    const startIndex = (page - 1) * limit;

    const totalProducts = await Product.find().countDocuments();
    const totalPages = Math.ceil(totalProducts / limit);
    const products = await Product.find().skip(startIndex).limit(limit);

    if (startIndex >= totalProducts) {
      return res.status(404).json("No more products on the further pages!");
    }
    await redisClient.SETEX("allProducts", 60, JSON.stringify(products));

    res.status(200).json({
      message: "Success",
      data: products,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed", error: error.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    await redisClient.SETEX("productById", 30, JSON.stringify(product));

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Success", data: product });
  } catch (error) {
    res.status(500).json({ message: "Failed", error: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const newProductData = req.body;

    // Find the product and check if the current user is the seller
    const product = await Product.findOne({
      _id: productId,
      seller_id: req.user.id,
    });

    if (!product) {
      return res.status(404).json({
        message: "Product not found or you are not the correct seller",
      });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      newProductData,
      { new: true }
    );

    res
      .status(200)
      .json({ message: "Product updated successfully", data: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: "Failed", error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findOne({
      _id: productId,
      seller_id: req.user.id,
    });

    if (!product) {
      return res.status(404).json({
        message: "Product not found or you are not the correct seller",
      });
    }
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Product deleted successfully, " });
  } catch (error) {
    res.status(500).json({ message: "Failed", error: error.message });
  }
};
