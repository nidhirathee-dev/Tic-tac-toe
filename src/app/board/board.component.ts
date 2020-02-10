import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  cells: string[] = [];
  turn: string = 'x';
  gameover = false;
  winner = null;

  ngOnInit() {
    for (let i = 0; i < 9; i++) {
      // console.log('cells',this.cells);
      this.cells[i] = null;
    }
  }

  init() {
    for (let i = 0; i < 9; i++) {
      this.cells[i] = null;
    }
    this.turn = 'x';
    this.gameover = false;
    this.winner = null;
  }

  clickHandler(idx: number) {
    console.log(idx,this.cells);
    if (!this.gameover) {
      if (this.cells[idx] === null) {
        this.cells[idx] = this.turn;
        this.checkWinner();
        this.changeTurn();
      }
    }
  }

  changeTurn() {
    if (this.turn === 'x') {
      this.turn = 'o';
    } else {
      this.turn = 'x';
    }
  }

  startGame(){
    for (let i = 0; i < 9; i++) {
      this.cells[i] = null;
    }
    this.turn = 'x';
    this.gameover = false;
    this.winner = null;
  }

  checkWinner() {
    let lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let line of lines) {
      
      if (this.cells[line[0]] === this.cells[line[1]] && this.cells[line[1]] === this.cells[line[2]] && this.cells[line[0]] !== null) {
        this.gameover = true;
        this.winner = 'winner is : ' + this.cells[line[0]];
        return;
      }
    }
    let notEmpty= 0;
    this.cells.forEach((e) => { notEmpty += (e !== null ? 1 : 0) });
    if (notEmpty === 9) {
      console.log('tie');
      this.gameover = true;
      this.winner = "It's a tie!!";
    }
  }
} 
