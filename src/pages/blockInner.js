import { useParams } from "react-router";
import PageTitle from "../Components/PageTitle";

function BlockInner() {
  const routeParams = useParams();
  return (
    <>
      <PageTitle title={`Blocks ${routeParams.id}`} />
      inner
    </>
  );
}

export default BlockInner;
