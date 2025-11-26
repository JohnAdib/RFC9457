import { HttpError } from "../../core/index.js";
import {
	extractCause,
	getErrorType,
	normalizeToString,
} from "../../helpers/index.js";

export class ConflictError extends HttpError {
	constructor(detail: unknown) {
		super({
			type: getErrorType("conflict"),
			title: "Conflict",
			status: 409,
			detail: normalizeToString(detail),
			cause: extractCause(detail),
		});
		this.name = "ConflictError";
	}
}
