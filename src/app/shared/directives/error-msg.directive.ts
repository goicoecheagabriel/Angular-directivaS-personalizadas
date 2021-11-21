import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color:string = 'green';
  private _mensaje:string = 'Este campo es requerido!';

  htmlElement: ElementRef<HTMLElement>;

  @Input() set color( valor:string ){
    this._color = valor;
    this.setColor();
  }

  //@Input() mensaje:string = 'Este campo es requerido';
  @Input() set mensaje( valor:string ){
    this._mensaje = valor;
    this.setMensaje();
  }

  @Input() set valido( valor:boolean ){
    if (!valor){
      this.el.nativeElement.classList.add('hidden');
    } else {
      this.el.nativeElement.classList.remove('hidden');
    }
  }

  constructor( private el:ElementRef<HTMLElement> ) {
    this.htmlElement = el;
  }
  ngOnChanges(changes: SimpleChanges): void {

/*     if( changes?.['mensaje'] ) {
      const mensaje = changes?.['mensaje'].currentValue
      this.el.nativeElement.innerText = mensaje;

    }

    if( changes?.['color'] ){
      const color = changes?.['color'].currentValue;
      this.el.nativeElement.style.color = color;
    }
    console.log(changes) */
  }

  ngOnInit(): void {
    this.setMensaje();
    this.setColor();

    // console.log(this.color); // undefined
    // console.log(this.mensaje) // undefined

    // this.setColor();
    // this.setMensaje();
    this.setEstilo();
  }

  setColor(){
    this.el.nativeElement.style.color=this._color;
  }

  setMensaje(){
    this.el.nativeElement.innerText = this._mensaje;
  }

  setEstilo(){
    this.el.nativeElement.classList.add('form-text');
  }

}
