import { Item as ItemType } from "../../models/item";
import Flex from "./Flex";

const Item = ({ height, url, width }: Omit<ItemType, "id">) => {
  return (
    <Flex direction="column">
      <img src={url} alt="" height={300} width={220} />
    </Flex>
  );
};

export default Item;
