import { describe, expect, it } from "vitest";
import {
	error,
	errors,
	honoErrorMiddleware,
	isHttpError,
	type ValidationErrors,
} from "./index.js";

describe("index.ts exports", () => {
	it("should export error object with factory functions", () => {
		expect(error).toBeDefined();
		expect(typeof error).toBe("object");
		expect(error).toHaveProperty("badRequest");
		expect(typeof error.badRequest).toBe("function");
	});

	it("should export errors object", () => {
		expect(errors).toBeDefined();
		expect(typeof errors).toBe("object");
	});

	it("should export isHttpError function", () => {
		expect(isHttpError).toBeDefined();
		expect(typeof isHttpError).toBe("function");
	});

	it("should export honoErrorMiddleware function", () => {
		expect(honoErrorMiddleware).toBeDefined();
		expect(typeof honoErrorMiddleware).toBe("function");
	});

	it("should have ValidationErrors type available", () => {
		const validationErrors: ValidationErrors = {
			field1: ["error1"],
		};
		expect(validationErrors).toBeDefined();
	});
});
