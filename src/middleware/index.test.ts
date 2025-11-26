import { describe, expect, it } from "vitest";
import { honoErrorMiddleware } from "./index.js";

describe("middleware/index.ts exports", () => {
	it("should export honoErrorMiddleware", () => {
		expect(honoErrorMiddleware).toBeDefined();
		expect(typeof honoErrorMiddleware).toBe("function");
	});
});
