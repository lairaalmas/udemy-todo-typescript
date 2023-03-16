export class Todo {
  text: string;
  id: string;

  constructor(text: string) {
    this.text = text;
    this.id = new Date().toString();
  }
}
