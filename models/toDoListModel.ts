import * as mongoose from 'mongoose';

export interface IToDoList extends mongoose.Document {
  name: string;
  description: string;
}

let toDoSchema = new mongoose.Schema({
  name: {
    type:String,
    required:true,
    minlength:3
  },
  description: {
    type:String,
    required:true,
    minlength:2,
  }
});

export default mongoose.model<IToDoList>('MyToDo', toDoSchema);
