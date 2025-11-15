import { HttpError } from "../core/index.js";
import { getErrorType } from "../helpers/get-error-type.js";
import { normalizeToString } from "../helpers/normalize-to-string.js";

export class AuthenticationError extends HttpError {
	constructor(detail: unknown) {
		super({
			type: getErrorType("authentication"),
			title: "Authentication Required",
			status: 401,
			detail: normalizeToString(detail),
		});
		this.name = "AuthenticationError";
	}
}
