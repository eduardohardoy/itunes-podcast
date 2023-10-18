import { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Page from "../../components/page-container";
import Searchbar from "../../components/searchbar";
import { useEpisodes } from "../../custom-hooks/use-episodes";
import EpisodesList from "../../components/episodes-list";
import PodcastImage from "./components/image";
import Title from "./components/title";

const Details = () => {
  const { podcastId } = useParams();
  const navigate = useNavigate();
  const { episodes, isLoading, isError } = useEpisodes(podcastId!);

  const onNavigateBack = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <Page>
      <Searchbar
        canNavigateBack
        onChange={() => {}}
        onNavigateBack={onNavigateBack}
      />
      <PodcastImage imageSrc="https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/80/05/0e/80050e51-a5bb-eb7e-4e17-a4da84e08da9/mza_6310917840779059433.png/300x600bb.jpg" />
      <Title title={episodes[0]?.collectionName} />
      <EpisodesList episodes={episodes} />
    </Page>
  );
};

export default Details;
