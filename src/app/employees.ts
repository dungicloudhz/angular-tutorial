export interface IEmployee {
  id: number;
  name: string;
  age: number;
}

export interface IEntries {
  count: number;
  entries: {
    API: string;
    Description: string;
    Auth: string;
    Cors: string;
    HTTPS: boolean;
    Link: string;
    Category: string;
  }
}
