<template>
  <div class="SliderNavbar">
    <div class="sidebar-navigation hidde-sm hidden-xs">
      <nav>
        <ul>
          <li>
            <a href="#top">
              <span class="rect"></span>
              <span class="circle"></span>
              Home
            </a>
          </li>
          <li>
            <a href="#projects">
              <span class="rect"></span>
              <span class="circle"></span>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact">
              <span class="rect"></span>
              <span class="circle"></span>
              About Me
            </a>
          </li>
        </ul>
      </nav>
      <ul class="social-icons">
        <li>
          <a href="#"><i class="fab fa-line"></i></a>
        </li>
        <li>
          <a href="#"><i class="fab fa-linkedin"></i></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideSliderNav"
};
</script>
