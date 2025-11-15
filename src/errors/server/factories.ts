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
	insufficientStorage: (detail: unknown) =>
		new ErrorClasses.InsufficientStorageError(detail),
	networkAuthenticationRequired: (detail: unknown) =>
		new ErrorClasses.NetworkAuthenticationRequiredError(detail),
};
