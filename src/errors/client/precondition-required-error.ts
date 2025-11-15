import { HttpError } from "../../core/index.js";
import { extractCause } from "../../helpers/extract-cause.js";
import { getErrorType } from "../../helpers/get-error-type.js";
import { normalizeToString } from "../../helpers/normalize-to-string.js";

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
