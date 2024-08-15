import { Shape } from "./app";

export class Circle implements Shape
{
   radius:number;
   area:number;
   name:string;
constructor(name:string,radius:number)
{
this.radius=radius;
this.area=0;
this.name=name;
}
calculateArea(): void {
    this.area= 3.14*this.radius*this.radius;
}
}

