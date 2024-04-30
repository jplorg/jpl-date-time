import { getOptions } from '@jplorg/jpl';
import * as date from './nsDate';

const vars = { date: { ...date } };

async function install(options) {
  const o = options ?? (await getOptions());
  if (!o.runtime) o.runtime = {};
  if (!o.runtime.vars) o.runtime.vars = {};
  Object.entries(vars).forEach(([name, value]) => {
    console.log(name, value);
    o.runtime.vars[name] = value;
  });
}

export default { install, vars };
export { install, vars };
