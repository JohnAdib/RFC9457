import { HttpError } from "../../core/index.js";
import {
	extractCause,
	getErrorType,
	normalizeToString,
} from "../../helpers/index.js";

export class LengthRequiredError extends HttpError {
	constructor(detail: unknown) {
		super({
			type: getErrorType("length-required"),
			title: "Length Required",
			status: 411,
			detail: normalizeToString(detail),
			cause: extractCause(detail),
		});
		this.name = "LengthRequiredError";
	}
}
