import { HttpError } from "../../core/index.js";
import { extractCause } from "../../helpers/extract-cause.js";
import { getErrorType } from "../../helpers/get-error-type.js";
import { normalizeToString } from "../../helpers/normalize-to-string.js";

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
