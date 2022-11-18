import { ExpirationCompleteEvet, Publisher, Subjects } from "@faizansayyedorg/common-v2"


export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvet> {
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete
}