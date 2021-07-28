import { Guid } from "guid-typescript";

class Todo {
  id: Guid;
  isCompleted: boolean;
  description: string;
  projectId: number; // for future usage
}


console.log('Todo module has been loaded');