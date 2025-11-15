<template>
  <aside class="sidebar">
    <nav class="sidebar-nav">
      <div class="nav-section">
        <h4 class="section-title">GET STARTED</h4>
        <ul class="nav-list">
          <li><a href="#" class="nav-item">Quick Start</a></li>
          <li><a href="#" class="nav-item">Tutorial</a></li>
          <li><a href="#" class="nav-item">Thinking in React</a></li>
        </ul>
      </div>

      <div class="nav-section">
        <h4 class="section-title">LEARN REACT</h4>
        <ul class="nav-list">
          <li><a href="#" class="nav-item">Installation</a></li>
          <li><a href="#" class="nav-item">Describing the UI</a></li>
          <li><a href="#" class="nav-item">Adding Interactivity</a></li>
          <li><a href="#" class="nav-item">Managing State</a></li>
          <li><a href="#" class="nav-item">Escape Hatches</a></li>
        </ul>
      </div>

      <div class="nav-section active">
        <h4 class="section-title">INSTALLATION</h4>
        <ul class="nav-list">
          <li><a href="#" class="nav-item">Start a New React Project</a></li>
          <li><a href="#" class="nav-item">Add React to an Existing Project</a></li>
          <li><a href="#" class="nav-item">Editor Setup</a></li>
          <li><a href="#" class="nav-item active">React Developer Tools</a></li>
        </ul>
      </div>

      <div class="nav-section">
        <h4 class="section-title">ON THIS PAGE</h4>
        <ul class="nav-list toc">
          <li><a href="#browser-extension" class="nav-item">Browser extension</a></li>
          <li><a href="#safari" class="nav-item">Safari and other browsers</a></li>
          <li><a href="#mobile" class="nav-item">Mobile (React Native)</a></li>
        </ul>
      </div>
    </nav>
  </aside>
</template>

<style lang="scss" scoped>
.sidebar {
  width: 280px;
  min-width: 280px;
  background-color: $bg-secondary;
  border-right: 1px solid $border-color;
  overflow-y: auto;
  position: sticky;
  top: 64px;
  height: calc(100vh - 64px);
  padding: $spacing-xl $spacing-md;

  @media (max-width: $breakpoint-lg) {
    width: 240px;
    min-width: 240px;
  }

  @media (max-width: $breakpoint-md) {
    position: fixed;
    left: -280px;
    z-index: $z-index-sidebar;
    transition: left 0.3s ease-in-out;

    &.open {
      left: 0;
    }
  }
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: $spacing-xl;
}

.nav-section {
  &.active {
    .section-title {
      color: $primary-color;
    }
  }
}

.section-title {
  font-size: $font-size-xs;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: $text-secondary;
  margin-bottom: $spacing-md;
}

.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: $spacing-xs;

  &.toc {
    border-left: 2px solid $border-color;
    padding-left: $spacing-md;

    .nav-item {
      font-size: $font-size-sm;
      padding: $spacing-xs 0;

      &.active {
        border-left: 2px solid $primary-color;
        margin-left: calc(-#{$spacing-md} - 2px);
        padding-left: $spacing-md;
      }
    }
  }
}

.nav-item {
  color: $text-secondary;
  padding: $spacing-sm $spacing-md;
  border-radius: $border-radius-sm;
  display: block;
  font-size: $font-size-sm;
  transition: $transition-base;

  &:hover {
    color: $text-primary;
    background-color: rgba($primary-color, 0.05);
  }

  &.active {
    color: $primary-color;
    background-color: rgba($primary-color, 0.1);
    font-weight: 600;
  }
}
</style>
