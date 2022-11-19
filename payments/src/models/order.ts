import { OrderStatus } from "@faizansayyedorg/common-v2";
import mongoose from "mongoose";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";



interface OrderAttr {
    id: string;
    version: number;
    userId: string;
    price: number;
    status: OrderStatus;
}

interface OrderDoc extends mongoose.Document {
    version: number;
    userId: string;
    price: number;
    status: OrderStatus;
}

interface OrderModel extends mongoose.Model<OrderDoc> {
    bulid(attr: OrderAttr): OrderDoc;
}

const orderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    }
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id
            delete ret._id
        }
    }
});

orderSchema.set('versionKey', 'version');
orderSchema.plugin(updateIfCurrentPlugin)

orderSchema.statics.build = (attr: OrderAttr) => {
    return new Order({
        _id: attr.id,
        version: attr.version,
        price: attr.price,
        userId: attr.userId,
        status: attr.status
    })
}

const Order = mongoose.model<OrderDoc, OrderModel>('Order', orderSchema);

export { Order }