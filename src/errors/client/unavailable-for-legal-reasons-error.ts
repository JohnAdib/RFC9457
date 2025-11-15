import { HttpError } from "../../core/index.js";
import { getErrorType } from "../../helpers/get-error-type.js";
import { normalizeToString } from "../../helpers/normalize-to-string.js";

export class UnavailableForLegalReasonsError extends HttpError {
  constructor(detail: unknown) {
    super({
      type: getErrorType("unavailable-for-legal-reasons"),
      title: "Unavailable For Legal Reasons",
      status: 451,
      detail: normalizeToString(detail),
    });
    this.name = "UnavailableForLegalReasonsError";
  }
}
