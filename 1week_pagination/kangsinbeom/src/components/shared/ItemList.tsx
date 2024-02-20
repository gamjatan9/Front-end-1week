import { useEffect, useState } from "react";
import { Item as ItemType } from "../../models/item";
import Item from "./Item";
import Grid from "./Grid";

const ItemList = () => {
  const [data, setData] = useState<ItemType[]>([]);

  useEffect(() => {
    const url = process.env.REACT_APP_URL;

    (async () => {
      await fetch(
        `https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10`,
        {
          method: "GET",
          headers: {
            "x-api-key":
              "live_3EQ0cWZmsnREkrEBQBH4HPw5CkFNBehRbj0zVLEMckZ1Dxe8FYVIFZlN7QELqAu6",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => setData(data));
    })();
  }, []);

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
