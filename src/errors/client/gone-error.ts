import { HttpError } from "../../core/index.js";
import { getErrorType } from "../../helpers/get-error-type.js";
import { normalizeToString } from "../../helpers/normalize-to-string.js";

export class GoneError extends HttpError {
	constructor(detail: unknown) {
		super({
			type: getErrorType("gone"),
			title: "Gone",
			status: 410,
			detail: normalizeToString(detail),
		});
		this.name = "GoneError";
	}
}
