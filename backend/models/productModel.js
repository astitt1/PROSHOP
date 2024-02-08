import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    user: {
      //the user leaving a review
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User', //user collection
    },
    name: {
      type: String,
      required: true,
    },
    rating: { type: Number, required: true },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    user: {
      //admin user
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User', //user collection
    },
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema], //1-many relationship
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
