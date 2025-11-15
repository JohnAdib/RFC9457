import { HttpError } from "../../core/index.js";
import {
	extractCause,
	getErrorType,
	normalizeToString,
} from "../../helpers/index.js";

export class RangeNotSatisfiableError extends HttpError {
	constructor(detail: unknown) {
		super({
			type: getErrorType("range-not-satisfiable"),
			title: "Range Not Satisfiable",
			status: 416,
			detail: normalizeToString(detail),
			cause: extractCause(detail),
		});
		this.name = "RangeNotSatisfiableError";
	}
}
