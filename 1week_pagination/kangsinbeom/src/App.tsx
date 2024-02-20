import { Flex, ItemList, Pagination } from "./components/shared";
import Spacing from "./components/shared/Spacing";
import { usePageContext } from "./contexts/PageContext";
import useGetDogs from "./hooks/useGetDogs";

function App() {
  const { data } = useGetDogs();
  if (!data) return null;

  return (
    <Flex direction="column" align="center">
      <ItemList data={data} />
      <Spacing size={80} />
      <Spacing size={2} backgroundColor="lightgray" style={{ width: "100%" }} />
      <Spacing size={80} />
      <Pagination limit={101} />
    </Flex>
  );
}

export default App;
