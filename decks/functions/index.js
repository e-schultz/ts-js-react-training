import intro from "./00-intro.mdx";
import functionScopeIntro from "./01-function-scope-closure-context.mdx";
import functionClosure from "./02-function-closure.mdx";
import functionContext from "./03-function-context-this.mdx";
import arrow from "./04-arrow-functions.mdx";
import callBack from "./05-function-callback.mdx";
export { default as theme } from "../../theme";

export default [
  ...intro,
  ...functionScopeIntro,
  ...functionClosure,
  ...functionContext,
  ...arrow,
  ...callBack
];
