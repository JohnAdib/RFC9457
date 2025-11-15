import * as ErrorClasses from "./index.js";

export const factories = {
	internal: (detail: unknown) => new ErrorClasses.InternalServerError(detail),
	notImplemented: (detail: unknown) =>
		new ErrorClasses.NotImplementedError(detail),
	badGateway: (detail: unknown, service?: string) =>
		new ErrorClasses.BadGatewayError(detail, service),
	serviceUnavailable: (detail: unknown, retryAfter?: number) =>
		new ErrorClasses.ServiceUnavailableError(detail, retryAfter),
	gatewayTimeout: (detail: unknown, service?: string) =>
		new ErrorClasses.GatewayTimeoutError(detail, service),
	httpVersionNotSupported: (detail: unknown) =>
		new ErrorClasses.HttpVersionNotSupportedError(detail),
	variantAlsoNegotiates: (detail: unknown) =>
		new ErrorClasses.VariantAlsoNegotiatesError(detail),
	insufficientStorage: (detail: unknown) =>
		new ErrorClasses.InsufficientStorageError(detail),
	loopDetected: (detail: unknown) => new ErrorClasses.LoopDetectedError(detail),
	notExtended: (detail: unknown) => new ErrorClasses.NotExtendedError(detail),
	networkAuthenticationRequired: (detail: unknown) =>
		new ErrorClasses.NetworkAuthenticationRequiredError(detail),
	db: (detail: unknown) => new ErrorClasses.ServiceUnavailableError(detail),
	database: (detail: unknown) =>
		new ErrorClasses.ServiceUnavailableError(detail),
};
