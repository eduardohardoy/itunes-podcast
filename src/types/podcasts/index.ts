export interface IPodcast {
    artistName: string;
    artworkUrl60: string; // imagen
    trackViewUrl: string; // url with related content
    trackName: string;
    collectionName: string;
    collectionId: number | string;
    releaseDate: string;
  }

  export interface IPodcastEpisode {
    trackName: string;
    trackTimeMillis: string;
    releaseDate: string;
    description: string;
    artworkUrl60: string;
    collectionName: string;
  }

  export interface IPodcastsData {
    resultsCount: number;
    results: IPodcast[];
  }
  
  export interface IPodcastsEpisodesData {
    resultsCount: number;
    results: IPodcastEpisode[];
  }