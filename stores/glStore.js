export const useGlStore = defineStore('glStore', {
    state: () => ({
        currentProject: '',
        projects:[
            {
                title:'Placeholder 1',
                id:"placeholder1"
            },
            {
                title:'Placeholder 2',
                id:"placeholder2"
            }
        ],
        filteredProjects:[]
    }),
    actions:{
        setCurrentProject(data){
            this.currentProject = data
        },
        setFilteredProjects(data){
            this.filteredProjects = data
        }
    }
})