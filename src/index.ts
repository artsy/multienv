import { readFileSync, accessSync, constants } from "fs"
import { parse } from "dotenv"
import type { DotenvParseOutput } from "dotenv"

function loadEnv(filename: string): DotenvParseOutput {
  return checkFileExistsSync(filename) ? parse(readFileSync(filename)) : {}
}

function applyToEnv(config: Record<string,string>) {
  if (Object.keys(config).length !== 0) {
    for (const k in config) {
      if (!process.env[k]) {
        process.env[k] = config[k]
      }
    }
  }
}

function checkFileExistsSync(filepath: string): boolean {
  try {
    accessSync(filepath, constants.F_OK)
  } catch (e) {
    return false
  }
  return true
}

// Load the default envs and apply to process.env
applyToEnv({
  ...loadEnv(".env.shared"),
  ...loadEnv(".env"),
})
