import { screen, render } from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

test("displays the primary language of the repository", () => {
  const repository = {
    language: "Javascript",
    stargazers_count: 10,
    forks: 30,
    open_issues: 1,
  };
  render(<RepositoriesSummary repository={repository} />);

  const language = screen.getByText("Javascript");

  expect(language).toBeInTheDocument();
});

test("displays information about the repository", () => {
  const repository = {
    language: "Javascript",
    stargazers_count: 10,
    forks: 30,
    open_issues: 1,
  };
  render(<RepositoriesSummary repository={repository} />);

  for (let key in repository) {
    const value = repository[key];
    const element = screen.getByText(new RegExp(`\\b${value}\\b`));
    expect(element).toBeInTheDocument();
  }
});
