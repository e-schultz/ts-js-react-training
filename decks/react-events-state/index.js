import events from './06-events.mdx'
import classBased from './08-class-based-components.mdx';
import lifeCycle from './09-react-life-cycle.mdx';
import dataFlow from './07-react-state-and-data-flow.mdx'
import hooks from './10-hooks.mdx'
import dataFetch from './99-data-fetch-exercises.mdx';
import stateExercise from './stateful-component-exercise.mdx'
export { default as theme } from '../../theme'

export default [
  ...events,
  ...dataFlow,
  ...classBased,
  ...stateExercise,
  ...lifeCycle,
  ...hooks,
  ...dataFetch
]
