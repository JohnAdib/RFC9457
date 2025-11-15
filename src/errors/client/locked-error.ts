import { HttpError } from "../../core/index.js";
import { getErrorType } from "../../helpers/get-error-type.js";
import { normalizeToString } from "../../helpers/normalize-to-string.js";

export class LockedError extends HttpError {
	constructor(detail: unknown) {
		super({
			type: getErrorType("locked"),
			title: "Locked",
			status: 423,
			detail: normalizeToString(detail),
		});
		this.name = "LockedError";
	}
}
