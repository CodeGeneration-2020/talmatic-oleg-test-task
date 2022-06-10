import React, { FC } from "react";
import { Box, FormControlLabel, Grid, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Switch from "@mui/material/Switch";
import { IHeaderProps } from "../../types/autocomplete.types";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "104px",
    backgroundColor: theme.palette.secondary.dark,
  },
  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: `${theme.breakpoints.values.xl}px`,
  },
  title: {
    fontSize: "2rem",
    color: theme.palette.secondary.contrastText,
    fontWeight: 600,
  },
  checkbox: {
    display: "flex",
    alignItems: "center",

    "& .MuiSwitch-track": {
      backgroundColor: theme.palette.secondary.contrastText,
    },

    "& .MuiTypography-root": {
      fontWeight: 600,
      textTransform: "uppercase",
      color: theme.palette.secondary.contrastText,
    },
  },
}));

const Header: FC<IHeaderProps> = ({ isChecked, onToggle }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} md={8} className={classes.row}>
        <Typography className={classes.title}>Dem Dx Autocomplete</Typography>

        <Box>
          <FormControlLabel
            className={classes.checkbox}
            control={<Switch onChange={onToggle} checked={isChecked} />}
            label="limit"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;
