/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { ArchitectCommand, ArchitectCommandOptions } from '../models/architect-command';
import { Version } from '../upgrade/version';

export class BuildCommand extends ArchitectCommand {
  public readonly target = 'build';

  public async run(options: ArchitectCommandOptions) {
    // Check Angular and TypeScript versions.
    Version.assertCompatibleAngularVersion(this.workspace.root);
    Version.assertTypescriptVersion(this.workspace.root);

    return this.runArchitectTarget(options);
  }
}
