import {
  BadRequestError,
  AuthenticationError,
  AuthorizationError,
  NotFoundError,
  MethodNotAllowedError,
  ConflictError,
  ValidationError,
  RateLimitError,
  InternalServerError,
  NotImplementedError,
  BadGatewayError,
  ServiceUnavailableError,
  GatewayTimeoutError,
} from "../errors/index.js";
import type { ValidationErrors } from "../types.js";

export interface FlatErrorNamespace {
  badRequest(detail: unknown): BadRequestError;
  authentication(detail: unknown): AuthenticationError;
  authorization(detail: unknown): AuthorizationError;
  notFound(resourceOrDetail: unknown, id?: string): NotFoundError;
  methodNotAllowed(detail: unknown): MethodNotAllowedError;
  conflict(detail: unknown): ConflictError;
  validation(detail: unknown, validationErrors?: ValidationErrors): ValidationError;
  rateLimit(detail: unknown, retryAfter?: number): RateLimitError;
  internal(detail: unknown): InternalServerError;
  notImplemented(detail: unknown): NotImplementedError;
  badGateway(detail: unknown, service?: string): BadGatewayError;
  serviceUnavailable(detail: unknown, retryAfter?: number): ServiceUnavailableError;
  gatewayTimeout(detail: unknown, service?: string): GatewayTimeoutError;
}

export function createFlatNamespace(): FlatErrorNamespace {
  return {
    badRequest: (detail: unknown) => new BadRequestError(detail),
    authentication: (detail: unknown) => new AuthenticationError(detail),
    authorization: (detail: unknown) => new AuthorizationError(detail),
    notFound: (resourceOrDetail: unknown, id?: string) => new NotFoundError(resourceOrDetail, id),
    methodNotAllowed: (detail: unknown) => new MethodNotAllowedError(detail),
    conflict: (detail: unknown) => new ConflictError(detail),
    validation: (detail: unknown, validationErrors?: ValidationErrors) =>
      new ValidationError(detail, validationErrors),
    rateLimit: (detail: unknown, retryAfter?: number) => new RateLimitError(detail, retryAfter),
    internal: (detail: unknown) => new InternalServerError(detail),
    notImplemented: (detail: unknown) => new NotImplementedError(detail),
    badGateway: (detail: unknown, service?: string) => new BadGatewayError(detail, service),
    serviceUnavailable: (detail: unknown, retryAfter?: number) =>
      new ServiceUnavailableError(detail, retryAfter),
    gatewayTimeout: (detail: unknown, service?: string) => new GatewayTimeoutError(detail, service),
  };
}
