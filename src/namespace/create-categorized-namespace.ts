import * as clientErrors from "../errors/client/index.js";
import * as serverErrors from "../errors/server/index.js";
import type { ValidationErrors } from "../types/index.js";

export interface CategorizedErrorNamespace {
	client: {
		badRequest(detail: unknown): clientErrors.BadRequestError;
		paymentRequired(detail: unknown): clientErrors.PaymentRequiredError;
		authentication(detail: unknown): clientErrors.AuthenticationError;
		authorization(detail: unknown): clientErrors.AuthorizationError;
		notFound(resourceOrDetail: unknown, id?: string): clientErrors.NotFoundError;
		methodNotAllowed(detail: unknown): clientErrors.MethodNotAllowedError;
		notAcceptable(detail: unknown): clientErrors.NotAcceptableError;
		requestTimeout(detail: unknown): clientErrors.RequestTimeoutError;
		conflict(detail: unknown): clientErrors.ConflictError;
		gone(detail: unknown): clientErrors.GoneError;
		preconditionFailed(detail: unknown): clientErrors.PreconditionFailedError;
		payloadTooLarge(detail: unknown, maxSize?: number): clientErrors.PayloadTooLargeError;
		unsupportedMediaType(detail: unknown): clientErrors.UnsupportedMediaTypeError;
		validation(detail: unknown, validationErrors?: ValidationErrors): clientErrors.ValidationError;
		locked(detail: unknown): clientErrors.LockedError;
		preconditionRequired(detail: unknown): clientErrors.PreconditionRequiredError;
		rateLimit(detail: unknown, retryAfter?: number): clientErrors.RateLimitError;
		requestHeaderFieldsTooLarge(detail: unknown): clientErrors.RequestHeaderFieldsTooLargeError;
		unavailableForLegalReasons(detail: unknown): clientErrors.UnavailableForLegalReasonsError;
	};
	server: {
		internal(detail: unknown): serverErrors.InternalServerError;
		notImplemented(detail: unknown): serverErrors.NotImplementedError;
		badGateway(detail: unknown, service?: string): serverErrors.BadGatewayError;
		serviceUnavailable(detail: unknown, retryAfter?: number): serverErrors.ServiceUnavailableError;
		gatewayTimeout(detail: unknown, service?: string): serverErrors.GatewayTimeoutError;
		httpVersionNotSupported(detail: unknown): serverErrors.HttpVersionNotSupportedError;
		insufficientStorage(detail: unknown): serverErrors.InsufficientStorageError;
		networkAuthenticationRequired(detail: unknown): serverErrors.NetworkAuthenticationRequiredError;
	};
}

export function createCategorizedNamespace(): CategorizedErrorNamespace {
	return {
		client: {
			badRequest: (detail: unknown) => new clientErrors.BadRequestError(detail),
			paymentRequired: (detail: unknown) => new clientErrors.PaymentRequiredError(detail),
			authentication: (detail: unknown) => new clientErrors.AuthenticationError(detail),
			authorization: (detail: unknown) => new clientErrors.AuthorizationError(detail),
			notFound: (resourceOrDetail: unknown, id?: string) =>
				new clientErrors.NotFoundError(resourceOrDetail, id),
			methodNotAllowed: (detail: unknown) => new clientErrors.MethodNotAllowedError(detail),
			notAcceptable: (detail: unknown) => new clientErrors.NotAcceptableError(detail),
			requestTimeout: (detail: unknown) => new clientErrors.RequestTimeoutError(detail),
			conflict: (detail: unknown) => new clientErrors.ConflictError(detail),
			gone: (detail: unknown) => new clientErrors.GoneError(detail),
			preconditionFailed: (detail: unknown) => new clientErrors.PreconditionFailedError(detail),
			payloadTooLarge: (detail: unknown, maxSize?: number) =>
				new clientErrors.PayloadTooLargeError(detail, maxSize),
			unsupportedMediaType: (detail: unknown) =>
				new clientErrors.UnsupportedMediaTypeError(detail),
			validation: (detail: unknown, validationErrors?: ValidationErrors) =>
				new clientErrors.ValidationError(detail, validationErrors),
			locked: (detail: unknown) => new clientErrors.LockedError(detail),
			preconditionRequired: (detail: unknown) =>
				new clientErrors.PreconditionRequiredError(detail),
			rateLimit: (detail: unknown, retryAfter?: number) =>
				new clientErrors.RateLimitError(detail, retryAfter),
			requestHeaderFieldsTooLarge: (detail: unknown) =>
				new clientErrors.RequestHeaderFieldsTooLargeError(detail),
			unavailableForLegalReasons: (detail: unknown) =>
				new clientErrors.UnavailableForLegalReasonsError(detail),
		},
		server: {
			internal: (detail: unknown) => new serverErrors.InternalServerError(detail),
			notImplemented: (detail: unknown) => new serverErrors.NotImplementedError(detail),
			badGateway: (detail: unknown, service?: string) =>
				new serverErrors.BadGatewayError(detail, service),
			serviceUnavailable: (detail: unknown, retryAfter?: number) =>
				new serverErrors.ServiceUnavailableError(detail, retryAfter),
			gatewayTimeout: (detail: unknown, service?: string) =>
				new serverErrors.GatewayTimeoutError(detail, service),
			httpVersionNotSupported: (detail: unknown) =>
				new serverErrors.HttpVersionNotSupportedError(detail),
			insufficientStorage: (detail: unknown) =>
				new serverErrors.InsufficientStorageError(detail),
			networkAuthenticationRequired: (detail: unknown) =>
				new serverErrors.NetworkAuthenticationRequiredError(detail),
		},
	};
}
