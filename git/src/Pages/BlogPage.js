import React from "react";
import ImageComponent from "../Components/ImageComponent";
import BlogComponent from "../Components/BlogComponent";
import { Box } from "@mui/material";

function BlogPage() {
  const [Data, setData] = React.useState(null);
  return (
    <div>
      <Box>
        <ImageComponent id={Data} />
      </Box>

      <BlogComponent id={Data} />
    </div>
  );
}

export default BlogPage;
