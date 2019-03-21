import intro from './00-intro.mdx'
import components from './01-components.mdx'
import props from './02-props.mdx'
import renderingLists from './03-rendering-lists.mdx'
import conditionalRendering from './04-conditional-rendering.mdx'
import composition from './05-00-composition.mdx'
import mediaCard from './05-01-exercise-1-media-card.mdx'
import productCard from './05-02-exercise-2-product-card.mdx'
import events from './06-events.mdx'
import lifeCycle from './07-react-life-cycle.mdx';
import dataFlow from './08-react-state-and-data-flow.mdx';
import dataFetch from './99-data-fetch-exercises.mdx';
export { default as theme } from '../../theme'

export default [
  ...intro,
  ...components,
  ...props,
  ...renderingLists,
  ...conditionalRendering,
  ...composition,
  ...mediaCard,
  ...productCard,
  ...events,
  ...lifeCycle,
  ...dataFlow,
  ...dataFetch
]
