import { Person } from "./person";

export class Player implements Person {
    name!: string;
    age?: number | undefined;
    formatName() {
        return this.name.toUpperCase();
    }

}