import events from './01-events.mdx'
import dataFlow from './02-react-state-and-data-flow.mdx'
import classBased from './03-class-based-components.mdx';
import stateExercise from './stateful-component-exercise.mdx'
import lifeCycle from './04-react-life-cycle.mdx';
import hooks from './06-hooks.mdx'
import dataFetch from './05-data-fetch.mdx'
import dataFetchE from './99-data-fetch-exercises.mdx';

export { default as theme } from '../../theme'

export default [
  ...events,
  ...dataFlow,
  ...classBased,
  ...stateExercise,
  ...lifeCycle,
  ...dataFetch,
  ...hooks,
  ...dataFetchE
]
