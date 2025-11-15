import { HttpError } from "../../core/index.js";
import { getErrorType } from "../../helpers/get-error-type.js";
import { normalizeToString } from "../../helpers/normalize-to-string.js";

export class HttpVersionNotSupportedError extends HttpError {
	constructor(detail: unknown) {
		super({
			type: getErrorType("http-version-not-supported"),
			title: "HTTP Version Not Supported",
			status: 505,
			detail: normalizeToString(detail),
		});
		this.name = "HttpVersionNotSupportedError";
	}
}
