import { HttpError } from "../core/index.js";
import { getErrorType } from "../helpers/get-error-type.js";
import { normalizeToString } from "../helpers/normalize-to-string.js";

export class BadRequestError extends HttpError {
  constructor(detail: unknown) {
    super({
      type: getErrorType("bad-request"),
      title: "Bad Request",
      status: 400,
      detail: normalizeToString(detail),
    });
    this.name = "BadRequestError";
  }
}
