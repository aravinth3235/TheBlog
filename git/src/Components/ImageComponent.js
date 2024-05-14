import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  TextField,
} from "@mui/material";
import React, { useId, useState } from "react";
import { url } from "../Service/URLService.js";
function ImageComponent(props) {
  const [imgData, setimgData] = useState(null);
  const id = useId();
  const [postData, setpostData] = useState({
    imageid: id,
    imageurl: "",
  });

  const saveImg = () => {
    console.log(postData);
    url.saveimg(postData);
  };
  return (
    <Box>
      {imgData && (
        <Card sx={{ width: "100%" }}>
          <CardContent sx={{ display: "flex", justifyContent: "center " }}>
            <img src={URL.createObjectURL(imgData)} style={{ width: "40%" }} />
          </CardContent>
        </Card>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 3,
        }}
      >
        <TextField label=" Title " sx={{ mb: 2, width: "80%" }} size="large" />

        <TextField
          type="file"
          inputProps={{
            accept: ".png, .jpg, .jpeg",
          }}
          onChange={async (e) => {
            setimgData(e.target.files[0]);
            const reader = new FileReader();
            reader.onloadend = function () {
              setpostData({
                ...postData,
                imageurl: reader.result.split(",")[1],
              });
            };
            reader.readAsDataURL(e.target.files[0]);
          }}
        />
        <Button onClick={saveImg}>Save</Button>
      </Box>
    </Box>
  );
}

export default ImageComponent;
