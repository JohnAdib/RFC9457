import { HttpError } from "../../core/index.js";
import {
	extractCause,
	getErrorType,
	normalizeToString,
} from "../../helpers/index.js";

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
