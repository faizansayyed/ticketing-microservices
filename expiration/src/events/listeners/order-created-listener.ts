import { Listener, OrderCreatedEvent, Subjects } from "@faizansayyedorg/common-v2";
import { Message } from "node-nats-streaming";
import { queueGroupName } from './queue-group-name';

export class OrderCreatedListener extends Listener<OrderCreatedEvent>{
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
    queueGroupName = queueGroupName;

    onMessage(data: OrderCreatedEvent['data'], msg: Message) {

    }


}