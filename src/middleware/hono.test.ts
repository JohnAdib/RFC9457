import { beforeEach, describe, expect, it, vi } from "vitest";
import { BadRequestError } from "../errors/client/bad-request-error.js";
import { honoErrorMiddleware } from "./hono.js";

describe("honoErrorMiddleware", () => {
	beforeEach(() => {
		// Clear console.error mock before each test
		vi.restoreAllMocks();
	});

	it("should handle HttpError and return proper Response", () => {
		const error = new BadRequestError("Invalid input");
		const response = honoErrorMiddleware(error);

		expect(response).toBeInstanceOf(Response);
		expect(response.status).toBe(400);
		expect(response.headers.get("Content-Type")).toBe("application/json");
	});

	it("should return JSON body for HttpError", async () => {
		const error = new BadRequestError("Invalid data");
		const response = honoErrorMiddleware(error);

		const body = await response.json();
		expect(body.type).toBeDefined();
		expect(body.title).toBe("Bad Request");
		expect(body.status).toBe(400);
		expect(body.detail).toBe("Invalid data");
	});

	it("should handle non-HttpError and return 500 response", () => {
		const consoleErrorSpy = vi
			.spyOn(console, "error")
			.mockImplementation(() => {});

		const error = new Error("Unexpected error");
		const response = honoErrorMiddleware(error);

		expect(consoleErrorSpy).toHaveBeenCalledWith("Unhandled error:", error);
		expect(response).toBeInstanceOf(Response);
		expect(response.status).toBe(500);
		expect(response.headers.get("Content-Type")).toBe("application/json");
	});

	it("should convert non-HttpError to InternalServerError JSON", async () => {
		const consoleErrorSpy = vi
			.spyOn(console, "error")
			.mockImplementation(() => {});

		const error = new Error("Something went wrong");
		const response = honoErrorMiddleware(error);

		const body = await response.json();
		expect(body.type).toBeDefined();
		expect(body.title).toBe("Internal Server Error");
		expect(body.status).toBe(500);
		expect(body.detail).toBe("Something went wrong");

		consoleErrorSpy.mockRestore();
	});

	it("should log non-HttpError to console", () => {
		const consoleErrorSpy = vi
			.spyOn(console, "error")
			.mockImplementation(() => {});

		const error = new TypeError("Type error occurred");
		honoErrorMiddleware(error);

		expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
		expect(consoleErrorSpy).toHaveBeenCalledWith("Unhandled error:", error);

		consoleErrorSpy.mockRestore();
	});

	it("should handle HttpError with all properties in JSON", async () => {
		const error = new BadRequestError("Test error");
		const response = honoErrorMiddleware(error);
		const body = await response.json();

		expect(body).toHaveProperty("type");
		expect(body).toHaveProperty("title");
		expect(body).toHaveProperty("status");
		expect(body).toHaveProperty("detail");
	});

	it("should set correct Content-Type header", () => {
		const error = new BadRequestError("Test");
		const response = honoErrorMiddleware(error);

		expect(response.headers.get("Content-Type")).toBe("application/json");
	});
});
