import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import podcastsApi from "../api/podcasts";
import { setData } from "../data/podcast";
import { IPodcast } from "../types/podcasts";

export const usePodcasts = (term: string) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [podcasts, setPodcasts] = useState<IPodcast[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        setIsLoading(true);

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

  const onNavigateToPodcast = useCallback(
    (podcast: IPodcast) => {
      const { collectionId, collectionName, artworkUrl600 } = podcast;

      dispatch(
        setData({ collectionId, collectionName, imageSrc: artworkUrl600 })
      );
      navigate(`/podcast/${podcast.collectionId}`);
    },
    [navigate, dispatch]
  );

  return { podcasts, isLoading, isError, onNavigateToPodcast };
};
