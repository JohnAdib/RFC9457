import { HttpError } from "../../core/index.js";
import { getErrorType } from "../../helpers/get-error-type.js";
import { normalizeToString } from "../../helpers/normalize-to-string.js";

export class RequestHeaderFieldsTooLargeError extends HttpError {
	constructor(detail: unknown) {
		super({
			type: getErrorType("request-header-fields-too-large"),
			title: "Request Header Fields Too Large",
			status: 431,
			detail: normalizeToString(detail),
		});
		this.name = "RequestHeaderFieldsTooLargeError";
	}
}
