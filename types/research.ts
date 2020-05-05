export type Result = {
  id: string;
  title: string;
  link: string;
  star: boolean;
  read: boolean;
};

export type Results = {
  [key: string]: Result;
};

export type Search = {
  id: string;
  q: string;
  results: Results;
  show: boolean;
  createdAt: string;
};

export type Research = {
  id: string;
  name: string;
  searches: Search[];
  notes: string;
  createdAt: string;
};
