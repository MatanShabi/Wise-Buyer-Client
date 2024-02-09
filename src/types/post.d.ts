interface IPostUserData extends Pick<IUser, 'firstName' | 'lastName' | 'pictureUrl' | '_id'> { }

export interface IPost {
  _id: string;
  title: string;
  catalog: string;
  description: string;
  link?: string;
  pictureUrl?: string;
  price: number;
  user?: IPostUserData;
  commentsAmount: number;
}
