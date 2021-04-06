export class Payment {
    constructor(
    public cardNumber: string,
    public expiry: string,
    public cvc: string,
    public holderName: string,
    public address1: string,
    public address2: string,
    public city: string,
    public state: string,
    public zip: string,
    public phone: string
    ) {}
}