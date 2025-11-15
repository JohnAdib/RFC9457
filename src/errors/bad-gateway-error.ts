import { HttpError } from "../core/index.js";
import { getErrorType } from "../helpers/get-error-type.js";
import { normalizeToString } from "../helpers/normalize-to-string.js";

export class BadGatewayError extends HttpError {
  public readonly service?: string;

  constructor(detail: unknown, service?: string) {
    super({
      type: getErrorType("bad-gateway"),
      title: "Bad Gateway",
      status: 502,
      detail: normalizeToString(detail),
    });
    this.name = "BadGatewayError";
    this.service = service;
  }

  toJSON(): Record<string, unknown> {
    return {
      ...super.toJSON(),
      ...(this.service && { service: this.service }),
    };
  }
}
