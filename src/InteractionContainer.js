import React, { useEffect, useState } from "react";

const csvUrl =
  "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv";

const InteractionContainer = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    setData("some data");
  }, []);

  return (
    <div style={{ margin: 20 }}>
      <h1>Interaction Container</h1>
      <p>{data}</p>
    </div>
  );
};

export default InteractionContainer;
