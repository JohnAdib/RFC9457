import type { ErrorConfig } from "../types/index.js";

export const defaultConfig: ErrorConfig = {
	baseUrl: process.env.RFC9457_BASE_URL || "about:blank",
};

export const currentConfig: ErrorConfig = { ...defaultConfig };
