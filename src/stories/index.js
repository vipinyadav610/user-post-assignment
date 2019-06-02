import React from "react";
import { storiesOf } from "@storybook/react";
import Provider from "./Provider";
import Home from "../client/components/Home";
import "antd/dist/antd.css";

storiesOf("home", module)
  .addDecorator(story => <Provider story={story()} />)
  .add("home", () => <Home />);
