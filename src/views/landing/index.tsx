import { useState } from "react";
import Page from "../../components/page-container";
import Searchbar from "../../components/searchbar";
import { usePodcasts } from "../../custom-hooks/use-podcasts";
import PodcastsList from "../../components/podcasts-list";

const Landing = () => {
  const [searchValue, setSearchValue] = useState("");
  const { podcasts, isLoading, isError } = usePodcasts(searchValue);

  return (
    <Page>
      <Searchbar onChange={setSearchValue} />
      <PodcastsList podcasts={podcasts} />
    </Page>
  );
};

export default Landing;
