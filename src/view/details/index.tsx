import { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectPodcastImage } from "../../data/podcast";
import { PageContainer } from "../../components/page-container/styled";
import Searchbar from "../../components/searchbar";
import { useEpisodes } from "../../custom-hooks/use-episodes";
import EpisodesList from "./components/episodes-list";
import PodcastImage from "./components/image";
import Title from "./components/title";
import {
  selectCurrentEpisodeId,
  selectIsPlaying,
  setIsPlaying,
  setPlayFormStart,
} from "../../data/play-list";

const Details = () => {
  const { podcastId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentEpisodeId = useSelector(selectCurrentEpisodeId);
  const podcastImage = useSelector(selectPodcastImage);
  const isPlayingPlaylist = useSelector(selectIsPlaying);
  const { episodes, onEpisodeClick } = useEpisodes(podcastId!);

  const onNavigateBack = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onActionButtonClick = useCallback(() => {
    if (!currentEpisodeId) {
      dispatch(setPlayFormStart());
    }
    dispatch(setIsPlaying(!isPlayingPlaylist));
    const audioElement = document.querySelector("audio");
    if (isPlayingPlaylist) {
      audioElement?.pause();
    } else {
      audioElement?.play();
    }
  }, [isPlayingPlaylist, dispatch, currentEpisodeId]);

  return (
    <PageContainer>
      <Searchbar
        canNavigateBack
        onChange={() => {}}
        onNavigateBack={onNavigateBack}
        disabled
      />
      <PodcastImage imageSrc={podcastImage} />
      <Title
        title={episodes[0]?.collectionName}
        isPlaying={isPlayingPlaylist}
        onActionButtonClick={onActionButtonClick}
      />
      <EpisodesList episodes={episodes} onEpisodeClick={onEpisodeClick} />
    </PageContainer>
  );
};

export default Details;
