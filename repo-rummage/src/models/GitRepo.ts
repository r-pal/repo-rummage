export interface Repo {
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
    url: string;
    avatar_url: string;
  };
  html_url: string;
  description: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  language: string;
  forks_count: number;
  open_issues_count: number;
  watchers_count: number;
  stargazers_count: number;
  license?: {
    key: string;
    name: string;
    url: string;
  };
}