export class Coffee {
  constructor(
    public id: number,
    public name: string,
    public image: string,
    public price: string,
    public rating: number,
    public votes: number,
    public popular: boolean,
    public available: boolean
  ) {}
}
