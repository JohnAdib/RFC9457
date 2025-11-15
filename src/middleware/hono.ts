import { errors } from "../errors.js";
import { isHttpError } from "../helpers/is-http-error.js";

export const honoErrorMiddleware = (err: Error) => {
	if (isHttpError(err)) {
		return new Response(JSON.stringify(err.toJSON()), {
			status: err.status,
			headers: { "Content-Type": "application/json" },
		});
	}

	console.error("Unhandled error:", err);

	const internalError = errors.server.internal(err);
	return new Response(JSON.stringify(internalError.toJSON()), {
		status: 500,
		headers: { "Content-Type": "application/json" },
	});
};
