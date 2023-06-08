export interface Repo {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    url: string;
    avatar_url: string;
    html_url: string;
  };
  html_url: string;
  description: string;
  created_at: string;
  updated_at: string;
  language: string;
  archived: boolean;
  forks_count: number;
  open_issues_count: number;
  stargazers_count: number;
}
