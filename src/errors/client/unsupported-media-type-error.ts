import { HttpError } from "../../core/index.js";
import { extractCause } from "../../helpers/extract-cause.js";
import { getErrorType } from "../../helpers/get-error-type.js";
import { normalizeToString } from "../../helpers/normalize-to-string.js";

export class UnsupportedMediaTypeError extends HttpError {
	constructor(detail: unknown) {
		super({
			type: getErrorType("unsupported-media-type"),
			title: "Unsupported Media Type",
			status: 415,
			detail: normalizeToString(detail),
			cause: extractCause(detail),
		});
		this.name = "UnsupportedMediaTypeError";
	}
}
