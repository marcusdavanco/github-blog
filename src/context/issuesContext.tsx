import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Issue {
  title: string;
  body: string;
  id: number;
  created_at: string;
}

interface IssuesContextType {
  issues: Issue[];
  searchIssues: (query?: string) => Promise<void>;
}

interface IssuesProviderProps {
  children: ReactNode;
}

export const IssuesContext = createContext<IssuesContextType>(
  {} as IssuesContextType
);

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([]);

  async function fetchIssues() {
    const { data } = await api.get("/repos/marcusdavanco/blog/issues");
    setIssues(data);
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
      }}
    >
      {children}
    </IssuesContext.Provider>
  );
}
