import * as mongoose from 'mongoose';

export interface IForum extends mongoose.Document {
  name:string;
  username:string;
  messageKind: 'question' | 'topic' | 'discussion' | 'random';
  title: string;
  text: string;
}

let formSchema = new mongoose.Schema({
  name: {
    type:String,
    required: true,
    minlength: 3
  },
  username: {
    type:String,
    required:true,
    minlength: 3
  },
  messageKind: {
    enum: ['question', 'topic', 'discussion', 'random'],
    type: String,
    required: true
  },
  title: {
    type:String,
    required:true,
    minlength:3
  },
  text: {
    type:String,
    required:true,
    minlength:20
  }
})
export default mongoose.model<IForum>('Message', formSchema);
