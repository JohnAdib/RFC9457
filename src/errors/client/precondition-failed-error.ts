import { HttpError } from "../../core/index.js";
import {
	extractCause,
	getErrorType,
	normalizeToString,
} from "../../helpers/index.js";

export class PreconditionFailedError extends HttpError {
	constructor(detail: unknown) {
		super({
			type: getErrorType("precondition-failed"),
			title: "Precondition Failed",
			status: 412,
			detail: normalizeToString(detail),
			cause: extractCause(detail),
		});
		this.name = "PreconditionFailedError";
	}
}
