import { Component, OnInit, Input, Output, EventEmitter, HostListener} from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() value: string;//parent to child
  @Output('onClick') click = new EventEmitter<string>();//child to parent

  @HostListener('click')
  clickHandler() {
    this.click.emit('');
  }
}
