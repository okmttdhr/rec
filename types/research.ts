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

export type Searches = {
  [key: string]: Search;
};

export type Research = {
  id: string;
  name: string;
  searches: Searches;
  notes: string;
  createdAt: string;
};

export type Researches = {
  [key: string]: Research;
};
