import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import React from "react";

function BlobComponent2() {
  const [imgarray, setimgarray] = React.useState([]);
  const [cards, setCards] = React.useState([]);

  const InsertCardComponent = () => {
    return (
      <Card>
        <input
          type="file"
          accept="image/png, image/gif, image/jpeg"
          onChange={(e) => {
            const imgreader = new FileReader();
            imgreader.readAsDataURL(e.target.files[0]);
            imgreader.onload = () => {
              setCards([...cards, imgreader.result]);
            };
          }}
        />

        <img
          src={cards}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </Card>
    );
  };

  return (
    <Box>
      <Button>Add Image</Button>
    </Box>
  );
}

export default BlobComponent2;
