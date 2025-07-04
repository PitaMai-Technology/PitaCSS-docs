<script setup>

useSeoMeta({
    ogImage: "https://css.pitahex.com/ogp.png",
})

const tabsData = [
    { title: 'npm' },
    { title: 'pnpm' },
]
</script>

<template>
    <div class="hero">
        <div class="w-max1250">
            <div class="hero-text">
                <div class="hero-badge">
                    <span class="badge-text"><font-awesome-icon icon="fa-solid fa-book" />
                        ドキュメンテーションに特化したCSSフレームワーク</span>
                </div>
                <div>
                    <h1>
                        PitaCSS ~ ドキュメンテーションに特化
                    </h1>
                </div>
                <div>
                    <BlockTabs :tabs="tabsData" :default-tab="0">
                        <template #tab-0>
                            <p><code>npm install pita-css</code></p>
                        </template>
                        <template #tab-1>
                            <p><code>pnpm add pita-css</code></p>
                        </template>
                    </BlockTabs>
                </div>
                <p>
                    ドキュメント型サイトに最適化されたClassレスベースのCSSフレームワークです。HTMLタグだけで見やすいデザインが完成し、必要に応じてユーティリティClassとコンポーネントClassを段階的に追加できます。ドキュメントサイトに便利な依存関係のないJavaScript機能が付属しています。
                </p>
                <ul>
                    <li>もちろんレスポンシブ</li>
                    <li>Classレスベース設計で、タグだけで直感的かつ分かりやすい見た目</li>
                    <li>必要に応じてユーティリティ(低水準)Classやハイレベル(コンポーネント)Classも利用可能</li>
                    <li>ライブラリ・フレームワーク非依存、Vue/React(サポート予定)/バニラJSで利用OK</li>
                    <li>日本語フォント・行間最適化、レスポンシブ文字サイズ</li>
                    <li>ほぼゼロ設定・軽量・依存関係なし</li>
                </ul>
                <br>
                <p>「ドキュメントにコストをかけたくない」「すぐに使えるシンプルなCSSが欲しい」そんな方にぴったり。PitaCSSは、<b>“何もしなくてもHTMLだけで完結できる”</b>を目指し、シンプルさと拡張性を両立しています。
                </p>
                <div class="hero-actions">
                    <NuxtLink to="/docs" class="btn btn-primary">
                        <font-awesome-icon icon="fa-solid fa-play" /> 始める
                    </NuxtLink>
                    <NuxtLink to="https://github.com/otusoa/PitaCSS" target="_blank" class="btn btn-secondary">
                        <font-awesome-icon icon="fa-brands fa-github" /> GitHub
                    </NuxtLink>
                </div>
                <div class="hero-actions">
                    <NuxtLink to="https://discord.gg/rf3et8MhKh" target="_blank" class="btn btn-primary">
                        <font-awesome-icon icon="fa-brands fa-discord" /> Discord
                    </NuxtLink>
                </div>
            </div>

            <div class="hero-visual">
            </div>
        </div>

        <div class="hero-stats pT40 pB20">
            <div class="stat">
                <div class="stat-number">軽量(CSS) <font-awesome-icon icon="fa-solid fa-feather-pointed" /></div>
                <div class="stat-label">
                    30KB未満<br>
                    <small>gzip: 6KB未満</small>
                </div>
            </div>
            <div class="stat">
                <div class="stat-number">直感的</div>
                <div class="stat-label">Classレス設計</div>
            </div>
            <div class="stat">
                <div class="stat-number">日本語 🇯🇵</div>
                <div class="stat-label">見やすい見た目に</div>
            </div>
        </div>

        <section>
            <h2>PitaCSSの中核となる考え、段階的採用思想とは？</h2>
            <p>
                Classレス思想をベースとした、新しい思想です。(おそらく...)<br>
            </p>
            <h3>内容</h3>
            <p>
                すべてHTMLタグ(Classレス)だけで記述するのは柔軟性に欠けます。そこでPitaCSSは、あくまでClassレス思想をベースにしつつ、
                「Classレス」→「低水準Class」→「ハイレベルClass」<br>
                の順に適切なクラスを段階的に採用することで、柔軟性がありながらも、コードをシンプルに保てるという思想です！。<br>
                <br>
                具体的な内容はドキュメントにありますので、そちらをご覧ください。
            </p>
            <NuxtLink to="/docs" class="btn btn-primary fit-content">
                思想(ドキュメント)
            </NuxtLink>

        </section>

        <section>
            <pre class="language-html shiki shiki-themes github-dark github-light">
        <code>
            &lt;!-- クラスレス --&gt;
            &lt;section&gt;
            &lt;h1&gt;PitaCSS&lt;/h1&gt;
            &lt;p&gt;ドキュメント型サイトに特化したCSSフレームワーク&lt;/p&gt;
            &lt;/section&gt;

            &lt;!-- 段階的にユーティリティClass（低水準クラス）を利用する --&gt;
            &lt;div class="p20 mB20"&gt;
            &lt;p class="text-xs mB10"&gt;text-xs: とても小さいテキスト(13px固定)&lt;/p&gt;
            &lt;p class="text-sm mB10"&gt;text-sm: 小さいテキスト(15px固定)&lt;/p&gt;
            &lt;p class="text-base mB10"&gt;text-base: 基本サイズのテキスト(Clamp関数によりレスポンシブです)&lt;/p&gt;
            &lt;p class="text-lg mB10"&gt;text-lg: 大きいテキスト(Clamp関数によりレスポンシブです)&lt;/p&gt;
            &lt;p class="text-xl mB10"&gt;text-xl: より大きいテキスト(Clamp関数によりレスポンシブです)&lt;/p&gt;
            &lt;p class="text-2xl mB10"&gt;text-2xl: 最大サイズのテキスト(Clamp関数によりレスポンシブです)&lt;/p&gt;
            &lt;/div&gt;

            &lt;!-- 必要に応じてハイレベルClass --&gt;
            &lt;section&gt;
            &lt;h2&gt;alertシリーズ&lt;/h2&gt;
            &lt;div class="alert info"&gt;
            &lt;p&gt;情報メッセージ&lt;/p&gt;
            &lt;/div&gt;
            &lt;/section&gt;
            &lt;/div&gt;</code>
    </pre>
        </section>
    </div>
    <section>
        <h2><font-awesome-icon icon="fa-brands fa-js" /> JavaScript機能</h2>
        <ul>
            <li>
                テーマ切替 - ライト/ダーク/自動
            </li>
            <li>
                サイドナビ - 自動折りたたみ・SPA(CSR)対応
            </li>
            <li>
                プログレスローダー - ページのローディングを監視して、整合性の取れたローディングプログレスバーをページ上部に表示します
            </li>
        </ul>
    </section>
    <section>
        <h2>思想</h2>
        <strong>
            <p>"　開発者が何もしなくても、HTMLだけで完結できる。　"</p>
        </strong>
        <p>というClassレスの思想に重きを置き、低水準Class (いわゆるユーティリティクラス)、ドキュメントサイトに必要な高度な動的な機能(JS)を足して、バランスよく内包しました。</p>
        <section>
            <h3>ブレイクポイント(珍しいかもしれませんが、タブレット→スマホの順番で尊重します)</h3>
            <p>iPadなどのタブレットにも対応するため、基本的にブレイクポイントは1250pxです。
                また、多くの場合ドキュメントを読むのは"スマホ"ではなく<strong>「タブレットやPC」</strong>です。そこも考慮しました。</p>
        </section>
    </section>
    <section>
        <h2>注意事項</h2>
        <div class="alert warning">
            <p>
                現在、PitaCSSは開発初期段階(α版)であり、機能やドキュメントはまだ完全ではありません。また、重大な変更が行われる可能性があります。
            </p>
        </div>
    </section>
