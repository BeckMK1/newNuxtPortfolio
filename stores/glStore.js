export const useGlStore = defineStore('glStore', {
    state: () => ({
        currentProject: ''
    }),
    actions:{
        setCurrentProject(data){
            this.currentProject = data
        }
    }
})