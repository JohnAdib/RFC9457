export * as client from "./client/index.js";
export {
	AuthenticationError,
	AuthorizationError,
	BadRequestError,
	ConflictError,
	GoneError,
	LockedError,
	MethodNotAllowedError,
	NotAcceptableError,
	NotFoundError,
	PayloadTooLargeError,
	PaymentRequiredError,
	PreconditionFailedError,
	PreconditionRequiredError,
	RateLimitError,
	RequestHeaderFieldsTooLargeError,
	RequestTimeoutError,
	UnavailableForLegalReasonsError,
	UnsupportedMediaTypeError,
	ValidationError,
} from "./client/index.js";
export * as server from "./server/index.js";

export {
	BadGatewayError,
	GatewayTimeoutError,
	HttpVersionNotSupportedError,
	InsufficientStorageError,
	InternalServerError,
	NetworkAuthenticationRequiredError,
	NotImplementedError,
	ServiceUnavailableError,
} from "./server/index.js";
