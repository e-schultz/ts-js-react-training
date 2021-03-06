import classBased from './01-class-based-components.mdx';
import events from './02-events.mdx'
import dataFlow from './03-react-state-and-data-flow.mdx'

import lifeCycle from './04-react-life-cycle.mdx';

export { default as theme } from '../../theme'

export default [
  ...classBased,
  ...events,
  ...dataFlow,  
  ...lifeCycle
]
