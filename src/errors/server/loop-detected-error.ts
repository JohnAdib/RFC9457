import { HttpError } from "../../core/index.js";
import { getErrorType, normalizeToString } from "../../helpers/index.js";

export class LoopDetectedError extends HttpError {
	constructor(detail: unknown) {
		super({
			type: getErrorType("loop-detected"),
			title: "Loop Detected",
			status: 508,
			detail: normalizeToString(detail),
		});
		this.name = "LoopDetectedError";
	}
}
