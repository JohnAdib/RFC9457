import { HttpError } from "../core/index.js";

export function isHttpError(error: unknown): error is HttpError {
	return error instanceof HttpError;
}
