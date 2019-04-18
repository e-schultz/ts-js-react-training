import intro from "./intro.mdx";
import variables from "./decks/variables";
import literals from "./decks/literals";
import destructuring from "./decks/destructuring";
import functions from "./decks/functions";
import arrays from "./decks/arrays";
import classes from "./decks/classes";
import promises from "./decks/promises";

/*
running order

yarn workspace variables-deck run start
yarn workspace literals-deck run start
yarn workspace destructuring-deck run start
yarn workspace functions-deck run start
yarn workspace arrays-deck run start
yarn workspace classes-deck run start
yarn workspace promises-deck run start

*/

import reactComponents from "./decks/react-components";
import reactProps from "./decks/react-props-and-rendering";
import reactState from "./decks/react-events-state";
import reactDataFetching from "./decks/react-data-fetching";
import reactHooks from "./decks/react-hooks";

/*
running order

yarn workspace react-components-deck run start
yarn workspace react-props-deck run start
yarn workspace react-state-deck run start
*/

export { default as theme } from "./theme";

export default [
  ...intro,
  ...variables,
  ...literals,
  ...destructuring,
  ...functions,
  ...arrays,
  ...classes,
  ...promises,
  ...reactComponents,
  ...reactProps,
  ...reactState,
  ...reactDataFetching,
  ...reactHooks
];
