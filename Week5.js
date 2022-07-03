class Rep { 
    constructor(name, title) {
        this.name = name;
        this.title = title;
    }

    describe() {
        return `${this.name} title ${this.title}.`;
    }
} 

class team {
    constructor(name) {
        this.name = name;
        this.reps = [];
    }

    addRep(rep) {
        if (rep instanceof Rep) {
            this.reps.push(rep);
        } else {
            throw new Error(`You can only add an instance of Rep. Argument is not a rep: ${Rep}`);
        }
    }

    describe() { 
        return `${this.name} has ${this.reps.length} reps.`;
    }
}

class Menu {
    constructor() {
        this.teams = [];
        this.selectedTeam = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createTeam();
                    break;
                case '2':
                    this.viewTeam();
                    break;
                case '3':
                    this.deleteTeam();
                    break;
                case '4':
                    this.displayTeams();
                    break;
                default:
                    selection = 0; 
        }
        selection = this.showMainMenuOptions();
    }

    alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new team
        2) view team
        3) delete team
        4) display all teams
        `);
      }

      showTeamMenuOptions(teamInfo) {
        return prompt(`
        0) back
        1) create rep
        2) delete rep
        ------------------------
        ${teamInfo}
        `)
      }



      displayTeams() {
        let teamString = '';
        for (let i = 0; i < this.teams.length; i++) {
            teamString += i + ') ' + this.teams[i].name + '\n';

        }
        alert(teamString);
      }
        
      createTeam() {
        let name = prompt('Enter Name for new team');
        this.teams.push(new team(name));
      }

      viewTeam() {
        let index = prompt('Enter the index of the team you wish to view:');
        if (index > -1 && index < this.teams.length) {
            this.selectedTeam = this.teams[index];
            let description = 'Team Name: ' + this.selectedTeam.name + '\n';

            for (let i = 0; i < this.selectedTeam.reps.length; i++) {
                description += i + ') ' + this.selectedTeam.reps[i].name + ' - ' + this.selectedTeam.reps[i].title + '\n';
            }

            let selection = this.showTeamMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createRep();
                    break;
                case '2':
                    this.deleteRep();
            }
        }
      }

      deleteTeam(){
        let index = prompt('Enter the index of the team you wish to delete:');
        if (index > -1 && index < this.teams.length) {
            this.teams.splice(index, 1);  
      }
    }
    
      createRep() {
      let name = prompt('Enter name for new rep:');
      let title = prompt('Enter title for new rep:');
      this.selectedTeam.reps.push(new Rep(name, title));
    }

    deleterRep() {
        let index = prompt('Enter the index of the rep you wish to delete:');
        if (index > -1 && index < this.selectedTeam.players.length) {
            this.selectedTeam.reps.splice(index, 1);
        }
    }
    }
    let menu = new Menu ();
    menu.start();