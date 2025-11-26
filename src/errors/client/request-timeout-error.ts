import { HttpError } from "../../core/index.js";
import {
	extractCause,
	getErrorType,
	normalizeToString,
} from "../../helpers/index.js";

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
