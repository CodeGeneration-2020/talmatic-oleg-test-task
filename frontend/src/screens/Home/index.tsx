import React, { ChangeEvent, useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { useMutation, useQuery } from "@apollo/client";
import { Box, CircularProgress, Grid, Theme } from "@mui/material";
import AutocompleteComponent from "../../components/AutocompleteComponent";
import Header from "../../components/Header";
import ListElements from "../../components/ListElements";
import { CONVERSION_MUTATION } from "../../graphql/mutation.graphql";
import { QUERY_SUGGESTIONS } from "../../graphql/query.graphql";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
  },
  wrapper: {
    maxWidth: `${theme.breakpoints.values.xl}px`,
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(5),
  },
  autocomplete: {
    width: "650px",
    backgroundColor: theme.palette.secondary.contrastText,
    borderRadius: "4px",
    marginTop: theme.spacing(2),
  },
  loader: {
    margin: "auto",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
  wrapperPicked: {
    marginBottom: theme.spacing(5),
  },
  row: {
    margin: theme.spacing(2, 0, 5, 0),
  },
}));

const Home = () => {
  const classes = useStyles();
  const { data, loading } = useQuery(QUERY_SUGGESTIONS);
  const [getSuggestionWithDate, { data: parsedValues }] =
    useMutation(CONVERSION_MUTATION);
  const [picked, setPicked] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    getSuggestionWithDate({
      variables: { items: picked },
    });
  }, [picked]);

  const toggleChecked = (event: ChangeEvent<HTMLInputElement>) =>
    setIsChecked(event.target.checked);

  const updatePickedHandler = (picked: string[]) => setPicked(picked);
  const mutationData = parsedValues?.getSuggestionWithDate ?? [];

  return (
    <Grid container className={classes.container}>
      <Header isChecked={isChecked} onToggle={toggleChecked} />
      <Grid item xs={12} md={8} className={`${classes.wrapper} ${classes.row}`}>
        {loading ? (
          <Box className={classes.loader}>
            <CircularProgress size={60} />
          </Box>
        ) : (
          <>
            <ListElements title="After mutation:" options={mutationData} />
            <Box>
              {isChecked && (
                <Box className={classes.wrapperPicked}>
                  <ListElements title="Your selected items:" options={picked} />
                </Box>
              )}
              <AutocompleteComponent
                options={data}
                picked={picked}
                isChecked={isChecked}
                className={classes.autocomplete}
                onUpdate={updatePickedHandler}
              />
            </Box>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default Home;
