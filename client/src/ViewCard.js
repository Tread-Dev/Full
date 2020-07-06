import React, { useState } from "react";
import { Card, Button, Image, Grid, Embed } from "semantic-ui-react";
import ReactPlayer from "react-player";
import "./Modal.css";
import "./App.css";
import axios from "axios";
import Plyr from "react-plyr";
import GridList from "@material-ui/core/GridList";

const View = (props) => {
  return (
    <div style={{ margin: 10 }}>
      <Card style={{ background: "blue" }}>
        <div style={{ margin: 20 }}>
          <h1 style={{ fontSize: 40, color: "white", marginRight: 20 }}>
            {props.data.workout}
          </h1>

          <h6 style={{ fontSize: 20, color: "white" }}>{props.data.type}</h6>
        </div>

        <div style={{ margin: 20 }}>
          <Button
            icon="close"
            onClick={() => {
               props.onSelect(props.id);
            }}
          ></Button>
          <Button
            icon="edit"
            onClick={() => {
                props.onEdit(props.id);
            }}
          ></Button>

          <Button
            icon="copy"
            onClick={() => {
                 props.onCopy(props.id);
            }}
          ></Button>
          <Button
            icon="share"
            onClick={() => {
                 props.onCopy(props.id);
            }}
          ></Button>
        </div>
      </Card>
    </div>
  );
};

const ViewCard = (props) => {
  var Items = [
    {
      workout: "Lower Body & Core Attack",
      type: "8 exercise",
    },
    {
      workout: "Lower Body & Core Attack",
      type: "8 exercise",
    },
    {
      workout: "Lower Body & Core Attack",
      type: "8 exercise",
    },
    {
      workout: "Lower Body & Core Attack",
      type: "8 exercise",
    },
  ];
  // axios.get("/trainer/workoutlibrary")
  // .then((res)=>{
  //     // for(var i=0;i<res.length;i++){
  //     //     Iteams[i]=
  //     // }
  // })
  // .catch((err)=>{

  // })
  const deleteItem = (id) => {};

  const callEdit = (id) => {};

  const callCopy = (id) => {};

  const callShare = (id) => {};

  return (
    <Grid>
      <Grid.Row style={{ marginLeft: "2.5%" }}>
        <GridList spacing={20} cellHeight={320} cols="md">
          {Items.map((item, index) => {
            return (
              <div>
                <View
                  key={index}
                  id={index}
                  data={item}
                    onSelect={deleteItem}
                    onEdit={callEdit}
                    onCopy={callCopy}
                    onShare={callShare}
                />
              </div>
            );
          })}

          <Button
            // onClick={twomethod}
            icon="add"
            style={{
              width: 150,
              height: 150,
              marginLeft: 100,
              marginTop: 110,
            }}
          ></Button>
        </GridList>
      </Grid.Row>
    </Grid>
  );
};

export default ViewCard;
