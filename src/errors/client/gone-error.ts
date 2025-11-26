import { HttpError } from "../../core/index.js";
import {
	extractCause,
	getErrorType,
	normalizeToString,
} from "../../helpers/index.js";

export class GoneError extends HttpError {
	constructor(detail: unknown) {
		super({
			type: getErrorType("gone"),
			title: "Gone",
			status: 410,
			detail: normalizeToString(detail),
			cause: extractCause(detail),
		});
		this.name = "GoneError";
	}
}
