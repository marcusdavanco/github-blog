import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

export interface Issue {
  title: string;
  body: string;
  number: number;
  created_at: string;
  comments?: number;
  user?: {
    login: string;
  };
}

interface IssuesContextType {
  issues: Issue[];
  searchIssues: (query?: string) => Promise<void>;
  fetchIssueById: (id: string) => Promise<void>;
  currentIssue: Issue;
}

interface IssuesProviderProps {
  children: ReactNode;
}

export const IssuesContext = createContext<IssuesContextType>(
  {} as IssuesContextType
);

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [currentIssue, setCurrentIssue] = useState<Issue>({} as Issue);

  async function fetchIssues() {
    const { data } = await api.get("/repos/marcusdavanco/blog/issues");
    setIssues(data);
  }

  async function fetchIssueById(id: string) {
    const { data } = await api.get(`/repos/marcusdavanco/blog/issues/${id}`);
    setCurrentIssue(data);
  }

  async function searchIssues(query?: string) {
    const {
      data: { items },
    } = await api.get(`/search/issues?q=${query}repo:marcusdavanco/blog 
    `);
    setIssues(items);
  }

  useEffect(() => {
    fetchIssues();
    console.log("Fetch issues");
  }, []);

  return (
    <IssuesContext.Provider
      value={{
        issues,
        searchIssues,
        fetchIssueById,
        currentIssue,
      }}
    >
      {children}
    </IssuesContext.Provider>
  );
}
