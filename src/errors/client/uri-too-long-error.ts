import { HttpError } from "../../core/index.js";
import { getErrorType, normalizeToString } from "../../helpers/index.js";

export class UriTooLongError extends HttpError {
	constructor(detail: unknown) {
		super({
			type: getErrorType("uri-too-long"),
			title: "URI Too Long",
			status: 414,
			detail: normalizeToString(detail),
		});
		this.name = "UriTooLongError";
	}
}
