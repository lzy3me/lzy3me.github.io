<template>
  <div class="about">
    <h1>About Me</h1>
    <ul>
      <li>Name: Jessada Supapsuntorn</li>
      <li>Nickname: Fluke</li>
      <li>Alias: lzy3me</li>
      <li>Email: fluke.jessada.s@gmail.com</li>
      <li class="skill-icon">
        Skill Set:
        <img
          src="@/assets/svg/skill/javascript-original.svg"
          alt="JavaScript"
        />
        <img src="@/assets/svg/skill/java-original.svg" alt="Java" />
        <img src="@/assets/svg/skill/mysql-original.svg" alt="MySQL" />
        <img src="@/assets/svg/skill/html5-original.svg" alt="HTML5" />
        <img src="@/assets/svg/skill/css3-original.svg" alt="CSS3" />
        <img src="@/assets/svg/skill/sass-original.svg" alt="SASS" />
        <img src="@/assets/svg/skill/vuejs-original.svg" alt="VueJS" />
        <img
          src="@/assets/svg/skill/jquery-original-wordmark.svg"
          alt="JQuery"
        />
        <img src="@/assets/svg/skill/nodejs-original.svg" alt="NodeJS" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.skill-icon {
  img,
  svg {
    width: 25px;
    transition-duration: 200ms;

    &:hover {
      transform: scale(2);
    }
  }
}
</style>
