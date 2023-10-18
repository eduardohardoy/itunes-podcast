import axiosClient from "../index";
import { IPodcastsData, IPodcastsEpisodesData } from "../../types/podcasts";

const MEDIA = "podcast";

const get = async (term: string) => {
  try {
    const response = await axiosClient.get<IPodcastsData>(
      `/search?media=${MEDIA}&term=${term}&attribute=descriptionTerm`
    );
    return response;
  } catch (err: unknown) {
    throw new Error();
  }
};

const getEpisodes = async (podcastId: number | string) => {
  try {
    const response = await axiosClient.get<IPodcastsEpisodesData>(
      `lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=10`
    );
    return response;
  } catch (err: unknown) {
    throw new Error();
  }
};

export default { get, getEpisodes };
