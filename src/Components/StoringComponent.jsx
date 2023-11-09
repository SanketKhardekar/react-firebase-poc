// src/components/Storage.js

import React, { useState } from "react";
import { storage } from "../firebase";

const Storage = () => {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      const uploadTask = storage.ref(`images/${file.name}`).put(file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Progress function
        },
        (error) => {
          // Error function
          console.log(error);
        },
        () => {
          // Complete function
          storage
            .ref("images")
            .child(file.name)
            .getDownloadURL()
            .then((fireBaseUrl) => {
              setUrl(fireBaseUrl);
            });
        }
      );
    } else {
      console.log("No file chosen");
    }
  };

  return (
    <div>
      <h2>Storage</h2>
      <input type="file" accept="jpeg" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload File</button>
      {url && <img src={url} alt="Uploaded file" />}
    </div>
  );
};

export default Storage;
