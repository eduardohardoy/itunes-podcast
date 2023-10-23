import { format } from "date-fns";
import { IPodcast } from "../../../../types/podcasts";
import {
  Cell,
  Header,
  Row,
  Table,
  TableBody,
  TableHead,
} from "../../../../components/table";
import Thumbnail from "../../../../components/thumbnail";

interface IPodcastsListProps {
  onNavigateToPodcast: (podcast: IPodcast) => void;
  podcasts: IPodcast[];
}

const PodcastsList = ({
  onNavigateToPodcast,
  podcasts,
}: IPodcastsListProps) => (
  <Table>
    <TableHead>
      <Row>
        <Header>#</Header>
        <Header>Name</Header>
        <Header>Artist</Header>
        <Header>Released</Header>
      </Row>
    </TableHead>
    <TableBody>
      {podcasts.map((podcast, index) => (
        <Row key={podcast.collectionId}>
          <Cell>{index}</Cell>
          <Cell
            flex={1}
            $changeCursor="pointer"
            onClick={() => onNavigateToPodcast(podcast)}
          >
            <Thumbnail
              description={podcast.collectionName}
              imageSrc={podcast.artworkUrl60}
              title={podcast.trackName}
            />
          </Cell>
          <Cell>{podcast.artistName}</Cell>
          <Cell>{format(new Date(podcast.releaseDate), "dd/mm/yyyy")}</Cell>
        </Row>
      ))}
    </TableBody>
  </Table>
);

export default PodcastsList;
