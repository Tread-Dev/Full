import React, { useState, useEffect } from "react";
import "./Modal.css";
import { useHistory } from "react-router";
import Axios from 'axios';
import { Button, Form, Grid, Header, Modal } from "semantic-ui-react";


const ModalCall = (props) => {
  const [modalIsOpen2, setModalIsopen2] = useState(props.IsOpen);
  console.log(props.IsOpen);
  const [excerciseDescription, setExerciseDescription] = useState("");
  const history = useHistory();
  // const [copyItems, setCopy] = useState([1, 2, 3]);
  
  const [excerciseName, setName] = useState("");
  const [Items, addList] = useState([]);
  const [video, setVideo] = useState("");

  const [youtubelink, setLink] = useState("");
  
  const [wrongurl, setErrorUrlMessage] = useState("");

  const [
    errorMessagetimerestInstruction,
    seterrorMessagetimerestInstruction,
  ] = useState("");
  const [actualYoutubeLink, setActualYoutubeLink] = useState("");
  const [videoId, setVideoId] = useState("");

  const [addExerName, setExerName] = useState("");

  const [isVideoShow, setVideoShow] = useState(false);

  const [added, setAdded] = useState(false);

  // console.log(Data[0].key);
  // const [disablebutton,setDisablebutton]=useState(true);

  function matchYoutubeUrl(url) {
    var p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    if (url.match(p)) {
      return url.match(p)[1];
    }
    return false;
  }
  function getId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  }

  const YoutubeUrlChange = (e) => {
    if (matchYoutubeUrl(actualYoutubeLink) === false) {
      setErrorUrlMessage("Invalid Youtube Url Link");
      } else if (addExerName === "") {
        seterrorMessagetimerestInstruction("");
        setErrorUrlMessage("Please enter Exercise Name!");
      }
    
     else {
      const videoId = getId(actualYoutubeLink);
      const ylink = "https://www.youtube.com/embed/" + videoId;
      setVideoId(videoId);
      setVideo(ylink);
      setAdded(true);
      if (addExerName !== "") 
      setName(addExerName);
      setExerName("");
    
      setModalIsopen2(false);
      setVideoShow(true);
      

    }
  };
  const closeSecondModal = () => {
    setModalIsopen2(false);
    setExerName("");
    setAdded(false);
    // setName("");
  };
  const ExerName = (e) => {
    setErrorUrlMessage("");
    setExerName(e.target.value);
    seterrorMessagetimerestInstruction("");
  };
  return (
    <Modal
      closeIcon
      onClose={closeSecondModal}
      open={modalIsOpen2}
      size="tiny"
      closeOnDimmerClick={true}
      className="modal2"
      // style={{ marginTop: "10%" }}
    >
      <Form style={{ margin: 30 }}>
        <Grid columns="equal">
          <Grid.Row>
            <Grid.Column>
              <Header textAlign="center">Add Exercise</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Form.Input
                label="Video link from Youtube"
                value={actualYoutubeLink}
                onChange={(e) => {
                  setActualYoutubeLink(e.target.value);
                  setErrorUrlMessage("");
                }}
                fluid
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Form.Input
                label="Exercise Name"
                // value={excerciseName}
                onChange={ExerName}
                fluid
              />
              
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Form.Input
                label="Exercise Description"
                value={excerciseDescription}
                onChange={(e) => setExerciseDescription(e.target.value)}
                fluid
              />
              <Header.Content style={{ color: "red" }}>
                {wrongurl}
              </Header.Content>
            </Grid.Column>
          </Grid.Row>
          {/* <Grid.Row>
    <Grid.Column width={1}>
      <Header>Or</Header>
    </Grid.Column>
    <Grid.Column>
      <Button icon labelPosition="left" onClick={getFile}>
        <Icon name="file" />
        Choose File
      </Button>
      <input
        type="file"
        id="file"
        name="filename"
        onChange={(e) => setUploadFile(e.target.files)}
        style={{ display: "none" }}
        multiple
      />
      {uploadedFile}
    </Grid.Column>
  </Grid.Row> */}

          <Grid.Row>
            <Grid.Column style={{ textAlign: "center" }}>
              <Button
                onClick={YoutubeUrlChange}
                style={{
                  background: "#4DD599",
                  borderRadius: "4px",
                  color: "white",
                  boxShadow: "0px 4px 10px rgba(16, 156, 241, 0.24)",
                }}
              >
                Save to Library
              </Button>

              <Button
                onClick={(e) => {
                  setModalIsopen2(false);
                  setLink("");
                  setErrorUrlMessage("");
                }}
              >
                Cancel
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    </Modal>
  );
};
export default ModalCall;
