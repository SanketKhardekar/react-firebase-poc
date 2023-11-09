// src/components/Database.js

import React, { useState, useEffect } from "react";
import { database } from "../firebase";

const Database = () => {
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await database.ref("/testData").get();
      setisLoading(false);
      setData(snapshot.val());
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Database Example</h2>
      <p>Data:{isLoading ? " Loading..." : data?.name + " " + data?.surname}</p>
    </div>
  );
};

export default Database;
