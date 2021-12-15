import React from "react";
import { SharedContext } from "../App";
import { Button } from "@material-ui/core";
import { useStyles } from "./styles";

export default function ComponentOne() {
  const classes = useStyles();
  return (
    <>
      <div>
        <SharedContext.Consumer>
          {(values) => {
            return (
              <>
                <p>
                  {values.header} : {values.counter}
                </p>
                <Button
                  varient="outlined"
                  className={classes.button}
                  onClick={() => values.increment()}
                >
                  increment
                </Button>
                <Button
                  varient="outlined"
                  className={classes.button}
                  onClick={() => values.decrement()}
                >
                  decrement
                </Button>
              </>
            );
          }}
        </SharedContext.Consumer>
      </div>
    </>
  );
}
