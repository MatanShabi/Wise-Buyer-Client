export interface IComment {
  _id?: string;
  description: string;
  user: ObjectId;
  post: ObjectId;
}
