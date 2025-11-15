export { configure, getConfig } from "./config/index.js";
export { HttpError } from "./core/index.js";
export { error } from "./error.js";
export { errors } from "./errors.js";

export * from "./errors/index.js";

export { isHttpError } from "./helpers/index.js";

export type { CategorizedErrorNamespace, FlatErrorNamespace } from "./namespace/index.js";
export type { ErrorConfig, HttpErrorParams, ValidationErrors } from "./types/index.js";
