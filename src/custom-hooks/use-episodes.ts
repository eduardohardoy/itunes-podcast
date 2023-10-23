import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import podcastsApi from "../api/podcasts";
import { IPodcastEpisode } from "../types/podcasts";
import { setPlaylist, setCurrentEpisodeId } from "../data/play-list";

type TPodcastId = number | string;

export const useEpisodes = (podcastId: TPodcastId) => {
  const dispatch = useDispatch();
  const [episodes, setEpisodes] = useState<IPodcastEpisode[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchPodcast = async () => {
      try {
        const { data } = await podcastsApi.getEpisodes(podcastId);
        // El primer elemento es el podcast
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [_, ...rest] = data.results;
        dispatch(setPlaylist(rest));
        setEpisodes(rest);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    if (podcastId) {
      fetchPodcast();
    }
  }, [podcastId, dispatch]);

  const onEpisodeClick = useCallback(
    (episodeId: number) => {
      dispatch(setCurrentEpisodeId(episodeId));
    },
    [dispatch]
  );

  return { episodes, isLoading, isError, onEpisodeClick };
};
