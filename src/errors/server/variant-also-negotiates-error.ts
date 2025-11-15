import { HttpError } from "../../core/index.js";
import { getErrorType, normalizeToString } from "../../helpers/index.js";

export class VariantAlsoNegotiatesError extends HttpError {
	constructor(detail: unknown) {
		super({
			type: getErrorType("variant-also-negotiates"),
			title: "Variant Also Negotiates",
			status: 506,
			detail: normalizeToString(detail),
		});
		this.name = "VariantAlsoNegotiatesError";
	}
}
