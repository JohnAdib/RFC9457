import { HttpError } from "../core/index.js";
import { getErrorType } from "../helpers/get-error-type.js";
import { normalizeToString } from "../helpers/normalize-to-string.js";

export class ConflictError extends HttpError {
  constructor(detail: unknown) {
    super({
      type: getErrorType("conflict"),
      title: "Conflict",
      status: 409,
      detail: normalizeToString(detail),
    });
    this.name = "ConflictError";
  }
}
