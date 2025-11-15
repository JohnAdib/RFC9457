import { HttpError } from "../../core/index.js";
import { getErrorType } from "../../helpers/get-error-type.js";
import { normalizeToString } from "../../helpers/normalize-to-string.js";

export class PreconditionFailedError extends HttpError {
	constructor(detail: unknown) {
		super({
			type: getErrorType("precondition-failed"),
			title: "Precondition Failed",
			status: 412,
			detail: normalizeToString(detail),
		});
		this.name = "PreconditionFailedError";
	}
}
