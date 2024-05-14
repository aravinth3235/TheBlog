import { Box, TextField } from "@mui/material";
import React, { useState } from "react";

function BlogComponent(props) {
  const [postData, setpostData] = useState({
    id: props.id,
    data: "",
  });
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <TextField
          sx={{
            width: "80vw",
          }}
          placeholder="Write Something...."
          multiline
          rows={20}
          onChange={(e) => {
            setpostData({ ...postData, data: e.target.value });
          }}
        />
      </Box>
    </div>
  );
}

export default BlogComponent;
