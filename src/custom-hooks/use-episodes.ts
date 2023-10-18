import { useEffect, useState } from "react";
import podcastsApi from "../api/podcasts";
import { IPodcastEpisode } from "../types/podcasts";

type TPodcastId = number | string;

export const useEpisodes = (podcastId: TPodcastId) => {
  const [episodes, setEpisodes] = useState<IPodcastEpisode[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchPodcast = async () => {
      try {
        const { data } = await podcastsApi.getEpisodes(podcastId);
        setEpisodes(data.results);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    if (podcastId) {
      fetchPodcast();
    }
  }, [podcastId]);

  return { episodes, isLoading, isError };
};
