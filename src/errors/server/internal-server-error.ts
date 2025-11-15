import { HttpError } from "../../core/index.js";
import { extractCause } from "../../helpers/extract-cause.js";
import { getErrorType } from "../../helpers/get-error-type.js";
import { normalizeToString } from "../../helpers/normalize-to-string.js";

export class InternalServerError extends HttpError {
	constructor(detail: unknown) {
		super({
			type: getErrorType("internal-server-error"),
			title: "Internal Server Error",
			status: 500,
			detail: normalizeToString(detail),
			cause: extractCause(detail),
		});
		this.name = "InternalServerError";
	}
}
