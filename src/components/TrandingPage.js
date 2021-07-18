import React from "react";
import styled from "styled-components";

import { Grid, Text } from "../elements/index";

const TrandingPage = (props) => {
  return (
    <Grid margin="3rem auto">
      <Grid maxWidth="114rem" margin="3rem auto">
        <Text width="auto" size="2.5rem" bold="t" margin="0 2rem 3rem">
          Trending GIFs
        </Text>

        <GridWrap>
          {props.data.map((post) => (
            <GifList key={post.id}>
              <Grid margin="0" backImg={post.src}></Grid>
              <Text>{post.title}</Text>
            </GifList>
          ))}
        </GridWrap>
      </Grid>
    </Grid>
  );
};

const GridWrap = styled.div`
  padding: 0 3.5rem;
  display: block;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

const GifList = styled.div`
  margin-right: 2rem;
  display: inline-block;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
`;

TrandingPage.defaultProps = {
  data: [
    {
      id: 1,
      src: "https://t1.daumcdn.net/cfile/tistory/99AE233E5F8CDE7319",
      title: "test 1",
    },
    {
      id: 2,
      src: "https://t1.daumcdn.net/cfile/tistory/99AE233E5F8CDE7319",
      title: "test 2",
    },
    {
      id: 3,
      src: "https://t1.daumcdn.net/cfile/tistory/99AE233E5F8CDE7319",
      title: "test 3",
    },
    {
      id: 4,
      src: "https://t1.daumcdn.net/cfile/tistory/99AE233E5F8CDE7319",
      title: "test 4",
    },
    {
      id: 5,
      src: "https://t1.daumcdn.net/cfile/tistory/99AE233E5F8CDE7319",
      title: "test 5",
    },
    {
      id: 6,
      src: "https://t1.daumcdn.net/cfile/tistory/99AE233E5F8CDE7319",
      title: "test 6",
    },
    {
      id: 7,
      src: "https://t1.daumcdn.net/cfile/tistory/99AE233E5F8CDE7319",
      title: "test 7",
    },
    {
      id: 8,
      src: "https://t1.daumcdn.net/cfile/tistory/99AE233E5F8CDE7319",
      title: "test 8",
    },
  ],
};

export default TrandingPage;

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   },
// }));

// export default function TrandingPage() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Grid container spacing={3}>
//         <Grid item xs={6} sm={3}>
//           <Paper className={classes.paper}>1</Paper>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }
