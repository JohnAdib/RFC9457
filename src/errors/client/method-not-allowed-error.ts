import { HttpError } from "../../core/index.js";
import {
	extractCause,
	getErrorType,
	normalizeToString,
} from "../../helpers/index.js";

export class MethodNotAllowedError extends HttpError {
	constructor(detail: unknown) {
		super({
			type: getErrorType("method-not-allowed"),
			title: "Method Not Allowed",
			status: 405,
			detail: normalizeToString(detail),
			cause: extractCause(detail),
		});
		this.name = "MethodNotAllowedError";
	}
}
