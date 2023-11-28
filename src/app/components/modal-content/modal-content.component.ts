import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'modal-content',
  template: `
    <div class="custom-modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Horários Disponíveis</h4>
            <button type="button" class="close" aria-label="Close" (click)="closeModal()">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p class="center-content" [innerHTML]="content"></p>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" (click)="agendar()">Agendar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .custom-modal {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.5); /* Fundo escuro por trás do modal */
      z-index: 9999; /* Garante que o modal apareça sobre outros elementos */
    }

    .modal-dialog {
      max-width: 500px;
      width: 100%;
      margin: auto;
    }

    .modal-content {
      background-color: rgba(21, 21, 21, 1); /* Cor de fundo mais escura */
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      color: white;
    }

    .modal-header {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      border-bottom: none; 
    }

    .close {
      cursor: pointer;
      color: white; /* Cor do ícone "X" branca */
      position: absolute;
      top: 5px;
      right: 5px;
      font-size: 1.5rem;
      border: none;
      background: transparent;
      padding: 0.5rem;
      border-radius: 50%;
      outline: none;
    }

    .close:hover {
      background-color: rgba(255, 255, 255, 0.2); /* Cor de fundo ao passar o mouse */
    }

    .center-content {
      text-align: center;
    }

    .modal-footer {
      margin-top: 20px;
      text-align: center;
    }
  `]
})
export class ModalContentComponent {
  @Input() content: string = '';

  constructor(public modalRef: BsModalRef) {}

  closeModal() {
    this.modalRef.hide();
  }

  agendar() {
    //lógica para agendar aqui
  }
}
