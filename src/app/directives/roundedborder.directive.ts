// import { Directive, ElementRef, HostListener, Input } from '@angular/core';

// @Directive({
//   selector: '[appRoundedborder]',
//   standalone: true
// })

// export class RoundedborderDirective {
//   @Input() 
//   appshadow=''
//   @Input() 
//   defaultShadow=''
//   private staticShadow = '2px 2px 3px yellow'; 

//   constructor(private domEle: ElementRef) {
//     this.setDefaultStyles();
//   }

//   private setDefaultStyles() {
//     this.domEle.nativeElement.style.borderRadius = '10px'; 
//     this.domEle.nativeElement.style.boxShadow = this.staticShadow;
//   }

//   @HostListener('mouseenter') onMouseEnter() {
//     this.changeShadow(this.appshadow || this.defaultShadow || '5px 5px 10px yellow'); 
//   }

//   @HostListener('mouseleave') onMouseLeave() {
//     this.setDefaultStyles();
//   }

//   private changeShadow(shadow: string) {
//     this.domEle.nativeElement.style.boxShadow = shadow;
//   }
// }



import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRoundedborder]',
  standalone: true
})

export class RoundedborderDirective {
  @Input() 
  appRoundedborder=''
  @Input() 
  defaultShadow=''
  private staticShadow = '2px 2px 3px yellow'; 

  constructor(private domEle: ElementRef) {
    this.setDefaultStyles();
  }

  private setDefaultStyles() {
    this.domEle.nativeElement.style.borderRadius = '10px'; 
    this.domEle.nativeElement.style.boxShadow = this.staticShadow;
  }

  @HostListener('mouseenter') onMouseEnter() {
    
    this.changeShadow(this.appRoundedborder || this.defaultShadow || '5px 5px 10px green'); 
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setDefaultStyles();
  }

  private changeShadow(shadow: string) {
    this.domEle.nativeElement.style.boxShadow = shadow;
  }
}
  

