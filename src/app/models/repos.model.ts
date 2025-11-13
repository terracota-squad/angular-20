export interface Repo {
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
}

export interface Repos {
  items: Repo[];
}
