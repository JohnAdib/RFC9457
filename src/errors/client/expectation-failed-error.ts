import { HttpError } from "../../core/index.js";
import { getErrorType, normalizeToString } from "../../helpers/index.js";

export class ExpectationFailedError extends HttpError {
	constructor(detail: unknown) {
		super({
			type: getErrorType("expectation-failed"),
			title: "Expectation Failed",
			status: 417,
			detail: normalizeToString(detail),
		});
		this.name = "ExpectationFailedError";
	}
}
