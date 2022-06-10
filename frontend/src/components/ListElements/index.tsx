import React, { FC } from "react";
import { Box, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { IListElementsProps } from "../../types/autocomplete.types";

const useStyles = makeStyles((theme: Theme) => ({
  row: {},
  title: {
    paddingTop: theme.spacing(2),
    fontWeight: 600,
    textTransform: "uppercase",
    fontSize: "1.75rem",
  },
  itemWrapper: {
    padding: theme.spacing(1, 2),
  },
  itemContent: {},
}));

const ListElements: FC<IListElementsProps> = ({ title, options }) => {
  const classes = useStyles();

  return (
    <Box className={classes.row}>
      <Typography className={classes.title}>{title}</Typography>

      {!!options.length ? (
        options.map((item: string) => (
          <Box key={item} className={classes.itemWrapper}>
            <Typography className={classes.itemContent}>{item}</Typography>
          </Box>
        ))
      ) : (
        <Box className={classes.itemWrapper}>
          <Typography className={classes.itemContent}>
            So far you haven't added any elements
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default ListElements;
