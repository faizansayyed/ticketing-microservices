import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
  requireAuth,
  validateRequest,
  BadRequestError,
  NotAuthorizedError,
  NotFoundError,
  OrderStatus,
} from '@faizansayyedorg/common-v2';
import { Order } from '../models/order';
import { stripe } from '../stripe';
import { Payment } from '../models/payment';

const router = express.Router();

router.post(
  '/api/payments',
  requireAuth,
  [body('token').not().isEmpty(), body('orderId').not().isEmpty()],
  validateRequest,
  async (req: Request, res: Response) => {
    const { token, orderId } = req.body;

    const order = await Order.findById(orderId);

    if (!order) {
      throw new NotFoundError();
    }
    if (order.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }
    if (order.status === OrderStatus.Cancelled) {
      throw new BadRequestError('Cannot pay for an cancelled order');
    }

    const charge = await stripe.charges.create({
      amount: order.price,
      currency: 'inr',
      source: token,
    })

    console.log({ charge })

    const payment = Payment.build({
      orderId,
      stripeId: charge.id,
    });
    await payment.save();

    res.status(201).send({ success: true });
  }
);

export { router as createChargeRouter };
