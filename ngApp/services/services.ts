namespace forum.Services {

  export class ToDoListService {
    private ToDoResource;

    public list(){
      return this.ToDoResource.query();
    }

    public get(itemId){
      return this.ToDoResource.get({id:itemId});
    }

    public save(item){
      return this.ToDoResource.save({id:item._id}, item).$promise;
    }

    // public remove(itemId){
    //   return this.ToDoResource.remove({id:itemId}).$promise
    // }

    constructor($resource:ng.resource.IResourceService){
      this.ToDoResource = $resource('todo2/:id');
    }
  }

  angular.module('forum').service('toDoListService', ToDoListService);

  export class MessageService {
    private MessageResource;

    public list(){
      let message1 = this.MessageResource.query();
      console.debug(message1);
      return message1;
    }
    constructor($resource:ng.resource.IResourceService){
      this.MessageResource = $resource('forumt/:id');
    }
  }
  angular.module('forum').service('messageService', MessageService)



    // export class MovieService {
    //     private MovieResource;
    //
    //     public listMovies() {
    //         return this.MovieResource.query();
    //     }
    //
    //     constructor($resource: ng.resource.IResourceService) {
    //         this.MovieResource = $resource('/api/movies');
    //     }
    // }
    // angular.module('forum').service('movieService', MovieService);
    // export class MyService {
    //
    // }
    // angular.module('forum').service('myService', MyService);

    }
