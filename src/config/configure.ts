import type { ErrorConfig } from "../types.js";
import { currentConfig } from "./error-config.js";

export function configure(options: ErrorConfig): void {
  Object.assign(currentConfig, options);
}
