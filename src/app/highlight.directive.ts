import { Directive,ElementRef,Host,HostBinding,HostListener,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef,private renderer:Renderer2){
  el.nativeElement.style.color="red";
  el.nativeElement.style.backgroundColor="pink";
  }
  ngOnInit(){
    this.renderer.setStyle(this.el.nativeElement,'font-size','30px');
    this.renderer.setStyle(this.el.nativeElement,'text-align','center');
  }
  @HostBinding("style.backgroundColor") bgColor;
  @HostListener('mouseenter') mouseEnter(){
    this.changeColor("blue");
    this,this.bgColor="yellow";
  }
  changeColor(color){
    this.el.nativeElement.style.color=color;
  }
  @HostListener('mouseleave') mouseLeave(){
    this.changeLeaveColor("green");
  }
  changeLeaveColor(color){
    this.el.nativeElement.style.color=color;
  }
}
