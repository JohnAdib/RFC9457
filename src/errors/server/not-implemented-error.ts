import { HttpError } from "../../core/index.js";
import {
	extractCause,
	getErrorType,
	normalizeToString,
} from "../../helpers/index.js";

export class NotImplementedError extends HttpError {
	constructor(detail: unknown) {
		super({
			type: getErrorType("not-implemented"),
			title: "Not Implemented",
			status: 501,
			detail: normalizeToString(detail),
			cause: extractCause(detail),
		});
		this.name = "NotImplementedError";
	}
}
