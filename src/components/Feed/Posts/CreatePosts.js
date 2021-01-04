import { Avatar } from "@material-ui/core";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@material-ui/icons";
import React, { useState } from "react";
import db from "../../../Firebase/Firebase";
import { useStateValue } from "../../../StateProvider/StateProvider";
import "./CreatePosts.css";
import firebase from "firebase";

const CreatePosts = () => {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: input,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      userName: user.displayName,
      image: imageUrl,
    });

    setInput("");
    setImageUrl("");
  };

  const handleUpload = (e) => {
    console.log(e.target.files[0])
  }
  return (
    <div className="posts">
      <div className="posts__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            className="posts__input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder={`what's on your mind?, ${user.displayName}?`}
          />
          <button onClick={handleSubmit} type="submit">
            Hidden
          </button>
        </form>
      </div>

      <div className="posts__bottom">
        <div className="posts__options" role="button">
          <Videocam style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <label class="posts__images">
          <input
            accept="image/*,image/heif,image/heic,video/*,video/mp4,video/x-m4v,video/x-matroska,.mkv"
            multiple=""
            type="file"
            hidden
            onChange= {handleUpload}
          />
          <div className="posts__options" role="button">
            <PhotoLibrary style={{ color: "green" }} />
            <h3>Photos/ Videos</h3>
          </div>
        </label>
        <div className="posts__options" role="button">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Emojis</h3>
        </div>
      </div>
    </div>
  );
};

export default CreatePosts;
