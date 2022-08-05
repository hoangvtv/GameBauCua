import React, { Component } from "react";
import { Button, SmallButton } from "../Component/Button";
import { Link, StyledLink } from "../Component/Link";
import { TextField } from "../Component/TextField";

class DemoJSS extends Component {
  render() {
    return (
      <div>
        <Button className="button_style" bgPrimary fontSize2x>
          Click me!!
        </Button>

        <SmallButton>Small Button</SmallButton>

        <StyledLink className="hello" id="abc">
          Hello
        </StyledLink>
        <hr />

        <TextField inputColor="pink" />
      </div>
    );
  }
}

export default DemoJSS;
