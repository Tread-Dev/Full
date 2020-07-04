
import React, { useState, useEffect } from "react";
import "./Modal.css";
import View from "./View";
import axios from "axios";
import Plyr from "react-plyr";
import { Embed } from "semantic-ui-react";
import ReactPlayer from "react-player";
import { exercise } from "./Data.js";
import { useHistory } from "react-router";

import {
  Dropdown,
  Popup,
  Button,
  Form,
  Divider,
  Grid,
  Segment,
  Header,
  Modal,
  Icon,
  Message,
  Input,
  Label,
  Loader,
} from "semantic-ui-react";
import GridList from "@material-ui/core/GridList";
import { StepContent } from "@material-ui/core";

const ModalCall=(props)=>{

const [modalIsOpen2,setModalIsopen2]=useState(props.IsOpen);
const [excerciseDescription,setExerciseDescription]=useState("");
const history = useHistory();
  // const [copyItems, setCopy] = useState([1, 2, 3]);
  const [Instruction, setInstruction] = useState("");
  const [time, setTime] = useState("");
  const [rest, setRest] = useState("");
  const [sets, setSets] = useState("");
  const [excerciseName, setName] = useState("");
  const [Items, addList] = useState([]);
  const [video, setVideo] = useState("");

  const [youtubelink, setLink] = useState("");
  const [noUpdate, setUpdate] = useState(false);
  const [ID, passingId] = useState();
  const [wrongurl, setErrorUrlMessage] = useState("");
  const [uploadedFile, setUploadFile] = useState("");
  const [response, setResponse] = useState("");
  const [timerName, setWorkoutName] = useState("");
  const [timerDescription, settimerDescription] = useState("");
  const [errorMessagetimerestInstruction, seterrorMessagetimerestInstruction] = useState("");
  const [actualYoutubeLink, setActualYoutubeLink] = useState("");
  const [videoId, setVideoId] = useState("");
  const [TimerNameError, setTimerNameError] = useState("");
  const [addExerName, setExerName] = useState("");

  const [content, setemailcontent] = useState(
    "Sit tight! We are mailing you the workout!"
  );
  const [loadingbutton, setLoadingbutton] = useState(false);
  const [errorenteremail, setEmailerror] = useState("");
  const [isVideoShow, setVideoShow] = useState(false);

  const [editingExerciseName, seteditingExerciseName] = useState(false);
  const [picked, setPicked] = useState(false);
  const [added, setAdded] = useState(false);

  // console.log(Data[0].key);
  // const [disablebutton,setDisablebutton]=useState(true);
  const YoutubeUrlChange1 = (link) => {
    if (matchYoutubeUrl(link) === false) {
      setErrorUrlMessage("Invalid Youtube Url Link");
    } else {
      const videoId = getId(link);
      const ylink = "https://www.youtube.com/embed/" + videoId;
      setVideoId(videoId);
      setVideo(ylink);
    }
  };
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
      // } else if (addExerName === "") {
      //   seterrorMessagetimerestInstruction("");
      //   setErrorUrlMessage("Please enter a name for your workout!");
      // }
    } else {
      const videoId = getId(actualYoutubeLink);
      const ylink = "https://www.youtube.com/embed/" + videoId;
      setVideoId(videoId);
      setVideo(ylink);
      setAdded(true);
      if (addExerName !== "") setName(addExerName);
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
    return(
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
        <Header.Content style={{ color: "red" }}>
          {wrongurl}
        </Header.Content>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Form.Input
          label="Exercise Description"
           value={excerciseDescription}
          onChange={e=>setExerciseDescription(e.target.value)}
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
}
export default ModalCall;