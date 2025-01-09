import type { IMessage } from "../src/interfaces/Message";

const key = "fake-backend";
const users = "";
const messages: IMessage[] = [
  {
    content: "Hello 1",
    id: "1",
    date: new Date(),
    sender: "1",
    receiver: "2",
  },
  {
    content: "Hello 1",
    id: "2",
    date: new Date(),
    sender: "2",
    receiver: "1",
  },
  {
    content: "Hello 1",
    id: "3",
    date: new Date(),
    sender: "1",
    receiver: "2",
  },
  {
    content: "Hello 1",
    id: "4",
    date: new Date(),
    sender: "2",
    receiver: "1",
  },
];
