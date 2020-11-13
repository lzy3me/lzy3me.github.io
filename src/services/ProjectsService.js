import { Octokit } from "@octokit/rest"

const octokit = new Octokit()



export default {
    gettingReposList() {
        return octokit.request('GET /users/:username/repos', {username: 'lzy3me'})
    }
}