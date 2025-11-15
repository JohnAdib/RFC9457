export { configure, getConfig } from "./config/index.js";
export { HttpError } from "./core/index.js";
export { error } from "./error.js";

export {
	AuthenticationError,
	AuthorizationError,
	BadGatewayError,
	BadRequestError,
	ConflictError,
	GatewayTimeoutError,
	InternalServerError,
	MethodNotAllowedError,
	NotFoundError,
	NotImplementedError,
	RateLimitError,
	ServiceUnavailableError,
	ValidationError,
} from "./errors/index.js";
export { errors } from "./errors.js";

export { isHttpError } from "./helpers/index.js";
export type {
	CategorizedErrorNamespace,
	FlatErrorNamespace,
} from "./namespace/index.js";
export type {
	ErrorConfig,
	HttpErrorParams,
	ValidationErrors,
} from "./types.js";
