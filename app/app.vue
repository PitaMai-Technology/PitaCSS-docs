<script setup>

onMounted(async () => {
await import('pita-css/js')
});

useHead({
    link: [
        { rel: "icon", href: "/favicon.png" },
    ],
    htmlAttrs: {
        lang: 'ja'
    },
})
</script>

<template>
    <div>
        <NuxtLayout>
            <NuxtRouteAnnouncer />
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<style>
#progress {
    height: 4px;
    z-index: 1000;
    width: 100%;
}

.shiki {
  background-color: var(--gray-primary) !important;
  color: var(--text-primary) !important;
}

/* ダークモード */
[data-theme="dark"] .shiki {
  background-color: var(--gray-secondary) !important;
  color: var(--text-primary) !important;
  border-color: var(--border-primary);
}

/* システムダークモード */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) .shiki {
    background-color: var(--gray-secondary) !important;
    color: var(--text-primary) !important;
    border-color: var(--border-primary);
  }
}

/* コードトークンの色をPitaCSSの変数で統一 */
.shiki .token.comment,
.shiki .token.prolog,
.shiki .token.cdata {
  color: var(--text-muted) !important;
}

.shiki .token.string,
.shiki .token.attr-value {
  color: var(--brand-primary) !important;
}

.shiki .token.keyword,
.shiki .token.operator,
.shiki .token.entity,
.shiki .token.url {
  color: var(--brand-secondary) !important;
}

.shiki .token.function,
.shiki .token.class-name {
  color: var(--status-info) !important;
}

.shiki .token.number,
.shiki .token.boolean,
.shiki .token.constant {
  color: var(--status-warning) !important;
}

.shiki .token.variable {
  color: var(--text-primary) !important;
}

/* ダークモード用のトークン色 */
[data-theme="dark"] .shiki .token.comment,
[data-theme="dark"] .shiki .token.prolog,
[data-theme="dark"] .shiki .token.cdata {
  color: var(--text-muted) !important;
}

[data-theme="dark"] .shiki .token.string,
[data-theme="dark"] .shiki .token.attr-value {
  color: var(--brand-primary) !important;
}

[data-theme="dark"] .shiki .token.keyword,
[data-theme="dark"] .shiki .token.operator {
  color: var(--brand-secondary) !important;
}

/* システムダークモード用 */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) .shiki .token.comment,
  :root:not([data-theme]) .shiki .token.prolog,
  :root:not([data-theme]) .shiki .token.cdata {
    color: var(--text-muted) !important;
  }

  :root:not([data-theme]) .shiki .token.string,
  :root:not([data-theme]) .shiki .token.attr-value {
    color: var(--brand-primary) !important;
  }

  :root:not([data-theme]) .shiki .token.keyword,
  :root:not([data-theme]) .shiki .token.operator {
    color: var(--brand-secondary) !important;
  }
}
</style>