import { HttpError } from "../../core/index.js";
import { extractCause } from "../../helpers/extract-cause.js";
import { getErrorType } from "../../helpers/get-error-type.js";
import { normalizeToString } from "../../helpers/normalize-to-string.js";

export class RequestTimeoutError extends HttpError {
	constructor(detail: unknown) {
		super({
			type: getErrorType("request-timeout"),
			title: "Request Timeout",
			status: 408,
			detail: normalizeToString(detail),
			cause: extractCause(detail),
		});
		this.name = "RequestTimeoutError";
	}
}
