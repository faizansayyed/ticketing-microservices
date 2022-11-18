import { ExpirationCompleteEvent, Publisher, Subjects } from "@faizansayyedorg/common-v2"


export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete
}