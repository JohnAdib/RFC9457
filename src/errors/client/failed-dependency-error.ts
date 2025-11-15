import { HttpError } from "../../core/index.js";
import { getErrorType, normalizeToString } from "../../helpers/index.js";

export class FailedDependencyError extends HttpError {
	constructor(detail: unknown) {
		super({
			type: getErrorType("failed-dependency"),
			title: "Failed Dependency",
			status: 424,
			detail: normalizeToString(detail),
		});
		this.name = "FailedDependencyError";
	}
}
