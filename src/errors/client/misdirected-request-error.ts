import { HttpError } from "../../core/index.js";
import { getErrorType, normalizeToString } from "../../helpers/index.js";

export class MisdirectedRequestError extends HttpError {
	constructor(detail: unknown) {
		super({
			type: getErrorType("misdirected-request"),
			title: "Misdirected Request",
			status: 421,
			detail: normalizeToString(detail),
		});
		this.name = "MisdirectedRequestError";
	}
}
