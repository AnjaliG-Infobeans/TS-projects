import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
      <h1>User Detail</h1>
      <div>${this.model.get('name')}: ${this.model.get('age')}</div>
    `
  }
}