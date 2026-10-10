# SlowClaw landing backup

The custom domain **slowclaw.social** belongs to the Pages project in [zanynik/slowclaw.social](https://github.com/zanynik/slowclaw.social), which deploys the full static companion from `web/` through its **Deploy SlowClaw Web to Pages** workflow.

This repository preserves the original landing page and demo. Its own Pages workflow continues publishing that legacy content to the separate project URL. The public signaling variable that was prepared here is not used by this legacy workflow.

To restore the original landing page on slowclaw.social, manually run the **main repository's** Pages workflow with **legacy_landing** checked. It checks out this repository and publishes its content to the existing custom-domain project. Export unsynced browser drafts before switching; phone journals remain untouched.

See [the deployment and recovery plan](https://github.com/zanynik/slowclaw.social/blob/main/docs/web-migration.md).
