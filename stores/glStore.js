export const useGlStore = defineStore('glStore', {
    state: () => ({
        currentProject: '',
        projects:[
            {
                title:'Pre Lobby',
                id:"PreLobby"
            },
            {
                title:'Design Architects',
                id:"DesignArchitects"
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