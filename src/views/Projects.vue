<template>
  <div class="projects">
    <ul>
      <li v-for="data in projects" :key="data">
        <project-card v-bind="data"/>
      </li>
    </ul>
  </div>
</template>

<script>
import ProjectsService from "@/services/ProjectsService.js";
import ProjectCard from '@/components/ProjectCard.vue';

export default {
  name: "projects",
  components: {
    ProjectCard
  },
  data () {
    return {
      githubRepos: [],
    }
  },
  mounted: function () {
    let self = this
    async function getRepolist() {
      try {
        const res = await ProjectsService.gettingReposList('lzy3me')
        self.githubRepos = res.data
      } catch (err) {
        console.error(err)
      }
    }
    getRepolist()
  },
  computed: {
    projects() {
      let self = this
      let tempProjects = []

      self.githubRepos.forEach((item, index, arr) => {
        if (!arr[index].fork) {
          tempProjects.push(item)
        }
      })

      return tempProjects
    }
  }
}
</script>