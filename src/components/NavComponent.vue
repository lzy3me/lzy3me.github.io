<template>
  <div class="Navbar-Mobile">
    <header class="nav-down responsive-nav hidden-lg hidden-md">
      <button
        type="button"
        id="nav-toggle"
        class="navbar-toggle"
        data-toggle="collapse"
        data-target="#main-nav"
      >
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <!--/.navbar-header-->
      <div id="main-nav" class="collapse navbar-collapse">
        <nav>
          <ul class="nav navbar-nav">
            <li><a href="#top">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">About Me</a></li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "NavComponent"
};
</script>
