export interface IBook {
  author: string;
  id: number;
  image: string;
  reviewedBy: string;
  title: string;
}

export interface IBookDetails extends IBook {
  publishedOn: string;
  description: string;
}
