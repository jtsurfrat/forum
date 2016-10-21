namespace forum.Controllers {

  export class ListToDoController {
    public items;
    public item;

    public save(){
      this.toDoListService.save(this.item).then(() => {
        this.items = this.toDoListService.list();
        this.item = null;
      }).catch((err) => {
        console.error(err);
      })
    }
    public remove(itemId){
      this.toDoListService.remove(itemId).then(() => {
        this.items = this.toDoListService.list();
      }).catch((err) => {
        console.error(err);
      })
    }

    constructor(private toDoListService: forum.Services.ToDoListService){
      this.items = this.toDoListService.list();
    }
  }

  export class EditToDoListController {
      //public list;
      public item;

      public save(){
        // console.log ('--------- here');
        // console.log ('--------- here: ', this.name);
        // console.log ('--------- here: ', this.item.name);

          // this.toDoListService.save({name: 'bob', description: 'test simple description'}).then(() => {
          this.toDoListService.save(this.item).then(() => {
          // this.toDoListService.save(this.list).then(() => {
              this.$state.go('todoList');
          })
          .catch((err) => {
              console.error(err)
          })
      }
      constructor(
          private toDoListService: forum.Services.ToDoListService,
          private $state: ng.ui.IStateService,
          private $stateParams: ng.ui.IStateParamsService
        ){
            let itemId = $stateParams['id'];
            this.item = this.toDoListService.get(itemId);
      }
  }

    export class ListForumController {
      public messages;
      public message = [];

      constructor(private messageService: forum.Services.MessageService){
        this.messages = this.messageService.list();

      }
    }


    export class HomeController {
        public message = 'Hello from the home page!';
        public movies;

        constructor() {
            //this.message;
        }
    }
    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
