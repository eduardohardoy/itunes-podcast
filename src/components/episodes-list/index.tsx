import { IPodcastEpisode } from "../../types/podcasts";
import { Table, Row, Cell, Header, TableBody, TableHead } from "./styled";
import Thumbnail from "../thumbnail";
import { formatDate, formatIntervalToDuration } from "../../utils/format";

interface IEpisodesListProps {
  episodes: IPodcastEpisode[];
}

const EpisodesList = ({ episodes }: IEpisodesListProps) => (
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
      {episodes.map((episode, index) => (
        <Row key={episode.trackName}>
          <Cell>{index}</Cell>
          <Cell>
            <Thumbnail
              imageSrc={episode.artworkUrl60}
              title={episode.trackName}
              description={episode.collectionName}
            />
          </Cell>
          <Cell maxLines={2}>{episode.description}</Cell>
          <Cell>{formatDate(episode.releaseDate)}</Cell>
          <Cell>{formatIntervalToDuration(episode.trackTimeMillis)}</Cell>
        </Row>
      ))}
    </TableBody>
  </Table>
);

export default EpisodesList;
