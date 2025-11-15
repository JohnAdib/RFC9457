import { HttpError } from "../../core/index.js";
import { getErrorType } from "../../helpers/get-error-type.js";
import { normalizeToString } from "../../helpers/normalize-to-string.js";

export class NotAcceptableError extends HttpError {
  constructor(detail: unknown) {
    super({
      type: getErrorType("not-acceptable"),
      title: "Not Acceptable",
      status: 406,
      detail: normalizeToString(detail),
    });
    this.name = "NotAcceptableError";
  }
}
