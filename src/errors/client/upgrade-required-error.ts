import { HttpError } from "../../core/index.js";
import { getErrorType, normalizeToString } from "../../helpers/index.js";

export class UpgradeRequiredError extends HttpError {
	constructor(detail: unknown) {
		super({
			type: getErrorType("upgrade-required"),
			title: "Upgrade Required",
			status: 426,
			detail: normalizeToString(detail),
		});
		this.name = "UpgradeRequiredError";
	}
}
