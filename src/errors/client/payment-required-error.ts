import { HttpError } from "../../core/index.js";
import { getErrorType } from "../../helpers/get-error-type.js";
import { normalizeToString } from "../../helpers/normalize-to-string.js";

export class PaymentRequiredError extends HttpError {
  constructor(detail: unknown) {
    super({
      type: getErrorType("payment-required"),
      title: "Payment Required",
      status: 402,
      detail: normalizeToString(detail),
    });
    this.name = "PaymentRequiredError";
  }
}
