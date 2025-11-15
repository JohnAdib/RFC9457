import { factories as clientFactories } from "./errors/client/index.js";
import { factories as serverFactories } from "./errors/server/index.js";

export const error = {
	...clientFactories,
	...serverFactories,
};
