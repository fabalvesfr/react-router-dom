import { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";

export const Home = () => {
  const { userName } = useContext(AppContext);

  const getCatFact = async () => {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    return data;
  };
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: "cat-fact-query",
    queryFn: getCatFact,
  });

  if (isError) {
    return <h1>Sorry, there was an error fetching the data.</h1>;
  }

  if (isLoading) {
    return (
      <h1>
        Loading...
        <br /> Wait until fetching is done.
      </h1>
    );
  }

  return (
    <div>
      <h1>This is the home page for {userName}</h1>
      <h2>
        And this is a random cat fact for you sourced from the{" "}
        <a href="https://catfact.ninja/fact" target="_blank">
          Cat Fact API
        </a>{" "}
        :
        <br />
        {data?.fact}
      </h2>
      <button onClick={refetch}>Update Cat Fact</button>
    </div>
  );
};
