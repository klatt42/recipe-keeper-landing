# Deployment Guide - My Family Recipe Keeper Landing Page

## Quick Deployment to Netlify

### Prerequisites
- Netlify account (free tier works)
- GitHub repository access
- Domain: myfamilyrecipekeeper.com (configured in domain registrar)

---

## Step 1: Connect GitHub to Netlify

1. Go to [Netlify](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose "Deploy with GitHub"
4. Select repository: `klatt42/recipe-keeper-landing`
5. Branch: `main`

---

## Step 2: Configure Build Settings

Netlify will auto-detect Next.js. Verify these settings:

**Build command**: `npm run build`
**Publish directory**: `.next`
**Node version**: 18

(These are already configured in `netlify.toml`)

---

## Step 3: Add Environment Variables

In Netlify dashboard → Site settings → Environment variables:

```
# Optional - for lead magnet email capture
RESEND_API_KEY=re_xxxxxxxxxxxxx
NEXT_PUBLIC_GHL_API_KEY=xxxxxxxxxxxxx

# Optional - for analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Note**: The landing page works without these for now. Email capture will show success but won't actually send until Resend is configured.

---

## Step 4: Configure Custom Domain

### Primary Domain: myfamilyrecipekeeper.com

1. In Netlify: Domain management → Add custom domain
2. Enter: `myfamilyrecipekeeper.com`
3. Follow Netlify's instructions to add DNS records:

**Option A: Netlify DNS (Recommended)**
- Point nameservers to Netlify
- Netlify handles everything automatically

**Option B: External DNS**
- Add A record: `75.2.60.5` (Netlify's IP)
- Add CNAME for www: `<your-site>.netlify.app`

4. Enable HTTPS (automatic via Let's Encrypt)

---

## Step 5: Configure Domain Redirects

### Redirect Alternate Domains

For `sharemyfamilyrecipes.com` and `sharemyfamily.recipes`:

1. Add each domain in Netlify: Domain management → Add domain
2. Configure DNS (same as primary domain)
3. The redirects in `netlify.toml` will automatically redirect to primary domain

**Already configured in netlify.toml**:
```toml
[[redirects]]
  from = "https://sharemyfamilyrecipes.com/*"
  to = "https://myfamilyrecipekeeper.com/:splat"
  status = 301
  force = true
```

---

## Step 6: Deploy

1. Click "Deploy site"
2. Wait 2-3 minutes for build to complete
3. Your landing page is live! 🎉

**Deployment URL**: `https://<your-site>.netlify.app`
**Custom Domain**: `https://myfamilyrecipekeeper.com`

---

## Step 7: Verify Deployment

Visit the landing page and test:

- ✅ Hero section loads
- ✅ All sections render correctly
- ✅ CTAs link to `app.myfamilyrecipekeeper.com`
- ✅ Lead magnet form displays (email capture)
- ✅ Mobile responsive design works
- ✅ No console errors

---

## Continuous Deployment

Once connected, Netlify automatically deploys when you push to `main`:

```bash
# Make changes
git add .
git commit -m "Update landing page copy"
git push

# Netlify automatically rebuilds and deploys
```

**Build time**: ~2-3 minutes
**Deploy previews**: Available for pull requests

---

## Environment-Specific URLs

**Production**: `https://myfamilyrecipekeeper.com`
**Staging** (branch deploys): `https://<branch>--<site>.netlify.app`
**Deploy previews** (PRs): `https://deploy-preview-<pr>--<site>.netlify.app`

---

## Monitoring & Analytics

### Built-in Netlify Analytics
- Traffic stats
- Top pages
- Referrers
- Bandwidth usage

**Cost**: $9/month (optional, upgrade later)

### Google Analytics 4 (Recommended)
1. Create GA4 property
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to Netlify environment variables:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
4. Redeploy site

**Cost**: Free

---

## Performance Optimization

Netlify automatically provides:
- ✅ Global CDN (fast worldwide)
- ✅ Image optimization
- ✅ Asset minification
- ✅ HTTP/2 and HTTP/3
- ✅ Automatic HTTPS
- ✅ DDoS protection

**No additional configuration needed!**

---

## Troubleshooting

### Build fails
- Check Node version (should be 18)
- Verify `package.json` has correct dependencies
- Check build logs in Netlify dashboard

### Domain not working
- Verify DNS records propagated (use `dig` or `nslookup`)
- Wait 24-48 hours for DNS propagation
- Check Netlify DNS settings match registrar

### Lead magnet form doesn't send emails
- Verify `RESEND_API_KEY` is set in environment variables
- Check Resend dashboard for API errors
- For now, form shows success message but doesn't send (intentional)

---

## Next Steps After Deployment

1. **Set up Resend email service** (for lead magnet delivery)
2. **Configure GoHighLevel CRM** (for lead management)
3. **Add Google Analytics 4** (for conversion tracking)
4. **A/B test headlines** (see context library for variations)
5. **Monitor conversion rates** (aim for 5% email capture, 2% signups)

---

## Cost Breakdown

**Netlify Free Tier**:
- ✅ Unlimited bandwidth (fair use)
- ✅ Continuous deployment
- ✅ HTTPS
- ✅ 300 build minutes/month
- ✅ Deploy previews

**Upgrades (optional)**:
- Pro plan: $19/month (more build minutes, advanced features)
- Netlify Analytics: $9/month (privacy-friendly analytics)

**Recommended**: Start with free tier. Upgrade only if needed.

---

## Support

**Netlify Docs**: https://docs.netlify.com
**Next.js Docs**: https://nextjs.org/docs
**Landing Page Repo**: https://github.com/klatt42/recipe-keeper-landing

---

**Your landing page is ready to deploy!** 🚀

Run through these steps and your emotionally compelling landing page will be live at `myfamilyrecipekeeper.com`.
