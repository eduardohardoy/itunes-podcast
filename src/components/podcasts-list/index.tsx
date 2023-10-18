import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { IPodcast } from "../../types/podcasts";
import { Cell, Header, Row, Table, TableBody, TableHead } from "./styled";

interface IPodcastsListProps {
  podcasts: IPodcast[];
}

const PodcastsList = ({ podcasts }: IPodcastsListProps) => {
  const navigate = useNavigate();
  return (
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
              isClickable
              onClick={() => navigate(`/podcast/${podcast.collectionId}`)}
            >
              {podcast.trackName}
            </Cell>
            <Cell>{podcast.artistName}</Cell>
            <Cell>{format(new Date(podcast.releaseDate), "dd/mm/yyyy")}</Cell>
          </Row>
        ))}
      </TableBody>
    </Table>
  );
};

export default PodcastsList;
