import intro from './00-intro.mdx'
import components from './01-components.mdx'
import props from './02-props.mdx'
import composition from './03-composition.mdx'
import listsConditionals from './04-lists-and-conditions.mdx'
import mediaCard from './05-exercise-1-media-card.mdx'
import events from './06-events.mdx'
import dataFlow from './08-react-state-and-data-flow.mdx';
import lifeCycle from './07-react-life-cycle.mdx';
import dataFetch from './99-data-fetch-exercises.mdx';
export { default as theme } from '../../theme'

export default [
  ...intro,
  ...components,
  ...props,
  ...composition,
  ...listsConditionals,
  ...mediaCard,
  ...events,
  ...lifeCycle,
  ...dataFlow,
  ...dataFetch
]
