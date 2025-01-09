import type { IUser } from "./User";

export interface IMessage {
  id: string;
  content: string;
  date: Date;
  sender: IUser["userId"];
  receiver: string;
}
