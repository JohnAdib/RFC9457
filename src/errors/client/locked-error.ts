import { HttpError } from "../../core/index.js";
import {
	extractCause,
	getErrorType,
	normalizeToString,
} from "../../helpers/index.js";

export class LockedError extends HttpError {
	constructor(detail: unknown) {
		super({
			type: getErrorType("locked"),
			title: "Locked",
			status: 423,
			detail: normalizeToString(detail),
			cause: extractCause(detail),
		});
		this.name = "LockedError";
	}
}
