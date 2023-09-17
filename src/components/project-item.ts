import { Component } from './base-component';
// import { Validatable,validate } from '../util/validation';
import { autobind } from '../decorator/autobind';
import { Project } from '../models/project-model';
import { Draggable } from '../models/drag-drop-interface';
// import { projectState  } from '../state/project-state';
    // project Item class

export class ProjectItem extends Component<HTMLUListElement,HTMLLIElement> implements Draggable{
    private project:Project;
    get persons(){
        if(this.project.people === 1 ){
            return '1 person is'
        }else{
            return  this.project.people.toString()+' persons are ';
        }
        
    }
    constructor(hostId:string,project:Project){
        super('single-project',hostId,false,project.id);
        this.project = project;
        this.configure();
        this.renderContent(); 
    }
    @autobind
    dragStartHandler(event: DragEvent){
        event.dataTransfer!.setData('text/plain',this.project.id);
        event.dataTransfer!.effectAllowed = 'move';
        
    }
    
    dragEndHandler(_: DragEvent) {
        console.log('DragEnd');
        
    }
    configure(): void {
        this.element.addEventListener('dragstart',this.dragStartHandler);
        this.element.addEventListener('dragend',this.dragEndHandler);
    }
    renderContent(): void {
        this.element.querySelector('h2')!.textContent=this.project.title.toUpperCase();
        this.element.querySelector('h3')!.textContent=this.persons + " in the Group";
        this.element.querySelector('p')!.textContent=this.project.description;
    }
}
