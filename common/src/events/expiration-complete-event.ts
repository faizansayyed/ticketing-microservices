import { Subjects } from "./subjects";


export interface ExpirationCompleteEvet {
    subject: Subjects.ExpirationComplete;
    data: {
        orderId: string;
    };
}