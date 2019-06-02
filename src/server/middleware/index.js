import bodyParser from "body-parser";
import cors from "cors";

/**
 * Express instance
 * @param {*} app
 */

export default app => {
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());

  // cross origin
  app.use(cors());
};
