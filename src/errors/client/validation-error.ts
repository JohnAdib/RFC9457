import { HttpError } from "../../core/index.js";
import { extractCause } from "../../helpers/extract-cause.js";
import { getErrorType } from "../../helpers/get-error-type.js";
import { normalizeToString } from "../../helpers/normalize-to-string.js";
import type { ValidationErrors } from "../../types/index.js";

export class ValidationError extends HttpError {
	public readonly validationErrors?: ValidationErrors;

	constructor(detail: unknown, validationErrors?: ValidationErrors) {
		super({
			type: getErrorType("validation"),
			title: "Validation Error",
			status: 422,
			detail: normalizeToString(detail),
			cause: extractCause(detail),
		});
		this.name = "ValidationError";
		this.validationErrors = validationErrors;
	}

	toJSON(): Record<string, unknown> {
		return {
			...super.toJSON(),
			...(this.validationErrors && { validationErrors: this.validationErrors }),
		};
	}
}
