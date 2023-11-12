export type BookAnswerType = {
	count: number; 
	next: string;
	previous: null;
	results: BookType[];
}

export type BookType = {
	id?: number;
	state?: string | [];
	created_at?: string;
	updated_at?: string;
	title: string;
	author: string;
	cover_image?: string;
	is_recommended?: boolean;
};
  