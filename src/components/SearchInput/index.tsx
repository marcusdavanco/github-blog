import { SearchInputContainer } from "./styles";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { IssuesContext } from "../../context/issuesContext";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchInput() {
  const { issues, searchIssues } = useContext(IssuesContext);

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchIssues(data: SearchFormInputs) {
    await searchIssues(data.query);
  }

  return (
    <SearchInputContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <header>
        <p>Publicações</p>
        <span>
          {issues.length
            ? issues.length > 1
              ? `${issues.length} publicações`
              : `${issues.length} publicação`
            : "Nenhuma publicação"}{" "}
        </span>
      </header>
      <input placeholder="Buscar conteúdo" {...register("query")} />
    </SearchInputContainer>
  );
}
