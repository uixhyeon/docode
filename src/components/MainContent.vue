<template>
  <article class="content">
    <div class="breadcrumb">
      <a href="#">Learn React</a>
      <span class="separator">›</span>
      <span>React Developer Tools</span>
    </div>

    <h1>React Developer Tools</h1>

    <div class="intro">
      <p>
        Use React Developer Tools to inspect React <a href="#">components</a>, edit <a href="#">props</a> and <a href="#">state</a>,
        and identify performance problems.
      </p>
    </div>

    <section id="browser-extension" class="section">
      <h2>Browser extension</h2>
      <p>
        The easiest way to debug websites built with React is to install the React Developer Tools browser extension.
        It is available for several popular browsers:
      </p>
      <ul>
        <li><a href="#" class="external-link">Install for Chrome</a></li>
        <li><a href="#" class="external-link">Install for Firefox</a></li>
        <li><a href="#" class="external-link">Install for Edge</a></li>
      </ul>

      <p>
        Now, if you visit a website <strong>built with React</strong>, you will see the
        <strong>Components</strong> and <strong>Profiler</strong> panels.
      </p>

      <div class="image-container">
        <div class="image-placeholder">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="400" viewBox="0 0 800 400" fill="none">
            <rect width="800" height="400" fill="#f6f7f9"/>
            <rect x="50" y="50" width="700" height="300" fill="white" stroke="#e4e7eb" stroke-width="2"/>
            <text x="400" y="210" text-anchor="middle" fill="#57606a" font-size="18" font-family="system-ui">
              React DevTools Screenshot
            </text>
          </svg>
        </div>
        <p class="image-caption">React Developer Tools 브라우저 확장 프로그램</p>
      </div>

      <div class="note">
        <h4>📋 Note</h4>
        <p>
          <strong>For locally built sites</strong>, open the browser console and enable the React DevTools.
          For production sites, React DevTools will only work if the site was built in development mode.
        </p>
      </div>
    </section>

    <section id="safari" class="section">
      <h2>Safari and other browsers</h2>
      <p>
        For other browsers (for example, Safari), install the
        <a href="#" class="inline-code">react-devtools</a> npm package:
      </p>

      <CodeBlock
        :code="safariInstallCode"
        language="bash"
      />

      <p>Next, open the developer tools:</p>

      <CodeBlock
        :code="safariRunCode"
        language="bash"
      />

      <p>Then connect your website by adding the following <code>&lt;script&gt;</code> tag to the beginning of your website's <code>&lt;head&gt;</code>:</p>

      <CodeBlock
        :code="safariScriptCode"
        language="html"
      />

      <p>Reload your website now to view it in the developer tools.</p>

      <div class="note warning">
        <h4>⚠️ Warning</h4>
        <p>
          <strong>Remove this script tag before deploying to production!</strong>
          It should only be used during development.
        </p>
      </div>
    </section>

    <section id="mobile" class="section">
      <h2>Mobile (React Native)</h2>
      <p>
        React Developer Tools can also be used to inspect apps built with <a href="#">React Native</a>.
      </p>

      <p>
        The easiest way to use React Developer Tools is to install it globally:
      </p>

      <CodeBlock
        :code="mobileInstallCode"
        language="bash"
      />

      <p>Next, open the developer tools from the terminal:</p>

      <CodeBlock
        :code="mobileRunCode"
        language="bash"
      />

      <p>It should connect to any local React Native app that's running.</p>

      <div class="tip">
        <h4>💡 Tip</h4>
        <p>
          Try reloading the app if developer tools don't connect after a few seconds.
        </p>
      </div>

      <p>
        <a href="#" class="learn-more">Learn more about debugging React Native →</a>
      </p>
    </section>

    <nav class="page-navigation">
      <a href="#" class="nav-button prev">
        <span class="nav-label">Previous</span>
        <span class="nav-title">Editor Setup</span>
      </a>
      <a href="#" class="nav-button next">
        <span class="nav-label">Next</span>
        <span class="nav-title">Describing the UI</span>
      </a>
    </nav>
  </article>
