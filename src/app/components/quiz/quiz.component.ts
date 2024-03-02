import { Component } from '@angular/core';
import questions from '../../../assets/data/questions.json'

interface Alternativas {
  a: string,
  b: string,
  c: string,
  d: string,
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {

  public data = questions;
  public questao!: string;
  public alternativas!: Alternativas;
  public resposta!: string;
  public disabled = false;
  public select: string = '';
  public count: number = 0;
  public acertos: number = 0;
  public erros: number = 0;



  ngOnInit(): void { this.init()}

  init(): void {
    this.questao      = this.data[this.count]?.pergunta;
    this.alternativas = this.data[this.count].alternativas;
    this.resposta     = this.data[this.count].resposta;
  }

  onClick(opc:any) {
    this.select = opc;
  }

  next() {
    this.count += 1;
    if (this.count == this.data.length) {
      alert(`FIM`)
      confirm('OK')
    } else {

      if (this.resposta == this.select) this.acertos += 1;
      else                              this.erros   += 1;

      this.questao      = this.data[this.count]?.pergunta;
      this.alternativas = this.data[this.count].alternativas;
      this.resposta     = this.data[this.count].resposta;
      this.select = '';
    }
  }

}
