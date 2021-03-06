/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import setProcessTitle from "./utils/setProcessTitle";
import {TestWorker} from "@internal/core";
import {parseCLIFlagsFromProcess} from "@internal/cli-flags";
import {TestWorkerFlags} from "@internal/core/test-worker/TestWorker";

export default async function testWorker() {
	setProcessTitle("test-worker");

	const parser = parseCLIFlagsFromProcess({
		programName: "rome test-worker",
		defineFlags(c): TestWorkerFlags {
			return {
				inspectorPort: c.get("inspectorPort").asNumber(),
			};
		},
	});
	const flags: TestWorkerFlags = await parser.init();

	const worker = new TestWorker();
	await worker.init(flags);
}