</template>

<script setup>
import { ref } from 'vue'
import CodeBlock from './CodeBlock.vue'

const safariInstallCode = ref(`# Yarn
yarn global add react-devtools

# Npm
npm install -g react-devtools`)

const safariRunCode = ref(`react-devtools`)

const safariScriptCode = ref(`<html>
  <head>
    <script src="http://localhost:8097"><\/script>
    <!-- ... -->
  </head>
  <!-- ... -->
</html>`)

const mobileInstallCode = ref(`# Yarn
yarn global add react-devtools

# Npm
npm install -g react-devtools`)

const mobileRunCode = ref(`react-devtools`)
</script>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;

.content {
  max-width: 800px;
}

.breadcrumb {
  font-size: $font-size-sm;
  color: $text-secondary;
  margin-bottom: $spacing-xl;
  display: flex;
  align-items: center;
  gap: $spacing-sm;

  a {
    &:hover {
      text-decoration: underline;
    }
  }

  .separator {
    color: $border-color;
  }
}

.intro {
  font-size: $font-size-lg;
  color: $text-primary;
  margin-bottom: $spacing-xxl;
  padding: $spacing-lg;
  background-color: rgba($primary-color, 0.03);
  border-radius: $border-radius-md;
  border-left: 4px solid $primary-color;
}

.section {
  margin-bottom: $spacing-xxl;
}

.external-link {
  &::after {
    content: " ↗";
    font-size: 0.8em;
  }
}

.inline-code {
  font-family: $font-family-mono;
  background-color: rgba($primary-color, 0.1);
  padding: 0.2em 0.4em;
  border-radius: $border-radius-sm;
  font-size: 0.9em;
  color: $primary-color;
}

.image-container {
  margin: $spacing-xl 0;

  .image-placeholder {
    border-radius: $border-radius-md;
    overflow: hidden;
    border: 1px solid $border-color;
  }

  .image-caption {
    text-align: center;
    font-size: $font-size-sm;
    color: $text-secondary;
    margin-top: $spacing-sm;
    font-style: italic;
  }
}

.note {
  background-color: rgba($primary-color, 0.05);
  border-left: 4px solid $primary-color;
  padding: $spacing-md $spacing-lg;
  margin: $spacing-lg 0;
  border-radius: $border-radius-sm;

  h4 {
    margin: 0 0 $spacing-sm 0;
    color: $primary-color;
    font-size: $font-size-base;
  }

  p {
    margin: 0;
  }

  &.warning {
    background-color: rgba(#f59e0b, 0.05);
    border-left-color: #f59e0b;

    h4 {
      color: #f59e0b;
    }
  }
}

.tip {
  background-color: rgba(#10b981, 0.05);
  border-left: 4px solid #10b981;
  padding: $spacing-md $spacing-lg;
  margin: $spacing-lg 0;
  border-radius: $border-radius-sm;

  h4 {
    margin: 0 0 $spacing-sm 0;
    color: #10b981;
    font-size: $font-size-base;
  }

  p {
    margin: 0;
  }
}

.learn-more {
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  margin-top: $spacing-md;
}

.page-navigation {
  display: flex;
  justify-content: space-between;
  gap: $spacing-lg;
  margin-top: $spacing-xxl * 2;
  padding-top: $spacing-xl;
  border-top: 1px solid $border-color;

  @media (max-width: $breakpoint-sm) {
    flex-direction: column;
  }
}

.nav-button {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: $spacing-lg;
  border: 1px solid $border-color;
  border-radius: $border-radius-md;
  transition: $transition-base;

  &:hover {
    border-color: $primary-color;
    background-color: rgba($primary-color, 0.02);
  }

  &.next {
    align-items: flex-end;
    text-align: right;
  }

  .nav-label {
    font-size: $font-size-sm;
    color: $text-secondary;
    margin-bottom: $spacing-xs;
  }

  .nav-title {
    font-weight: 600;
    color: $text-primary;
    font-size: $font-size-lg;
  }
}
</style>
