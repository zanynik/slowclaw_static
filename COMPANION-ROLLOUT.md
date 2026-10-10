# SlowClaw companion rollout

This repository remains the GitHub Pages host for slowclaw.social. The full companion source lives in [slowclaw.social/web](https://github.com/zanynik/slowclaw.social/tree/main/web).

The Pages workflow keeps the original landing page while repository variable `SLOWCLAW_SIGNALING_ORIGIN` is absent. After deploying the Cloudflare signaling Worker and installing the compatible TestFlight build, set that variable to its HTTPS workers.dev origin and run **Deploy static content to Pages**. The workflow builds/tests the static browser companion from the source repository's main branch and publishes it into the existing Pages project. No database or Vercel account is involved.

To restore the original page, remove the variable and rerun the workflow. Export unsynced browser drafts before switching. Phone journals remain untouched.

See [the full deployment and recovery plan](https://github.com/zanynik/slowclaw.social/blob/main/docs/web-migration.md).
