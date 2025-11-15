import { HttpError } from "../../core/index.js";
import { getErrorType } from "../../helpers/get-error-type.js";
import { normalizeToString } from "../../helpers/normalize-to-string.js";

export class NetworkAuthenticationRequiredError extends HttpError {
  constructor(detail: unknown) {
    super({
      type: getErrorType("network-authentication-required"),
      title: "Network Authentication Required",
      status: 511,
      detail: normalizeToString(detail),
    });
    this.name = "NetworkAuthenticationRequiredError";
  }
}
