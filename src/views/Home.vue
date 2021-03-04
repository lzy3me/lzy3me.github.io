<template>
  <div class="home">
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

    <div class="header-hero content-section" id="top">
      <div class="text-des">Hi, my name is</div>
      <div class="text-hero">Fluke Jessada</div>
    </div>

    <div class="page-content">
      <section id="projects" class="content-section">
        <div class="section-heading">
          <h1>Recent<br /><em>Projects</em></h1>
          <p>All of my work on Github <br />Check it out.</p>
        </div>
        <div class="section-content">
          <div class="masonry">
            <div class="row">
              <div class="item">
                <div class="col-md-8">
                  <a
                    href="../assets/img/portfolio_big_1.jpg"
                    data-lightbox="image"
                    ><img src="../assets/img/portfolio_1.jpg" alt="image 1"
                  /></a>
                </div>
              </div>
              <div class="item second-item">
                <div class="col-md-4">
                  <a
                    href="../assets/img/portfolio_big_2.jpg"
                    data-lightbox="image"
                    ><img src="../assets/img/portfolio_2.jpg" alt="image 2"
                  /></a>
                </div>
              </div>
              <div class="item">
                <div class="col-md-4">
                  <a
                    href="../assets/img/portfolio_big_3.jpg"
                    data-lightbox="image"
                    ><img src="../assets/img/portfolio_3.jpg" alt="image 3"
                  /></a>
                </div>
              </div>
              <div class="item">
                <div class="col-md-4">
                  <a
                    href="../assets/img/portfolio_big_4.jpg"
                    data-lightbox="image"
                    ><img src="../assets/img/portfolio_4.jpg" alt="image 4"
                  /></a>
                </div>
              </div>
              <div class="item">
                <div class="col-md-8">
                  <a
                    href="../assets/img/portfolio_big_5.jpg"
                    data-lightbox="image"
                    ><img src="../assets/img/portfolio_5.jpg" alt="image 5"
                  /></a>
                </div>
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
export default {
  name: "Home",
  mounted: () => {
    window.addEventListener("scroll", () => {
      console.log("scrolled");
    });
  },
};
</script>

<style lang="scss">
img {
  width: 200px;
}
</style>
