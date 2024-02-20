import { useQuery } from "react-query";
import { getDogs } from "../apis/dogs";
import { usePageContext } from "../contexts/PageContext";

const useGetDogs = () => {
  const { selectedPage } = usePageContext();
  console.log(selectedPage);
  return useQuery(["dogs"], () => getDogs(selectedPage));
};

export default useGetDogs;
