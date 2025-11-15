import { HttpError } from "../../core/index.js";
import { extractCause } from "../../helpers/extract-cause.js";
import { getErrorType } from "../../helpers/get-error-type.js";
import { normalizeToString } from "../../helpers/normalize-to-string.js";

export class ServiceUnavailableError extends HttpError {
	public readonly retryAfter?: number;

	constructor(detail: unknown, retryAfter?: number) {
		super({
			type: getErrorType("service-unavailable"),
			title: "Service Unavailable",
			status: 503,
			detail: normalizeToString(detail),
			cause: extractCause(detail),
		});
		this.name = "ServiceUnavailableError";
		this.retryAfter = retryAfter;
	}

	toJSON(): Record<string, unknown> {
		return {
			...super.toJSON(),
			...(this.retryAfter !== undefined && { retryAfter: this.retryAfter }),
		};
	}
}
