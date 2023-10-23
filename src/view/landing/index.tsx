import { useState } from "react";
import PageContainer from "../../components/page-container";
import Searchbar from "../../components/searchbar";
import { usePodcasts } from "../../custom-hooks/use-podcasts";
import PodcastsList from "./components/podcasts-list";
import Spinner from "../../components/spinner";
import Error from "../../components/error";

const Landing = () => {
  const [searchValue, setSearchValue] = useState("");
  const { podcasts, onNavigateToPodcast, isLoading } = usePodcasts(searchValue);

  return (
    <PageContainer>
      <Searchbar onChange={setSearchValue} />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {podcasts.length > 0 ? (
            <PodcastsList
              podcasts={podcasts}
              onNavigateToPodcast={onNavigateToPodcast}
            />
          ) : (
            <>
              {searchValue && (
                <Error
                  title={`No results found for ${searchValue}`}
                  description="Please make sure your words are spelled correctly, or use fewer or different keywords."
                />
              )}
            </>
          )}
        </>
      )}
    </PageContainer>
  );
};

export default Landing;
