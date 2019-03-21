import intro from "./00-intro.mdx";
import pureFunctions from "./01-pure-functions.mdx"
import functionScopeIntro from "./05-function-scope-context.mdx";
import functionClosure from "./04-function-closure.mdx";
import functionContext from "./06-function-context-this.mdx";
import arrow from "./02-arrow-functions.mdx";
import callBack from "./03-function-callback.mdx";
export { default as theme } from "../../theme";

export default [
  ...intro,
  ...pureFunctions,
  ...arrow,
  ...callBack,
  ...functionClosure,
  ...functionScopeIntro,
  ...functionContext,
];
