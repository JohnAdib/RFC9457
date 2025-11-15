import type { ErrorConfig } from "../types.js";

export const defaultConfig: ErrorConfig = {
	baseUrl: process.env.RFC9457_BASE_URL || "about:blank",
	includeStack: process.env.NODE_ENV === "development",
};

export const currentConfig: ErrorConfig = { ...defaultConfig };
