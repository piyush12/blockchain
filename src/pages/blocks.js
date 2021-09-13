import { useEffect, useState } from "react";
import AppTable, { Head, Body, Row } from "../Components/AppTable/Table";
import useFetch from "../hooks/useFetch";

const headObj = {
  id: "#",
  height: "Height",
  hash: "Hash",
  mined: "Mined",
  miner: "Miner",
  size: "Size"
};

export function Blocks() {
  const { status, data } = useFetch(
    "https://blockchain.info/blocks/1573858800000?format=json"
  );

  console.log(data, status);

  // const { status } = useFetch(
  //   "https://blockchain.info/blocks/1573858800000?format=json"
  // );

  // if (status === "pending") {
  //   return <Loading />;
  // }

  // if (status === "error") {
  //   return <Error />;
  // }

  return (
    <AppTable>
      {() => (
        <>
          <Head>
            <Row>
              {Object.keys(headObj).map((item) => (
                <th key={item}>{headObj[item]}</th>
              ))}
            </Row>
          </Head>
          <Body>
            <Row>
              <td>1</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </Row>
          </Body>
        </>
      )}
    </AppTable>
  );
}
