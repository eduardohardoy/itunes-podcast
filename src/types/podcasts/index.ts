export interface IPodcast {
  artistName: string;
  artworkUrl60: string;
  artworkUrl600: string;
  collectionId: number | string;
  collectionName: string;
  releaseDate: string;
  trackName: string;
  trackViewUrl: string;
}

export interface IPodcastEpisode {
  artworkUrl60: string;
  collectionName: string;
  description: string;
  episodeUrl: string;
  releaseDate: string;
  trackId: number;
  trackName: string;
  trackTimeMillis: string;
}

export interface IPodcastsData {
  results: IPodcast[];
  resultsCount: number;
}

export interface IPodcastsEpisodesData {
  results: IPodcastEpisode[];
  resultsCount: number;
}
