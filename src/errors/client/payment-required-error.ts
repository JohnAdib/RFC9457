import { HttpError } from "../../core/index.js";
import {
	extractCause,
	getErrorType,
	normalizeToString,
} from "../../helpers/index.js";

export class PaymentRequiredError extends HttpError {
	constructor(detail: unknown) {
		super({
			type: getErrorType("payment-required"),
			title: "Payment Required",
			status: 402,
			detail: normalizeToString(detail),
			cause: extractCause(detail),
		});
		this.name = "PaymentRequiredError";
	}
}