</template>

<style>
.tabs-content {
    min-height: fit-content !important;
}
</style>

<style scoped>
button {
    color: white;
}

.hero {
    min-height: 90vh;
    background-color: var(--gray-tertiary);
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero-text {
    display: flex;
    flex-direction: column;
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    background-color: var(--gray-primary);
    border: 1px solid var(--border-primary);
    border-radius: calc(infinity * 1px);
    padding: 8px 16px;
    margin-bottom: 30px;
    width: fit-content;
    box-shadow: var(--shadow-sm);
}

.badge-text {
    color: var(--text-secondary);
    font-size: var(--text-sm);
    font-weight: 500;
}

.hero-actions {
    display: flex;
    gap: 15px;
    margin-bottom: 30px;
}

.btn {
    padding: 12px 24px;
    border-radius: calc(infinity * 1px);
    font-weight: 600;
    font-size: var(--text-base);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
    text-decoration: none;
    box-shadow: var(--shadow-md);
}

.btn-primary {
    background-color: var(--brand-secondary);
    color: var(--white);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
    background-color: var(--gray-primary);
    color: var(--text-primary);
    border: 1px solid var(--border-primary);
}

.btn-secondary:hover {
    background-color: var(--gray-secondary);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.hero-visual {
    display: flex;
    justify-content: center;
    align-items: center;
}

.code-preview {
    background-color: var(--text-primary);
    border-radius: 12px;
    box-shadow: var(--shadow-lg);
    overflow: hidden;
    width: 100%;
    max-width: 400px;
}

.hero-stats {
    display: flex;
    justify-content: center;
    gap: 60px;
    border-top: 1px solid var(--border-primary);
}

.stat {
    text-align: center;
    background-color: var(--gray-primary);
    padding: 20px;
    border-radius: 12px;
    box-shadow: var(--shadow-sm);
    width: 200px;
    max-width: 200px;
}

.stat-number {
    font-size: var(--text-lg);
    font-weight: 700;
    color: var(--brand-primary);
    margin-bottom: 8px;
}

.stat-label {
    font-size: var(--text-sm);
    color: var(--text-secondary);
}

@media (max-width: 1250px) {

    .hero-stats {
        gap: 30px;
        margin-top: 40px;
    }

    .code-preview {
        max-width: 100%;
    }
}

@media (max-width: 768px) {
    .hero-stats {
        flex-direction: column;
        gap: 20px;
    }

    .stat {
        margin: 0 auto;
        max-width: 200px;
    }
}
</style>