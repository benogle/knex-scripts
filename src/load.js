/* eslint-disable max-len */
import { exec } from 'mz/child_process'
import {
  preventEnv,
  wrapDockerCommand,
  getCommand,
  getCommandEnv,
} from './utils'

async function load(options) {
  const { structurePath } = options
  preventEnv('production', options.env)

  const env = getCommandEnv(options)
  const command = `${getCommand(options, 'psql')} < ${structurePath}`

  return exec(wrapDockerCommand(options, command), { env })
}

export default load
