import { factories as clientFactories } from "./errors/client/index.js";
import { factories as serverFactories } from "./errors/server/index.js";
import { createErrorByStatus } from "./helpers/index.js";

export const errors = {
	client: clientFactories,
	server: serverFactories,
	byStatus: createErrorByStatus,
};
