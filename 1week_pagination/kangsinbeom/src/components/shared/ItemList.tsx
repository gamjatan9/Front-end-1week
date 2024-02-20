import Item from "./Item";
import Grid from "./Grid";
import { Dog } from "../../models/dog";

const ItemList = ({ data }: { data: Dog[] }) => {
  if (!data) return <>로딩중...</>;

  return (
    <Grid coulmn="repeat(4, 1fr)" style={{ gap: 20 }}>
      {data.map(({ url, height, id, width }) => (
        <Item height={height} width={width} url={url} key={id} />
      ))}
    </Grid>
  );
};

export default ItemList;
