import { useEffect, useState } from "react";
import podcastsApi from "../api/podcasts";
import { IPodcast } from "../types/podcasts";

export const usePodcasts = (term: string) => {
  const [podcasts, setPodcasts] = useState<IPodcast[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const { data } = await podcastsApi.get(term);
        setPodcasts(data.results);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    if (term) {
      fetchPodcasts();
    }

    return () => {
      setPodcasts([]);
      setIsLoading(false);
      setIsError(false);
    };
  }, [term]);

  return { podcasts, isLoading, isError };
};
