import { SearchInputContainer } from "./styles";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { api } from "../../lib/axios";
import { useForm } from "react-hook-form";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

interface Issue {
  title: string;
  body: string;
  id: number;
  created_at: string;
}

export function SearchInput() {
  const [issues, setIssues] = useState<Issue[]>([]);

  async function fetchIssues(query?: string) {
    const { data } =
      await api.get(`/search/issues?q=${query}repo:marcusdavanco/blog 
    `);
    setIssues(data);
    console.log("SEARCHRESULTS", issues);
  }

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchIssues(data: SearchFormInputs) {
    await fetchIssues(data.query);
  }

  return (
    <SearchInputContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <header>
        <p>Publicações</p>
        <span>6 publicações</span>
      </header>
      <input placeholder="Buscar conteúdo" {...register("query")} />
    </SearchInputContainer>
  );
}
