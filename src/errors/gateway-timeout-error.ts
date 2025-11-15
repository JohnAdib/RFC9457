import { HttpError } from "../core/index.js";
import { getErrorType } from "../helpers/get-error-type.js";
import { normalizeToString } from "../helpers/normalize-to-string.js";

export class GatewayTimeoutError extends HttpError {
  public readonly service?: string;

  constructor(detail: unknown, service?: string) {
    super({
      type: getErrorType("gateway-timeout"),
      title: "Gateway Timeout",
      status: 504,
      detail: normalizeToString(detail),
    });
    this.name = "GatewayTimeoutError";
    this.service = service;
  }

  toJSON(): Record<string, unknown> {
    return {
      ...super.toJSON(),
      ...(this.service && { service: this.service }),
    };
  }
}
