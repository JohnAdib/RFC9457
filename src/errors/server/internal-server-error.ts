import { HttpError } from "../../core/index.js";
import {
	extractCause,
	getErrorType,
	normalizeToString,
} from "../../helpers/index.js";

export class InternalServerError extends HttpError {
	constructor(detail: unknown) {
		super({
			type: getErrorType("internal-server-error"),
			title: "Internal Server Error",
			status: 500,
			detail: normalizeToString(detail),
			cause: extractCause(detail),
		});
		this.name = "InternalServerError";
	}
}
