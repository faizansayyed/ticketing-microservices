import { Subjects, Publisher, PaymentCreatedEvent } from "@faizansayyedorg/common-v2";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
