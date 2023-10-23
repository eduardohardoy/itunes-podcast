import { useSelector, useDispatch } from "react-redux";
import { HiOutlinePlay } from "react-icons/hi2";
import { AiOutlinePause } from "react-icons/ai";
import { IPodcastEpisode } from "../../../../types/podcasts";
import {
  Cell,
  Header,
  Row,
  Table,
  TableBody,
  TableHead,
} from "../../../../components/table";
import Thumbnail from "../../../../components/thumbnail";
import { formatDate, formatIntervalToDuration } from "../../../../utils/format";
import {
  selectCurrentEpisodeId,
  selectIsPlaying,
  setIsPlaying,
} from "../../../../data/play-list";

interface IEpisodesListProps {
  episodes: IPodcastEpisode[];
  onEpisodeClick: (episodeId: number) => void;
}

const EpisodesList = ({ episodes, onEpisodeClick }: IEpisodesListProps) => {
  const dispatch = useDispatch();
  const currentEpisodeId = useSelector(selectCurrentEpisodeId);
  const isPlayingPlaylist = useSelector(selectIsPlaying);

  return (
    <Table>
      <TableHead>
        <Row>
          <Header>#</Header>
          <Header>Title</Header>
          <Header>Topic</Header>
          <Header>Released</Header>
          <Header>Duration</Header>
        </Row>
      </TableHead>
      <TableBody>
        {episodes.map((episode) => (
          <Row key={episode.trackName}>
            <Cell>
              {currentEpisodeId === episode.trackId && isPlayingPlaylist ? (
                <AiOutlinePause
                  cursor="pointer"
                  onClick={() => {
                    dispatch(setIsPlaying(false));
                  }}
                />
              ) : (
                <HiOutlinePlay
                  cursor="pointer"
                  onClick={() => {
                    dispatch(setIsPlaying(true));
                    onEpisodeClick(episode.trackId);
                  }}
                />
              )}
            </Cell>
            <Cell>
              <Thumbnail
                description={episode.collectionName}
                imageSrc={episode.artworkUrl60}
                title={episode.trackName}
              />
            </Cell>
            <Cell maxLines={2}>{episode.description}</Cell>
            <Cell textAlign="right">{formatDate(episode.releaseDate)}</Cell>
            <Cell textAlign="right">
              {formatIntervalToDuration(episode.trackTimeMillis)}
            </Cell>
          </Row>
        ))}
      </TableBody>
    </Table>
  );
};

export default EpisodesList;
