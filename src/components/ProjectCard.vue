<template>
    <div class="project-card">
        <h3 class="title">{{ name }} <small>{{ language }}</small></h3>
        <p class="description">{{ description }}</p>
        <a :href="html_url" target="_blank" rel="noopener noreferrer">more info</a> 
        <span v-if="homepage !== ''">
             | 
            <a :href="homepage" target="_blank" rel="noopener noreferrer">live demo</a>
        </span>
    </div>
</template>

<script>
export default {
    name: "project-card",
    props: {
        name: String,
        language: String,
        description: String,
        html_url: String,
        homepage: String,
    }
}
</script>

<style lang="scss">
.project-card {
    border: 1px solid #343434;
    border-radius: 10px;
    margin: 10px 0;
    padding: 10px;
}
.title {
    small {
        background-color: #343434;
        color: #ffffff;
        font-size: 10px;
        padding: 3px;
        border-radius: 5px;
    }
}
</style>