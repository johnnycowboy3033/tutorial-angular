# PracticeJs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Developers Notes
### References
* [Angular Crash Course - Traversy Media](https://www.youtube.com/watch?v=3dHNOWTI7H8)
* [Angular 12 Crash Course - 2021 - Become Angular Developer in 3 Hours - Awais Mira](https://www.youtube.com/watch?v=LA_v8isNp5E)


### Branch

* Traversy Branch - Watch and coding the Angular Crash Course by Traversy Media  
> 1. Installing Angular (8:23)    
> 2. Creating new project (8:31)  ```ng new <PROJECT NAME> ```
> 3. Change the webpage page title (13:06) ```ng serve  ``` to start server and ```ng test``` to start Karma test runner
> 4. Create Hello World app (15:39)
> 5. Properties and Interpolation - Interpolation refers to embedding expressions into marked up text. By default, interpolation uses the double curly braces {{ and }} as delimiters. (18.22)
> 6. Global Styles (19:00)
> 7. Header Component (19:52) ```ng generate component component/header ```
> 8. Button Component (23:26) ```ng generate component component/button ```
> 9. Mock Tasks and Task Interface 
> 10. Tasks Component (34.24) - Figure 10.1 ```ng generate component component/tasks ```
> 11. Task Item Component (37:24) ```ng generate component component/task-item```
> 12. Angular Font Awesome (41:03) - Figure 12.1 [GitHub](https://github.com/FortAwesome/angular-fontawesome)
> 13. Task Service (44:40) Assignment Directly - ```ng generate service services/task ```
> 14. Task Service (44:40) Observable JavaScript - represents a progressive way of handling events, async the activity, and multiple values in JavaScript. These observables are just the functions that throw values and Objects known as observers subscribe to such values that define the callback functions such as error (), next () and complete ().
> 15. JSON Server Setup (52:27) - ```npm i json-server``` makes local server
### Screen Shots

#### Figure 10.1       
<img 
  src="https://github.com/johnnycowboy3033/github-resources/blob/main/practice-js/traversy/TaskTrackerScreenShot.png" 
  alt="Task Tracker Screen Shot" 
  style="width:425px;height:250px;">  

#### Figure 12.1
<img
src="https://github.com/johnnycowboy3033/github-resources/blob/main/practice-js/traversy/servableSubscribe.png"
alt="Observable Subscribe"
style="width:425px;height:250px;">

### Code Problems     

#### Problem 11.1     
Compiled with problems:

ERROR

src/app/components/task-item/task-item.component.ts:11:13 - error TS2564: Property 'task' has no initializer and is not definitely assigned in the constructor.

11   @Input()  task: Task  ;

SOLUTION:

11   @Input()  task!: Task  ;

The language feature is called Non-null assertion operator. when you add an exclamation mark after variable/property name, you’re telling to TypeScript that you’re certain that value is not null or undefined.

[Use of the Exclamation Mark in TypeScript](https://www.syncfusion.com/blogs/post/exclamation-mark-in-typescript.aspx)

