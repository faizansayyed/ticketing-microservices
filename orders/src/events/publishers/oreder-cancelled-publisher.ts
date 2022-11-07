import { Publisher, OrderCancelledEvent, Subjects } from "@faizansayyedorg/common-v2"

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent>{
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}