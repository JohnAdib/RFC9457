import type { ValidationErrors } from "../../types/index.js";
import * as ErrorClasses from "./index.js";

export const factories = {
	badRequest: (detail: unknown) => new ErrorClasses.BadRequestError(detail),
	paymentRequired: (detail: unknown) =>
		new ErrorClasses.PaymentRequiredError(detail),
	authentication: (detail: unknown) =>
		new ErrorClasses.AuthenticationError(detail),
	authorization: (detail: unknown) =>
		new ErrorClasses.AuthorizationError(detail),
	notFound: (resourceOrDetail: unknown, id?: string) =>
		new ErrorClasses.NotFoundError(resourceOrDetail, id),
	methodNotAllowed: (detail: unknown) =>
		new ErrorClasses.MethodNotAllowedError(detail),
	notAcceptable: (detail: unknown) =>
		new ErrorClasses.NotAcceptableError(detail),
	requestTimeout: (detail: unknown) =>
		new ErrorClasses.RequestTimeoutError(detail),
	conflict: (detail: unknown) => new ErrorClasses.ConflictError(detail),
	gone: (detail: unknown) => new ErrorClasses.GoneError(detail),
	preconditionFailed: (detail: unknown) =>
		new ErrorClasses.PreconditionFailedError(detail),
	payloadTooLarge: (detail: unknown, maxSize?: number) =>
		new ErrorClasses.PayloadTooLargeError(detail, maxSize),
	unsupportedMediaType: (detail: unknown) =>
		new ErrorClasses.UnsupportedMediaTypeError(detail),
	validation: (detail: unknown, validationErrors?: ValidationErrors) =>
		new ErrorClasses.ValidationError(detail, validationErrors),
	locked: (detail: unknown) => new ErrorClasses.LockedError(detail),
	preconditionRequired: (detail: unknown) =>
		new ErrorClasses.PreconditionRequiredError(detail),
	rateLimit: (detail: unknown, retryAfter?: number) =>
		new ErrorClasses.RateLimitError(detail, retryAfter),
	requestHeaderFieldsTooLarge: (detail: unknown) =>
		new ErrorClasses.RequestHeaderFieldsTooLargeError(detail),
	unavailableForLegalReasons: (detail: unknown) =>
		new ErrorClasses.UnavailableForLegalReasonsError(detail),
};
