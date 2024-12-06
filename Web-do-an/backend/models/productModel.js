import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  old_price: { type: Number, required: true },
  new_price: { type: Number, required: true },
  sizes: { type: [String], required: true },
  image: { type: String, required: true },
  id: { type: String }, // Thêm trường `id`
}, { timestamps: true });

const productModel = mongoose.model('Product', productSchema);

export default productModel;