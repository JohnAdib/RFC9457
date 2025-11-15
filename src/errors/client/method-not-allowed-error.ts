import { HttpError } from "../../core/index.js";
import { getErrorType } from "../../helpers/get-error-type.js";
import { normalizeToString } from "../../helpers/normalize-to-string.js";

export class MethodNotAllowedError extends HttpError {
	constructor(detail: unknown) {
		super({
			type: getErrorType("method-not-allowed"),
			title: "Method Not Allowed",
			status: 405,
			detail: normalizeToString(detail),
		});
		this.name = "MethodNotAllowedError";
	}
}
