import { HttpError } from "../../core/index.js";
import { getErrorType, normalizeToString } from "../../helpers/index.js";

export class NotExtendedError extends HttpError {
	constructor(detail: unknown) {
		super({
			type: getErrorType("not-extended"),
			title: "Not Extended",
			status: 510,
			detail: normalizeToString(detail),
		});
		this.name = "NotExtendedError";
	}
}
