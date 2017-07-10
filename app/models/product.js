import mongoose, {Schema} from 'mongoose';

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: 10,
        required: true
    }
});

export default mongoose.model('Product', ProductSchema);