import { HttpError } from "../../core/index.js";
import { extractCause } from "../../helpers/extract-cause.js";
import { getErrorType } from "../../helpers/get-error-type.js";
import { normalizeToString } from "../../helpers/normalize-to-string.js";

export class NotFoundError extends HttpError {
	constructor(resourceOrDetail: unknown, id?: string) {
		let detail: string;

		if (id !== undefined) {
			detail = `${String(resourceOrDetail)} ${id} not found`;
		} else {
			detail = normalizeToString(resourceOrDetail);
		}

		super({
			type: getErrorType("not-found"),
			title: "Not Found",
			status: 404,
			detail,
			cause: id === undefined ? extractCause(resourceOrDetail) : undefined,
		});
		this.name = "NotFoundError";
	}
}
