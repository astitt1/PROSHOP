import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import products from "./data/products.js";
//models
import Product from "./models/productModel.js";
import User from "./models/userModel.js";
import Order from "./models/orderModel.js";

const importData = async () => {
  try {
    //delete everything from db first
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    //create users
    const createUsers = await User.insertMany(users);
    //get the admin user
    const adminUser = createdUser[0]._id;

    //insert the products
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleProducts);

    console.log("data imported");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
  }
};

const destroyData = async () => {
  try {
    //delete everything from db first
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    process.exit();
  } catch (error) {
    console.error(`${error}`)
  }
};

if (process.argv[2]=== '-d') {
    destroyData()
}else {
    importData()
}