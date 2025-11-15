import { HttpError } from "../../core/index.js";
import { getErrorType, normalizeToString } from "../../helpers/index.js";

export class TooEarlyError extends HttpError {
	constructor(detail: unknown) {
		super({
			type: getErrorType("too-early"),
			title: "Too Early",
			status: 425,
			detail: normalizeToString(detail),
		});
		this.name = "TooEarlyError";
	}
}
