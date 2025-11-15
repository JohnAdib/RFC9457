export { error } from "./error.js";
export { errors } from "./errors.js";

export { HttpError } from "./core/index.js";

export {
  BadRequestError,
  AuthenticationError,
  AuthorizationError,
  NotFoundError,
  MethodNotAllowedError,
  ConflictError,
  ValidationError,
  RateLimitError,
  InternalServerError,
  NotImplementedError,
  BadGatewayError,
  ServiceUnavailableError,
  GatewayTimeoutError,
} from "./errors/index.js";

export { configure, getConfig } from "./config/index.js";

export { isHttpError } from "./helpers/index.js";

export type { ErrorConfig, HttpErrorParams, ValidationErrors } from "./types.js";
export type { FlatErrorNamespace, CategorizedErrorNamespace } from "./namespace/index.js";
