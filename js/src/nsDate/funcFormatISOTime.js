import { JPLTypeError } from '@jplorg/jpl';
import JPLDate from './typeDate';

async function builtin(runtime, signal, next, input) {
  if (!JPLDate.is(input)) throw new JPLTypeError('%*<100v is not a date', input);

  return next(await input.alterDate((date) => [date, { type: 'iso-time' }, false]));
}

export default builtin;
