// ============================================================
// lib/colors.ts — Centralized Semantic Tag Color System
// ============================================================
// Every technology tag across the entire site uses this map.
// AWS=amber  |  Databricks=red  |  DevOps=emerald  |  Foundations=indigo
// Add new tech strings here and they'll apply everywhere automatically.
// ============================================================

type ColorScheme = {
  bg: string;
  border: string;
  text: string;
  glow: string; // used for card hover glow
};

const COLORS: Record<string, ColorScheme> = {
  // ── AWS / Cloud amber ──────────────────────────────────────
  aws:     { bg: "bg-[#FF9900]/10", border: "border-[#FF9900]/25", text: "text-[#FF9900]", glow: "rgba(255,153,0,0.15)" },
  // ── Databricks red ────────────────────────────────────────
  databricks: { bg: "bg-[#FF3621]/10", border: "border-[#FF3621]/25", text: "text-[#FF3621]", glow: "rgba(255,54,33,0.15)" },
  // ── DevOps / emerald ──────────────────────────────────────
  devops:  { bg: "bg-emerald-500/10", border: "border-emerald-500/25", text: "text-emerald-400", glow: "rgba(16,185,129,0.15)" },
  // ── Foundations purple/indigo ──────────────────────────────
  foundations: { bg: "bg-[#818cf8]/10", border: "border-[#818cf8]/25", text: "text-[#818cf8]", glow: "rgba(129,140,248,0.15)" },
  // ── Default slate fallback ─────────────────────────────────
  default: { bg: "bg-slate-500/10", border: "border-slate-500/25", text: "text-slate-400", glow: "rgba(148,163,184,0.10)" },
};

// ── Keyword → color bucket mapping ────────────────────────────
const TAG_MAP: Record<string, keyof typeof COLORS> = {
  // AWS services & keywords
  "aws":               "aws",
  "vpc":               "aws",
  "privatelink":       "aws",
  "iam":               "aws",
  "s3":                "aws",
  "ec2":               "aws",
  "ecs":               "aws",
  "eks":               "aws",
  "lambda":            "aws",
  "cloudfront":        "aws",
  "route 53":          "aws",
  "cloudtrail":        "aws",
  "cloudwatch":        "aws",
  "cloudformation":    "aws",
  "control tower":     "aws",
  "scp":               "aws",
  "scps":              "aws",
  "organizations":     "aws",
  "identity center":   "aws",
  "guarddduty":        "aws",
  "security hub":      "aws",
  "well-architected":  "aws",
  "landing zone":      "aws",
  "aws vpc":           "aws",
  "aws organizations": "aws",
  "aws backup":        "aws",
  "aws config":        "aws",

  // Databricks keywords
  "databricks":        "databricks",
  "unity catalog":     "databricks",
  "asset bundles":     "databricks",
  "delta lake":        "databricks",

  // DevOps / automation keywords
  "terraform":         "devops",
  "docker":            "devops",
  "kubernetes":        "devops",
  "ci/cd":             "devops",
  "gitlab":            "devops",
  "github actions":    "devops",
  "ansible":           "devops",
  "helm":              "devops",
  "devops":            "devops",
  "automation":        "devops",

  // Foundations
  "python":            "foundations",
  "linux":             "foundations",
  "git":               "foundations",
  "github":            "foundations",
  "azure":             "foundations",
  "bash":              "foundations",
  "networking":        "foundations",
};

/**
 * Given a tag string, returns the Tailwind class set for its color bucket.
 * Falls back to "default" (slate) for unknown tags.
 *
 * @example
 * const { bg, border, text } = getTagColor("AWS VPC")
 * // bg-[#FF9900]/10, border-[#FF9900]/25, text-[#FF9900]
 */
export function getTagColor(tag: string): ColorScheme {
  const key = tag.toLowerCase().trim();
  // Direct match first
  if (TAG_MAP[key]) return COLORS[TAG_MAP[key]];
  // Partial match — check if any keyword is contained in the tag
  for (const [keyword, bucket] of Object.entries(TAG_MAP)) {
    if (key.includes(keyword)) return COLORS[bucket];
  }
  return COLORS.default;
}

/**
 * Returns an inline style object for card hover glow.
 * Used by project cards to glow in their primary tech's brand color.
 */
export function getCardGlow(primaryTag: string): string {
  return getTagColor(primaryTag).glow;
}
