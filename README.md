# SlowClaw.social

A sleek, modern static landing page for SlowClaw - your personal, local-first AI agent for social curation. 

## Deployment

This repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys the website to **GitHub Pages** whenever you push to the `main` or `master` branch.

### How to trigger deployment:
1. Create a remote repository on GitHub.
2. Push this existing local repository to your new remote GitHub repository:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```
3. Go to your GitHub repository -> Settings -> Pages. Under "Build and deployment", select "GitHub Actions". The deployment should run automatically.

---

## 🌐 Setting Up Your Custom Domain (slowclaw.social)

Once you have pushed this code to GitHub and the site is deploying to `username.github.io/repo-name`, you can easily point your new domain (`slowclaw.social`) to it.

### Step 1: Add the domain in GitHub
1. Navigate to your repository on GitHub.
2. Go to **Settings** > **Pages**.
3. Scroll down to the **Custom domain** section.
4. Type `slowclaw.social` and click **Save**. 
   *(This will automatically create a `CNAME` commit in your repository).*
5. Check the **Enforce HTTPS** box below it (it might take some time to issue a certificate after Step 2).

### Step 2: Configure your DNS records
Go to the DNS settings panel of the domain registrar where you purchased `slowclaw.social` (e.g., Namecheap, GoDaddy, Cloudflare, Porkbun).

Create the following records:

**A Records (pointing to GitHub's IP addresses):**
- Type: `A`, Name/Host: `@`, Value: `185.199.108.153`
- Type: `A`, Name/Host: `@`, Value: `185.199.109.153`
- Type: `A`, Name/Host: `@`, Value: `185.199.110.153`
- Type: `A`, Name/Host: `@`, Value: `185.199.111.153`

**CNAME Record (for www subdomain):**
- Type: `CNAME`, Name/Host: `www`, Value: `YOUR_USERNAME.github.io.` *(Don't forget the trailing dot if required by your registrar)*

### Step 3: Wait for DNS Propagation
DNS changes can take anywhere from a few minutes to 48 hours to propagate globally. Once propagated, navigating to `slowclaw.social` will load your new landing page over HTTPS!
