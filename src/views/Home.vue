<template>
  <div class="home">
    <!-- This is a Navbar for mobile device. Need to hide it for now until JS file completed. -->
    <!-- <nav-component /> -->
    <side-slider-nav />

    <div class="header-hero content-section" id="top">
      <div class="text-des">Hi, my name is</div>
      <div class="text-hero">Fluke Jessada</div>
    </div>

    <div class="page-content">
      <section id="projects" class="content-section">
        <div class="section-heading">
          <h1>Recent<br /><em>Projects</em></h1>
          <p>All of my work on Github <br />Check it out.</p>
          <h3>{{ data }}</h3>
        </div>
        <div class="section-content">
          <div class="masonry">
            <div class="row">
              <div class="col-md-6" v-for="data in githubRepos" :key="data">
                <project-card v-bind="data" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" class="content-section">
        <div id="contact-content">
          <div class="section-heading">
            <h1>About<br /><em>Me</em></h1>
            <p>
              My name is Jessada Supapsuntorn. Front-End Developer
              <br /><em>Email</em> fluke.jessada.s@gmail.com
            </p>
          </div>
        </div>
      </section>
      <section class="footer">
        <p>Copyright &copy; 2021 LzyDev . Design: TemplateMo</p>
      </section>
    </div>
  </div>
</template>

<script>
import ProjectCard from "../components/ProjectCard.vue";
import SideSliderNav from "../components/SideSliderNav.vue";
// import NavComponent from '../components/NavComponent.vue';
import { PullPinned } from "../services/PinnedRepos";

export default {
  components: { SideSliderNav, ProjectCard },
  name: "Home",
  mounted: () => {},
  data() {
    return {
      githubRepos: [
        {
          name: "Testing 01",
          language: "JavaScript",
          description: "Bra Bra Bra",
          html_url: "https://lzy3me.github.io/",
          homepage: "",
        },
        {
          name: "Testing 02",
          language: "Java",
          description: "Bra Bra Bra",
          html_url: "https://lzy3me.github.io/",
          homepage: "",
        },
      ],
      data: []
    };
  },
  apollo: {
    data: PullPinned
  },
};
</script>
