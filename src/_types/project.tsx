export interface Project {
  id: number;
  uuid: string;
  name: string;
  price: number;
}

export interface CreateProject {
  name: string;
  price: number;
}
