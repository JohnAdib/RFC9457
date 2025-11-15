import type { ErrorConfig } from "../types/index.js";
import { currentConfig } from "./error-config.js";

export function getConfig(): Readonly<ErrorConfig> {
	return currentConfig;
}
