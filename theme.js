import {yellow as theme } from 'mdx-deck/themes'
import {
    future
} from 'mdx-deck/themes'
import atomDark from 'react-syntax-highlighter/styles/prism/atom-dark'
import javascript from 'react-syntax-highlighter/languages/prism/javascript'
import jsx from 'react-syntax-highlighter/languages/prism/jsx'
import tsx from 'react-syntax-highlighter/languages/prism/tsx'
import typescript from 'react-syntax-highlighter/languages/prism/typescript'


export default {
  // extends the default theme
  ...theme,
  // ...future,
  // add a custom font
  // font: 'Laila, Roboto, sans-serif',
  // custom colors
  // colors: {
    // text: '#fff',
    // background: 'black',
    // link: '#da0',
  // },
  prism: {
    style: atomDark,
    languages: {
        javascript,
        jsx,
        tsx,
        typescript
        }
  },
}