import { Component } from '@angular/core';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {

  livro = {
    titulo: "as ondas",
    autoria: "vriginia Woolf",
    favorito: false,
    imagem: "https://amazon.com.br/verity-capitulo-extra/s?k=verity+capitulo+extra"
  }
  alternarFavorito(){
    this.livro.favorito = !this.livro.favorito;
  }

}
