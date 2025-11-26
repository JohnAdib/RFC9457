import { HttpError } from "../../core/index.js";
import {
	extractCause,
	getErrorType,
	normalizeToString,
} from "../../helpers/index.js";

export class PreconditionRequiredError extends HttpError {
	constructor(detail: unknown) {
		super({
			type: getErrorType("precondition-required"),
			title: "Precondition Required",
			status: 428,
			detail: normalizeToString(detail),
			cause: extractCause(detail),
		});
		this.name = "PreconditionRequiredError";
	}
}
