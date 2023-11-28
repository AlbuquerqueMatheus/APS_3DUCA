import { Component } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent {
  constructor(){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  imgCollection: Array<object> = [
    {
      image: 'assets/img/video1.png',
      thumbImage: 'assets/img/video1.png',
      alt: 'Tutorial Blender 2.9 em Português | Aula 1 - Modelagem 3D',
      title: 'Tutorial Blender 2.9 em Português | Aula 1 - Modelagem 3D',
      videoLink:'https://www.youtube.com/watch?v=aL4wDNnei2k&t=112s'
    },
    {
      image: 'assets/img/video2.png',
      thumbImage: 'assets/img/video2.png',
      alt: 'Tutorial Blender 2.8 em Português | Aula 1 - Modelagem 3D',
      title: 'Tutorial Blender 2.8 em Português | Aula 1 - Modelagem 3D',
      videoLink:'https://www.youtube.com/watch?v=u12cJ0fnleY'
    },
    {
      image: 'assets/img/video3.png',
      thumbImage: 'assets/img/video3.png',
      alt: 'Aprenda BLENDER 3D em UM VÍDEO! | Tutorial de Blender (Completo)',
      title: 'Aprenda BLENDER 3D em UM VÍDEO! | Tutorial de Blender (Completo)',
      videoLink:'https://www.youtube.com/watch?v=8aWhREXpLjA'
    },
    {
      image: 'assets/img/video4.png',
      thumbImage: 'assets/img/video4.png',
      alt: '3D Fox Character Modeling | Blender Tutorial for Beginners [RealTime]',
      title: '3D Fox Character Modeling | Blender Tutorial for Beginners [RealTime]'
    },
    {
      image: 'assets/img/video5.png',
      thumbImage: 'assets/img/video5.png',
      alt: 'BLENDER 1 DAY SCULPT TIMELAPSE',
      title: 'BLENDER 1 DAY SCULPT TIMELAPSE'
    },
    {
      image: 'assets/img/video6.png',
      thumbImage: 'assets/img/video6.png',
      alt: 'Como fazer FOGO no Blender (RÁPIDO E LEVE!)',
      title: 'Como fazer FOGO no Blender (RÁPIDO E LEVE!)'
    },
    {
      image: 'assets/img/video7.png',
      thumbImage: 'assets/img/video7.png',
      alt: 'How to make a Character in Blender - My Full Process in 10 Minutes',
      title: 'How to make a Character in Blender - My Full Process in 10 Minutes'
    },
    {
      image: 'assets/img/video8.png',
      thumbImage: 'assets/img/video8.png',
      alt: 'Como modelar personagem no Blender | AULA 01 - Model Sheet',
      title: 'Como modelar personagem no Blender | AULA 01 - Model Sheet'
    },
    {
      image: 'assets/img/video9.png',
      thumbImage: 'assets/img/video9.png',
      alt: 'Como Aprender Blender em 2023',
      title: 'Como Aprender Blender em 2023'
    },
    {
      image: 'assets/img/video10.png',
      thumbImage: 'assets/img/video10.png',
      alt: 'Como criar rostos realistas em 3D a partir de fotos: Tutorial completo',
      title: 'Como criar rostos realistas em 3D a partir de fotos: Tutorial completo'
    },
    {
      image: 'assets/img/video11.png',
      thumbImage: 'assets/img/video11.png',
      alt: 'Como Fazer Animação (Rigging) - Tutorial Blender 2.8 - Animal Rigging',
      title: 'Como Fazer Animação (Rigging) - Tutorial Blender 2.8 - Animal Rigging'
    },
  ];
  imgArtigos: Array<object> = [
    {
      image: 'assets/img/artigos.png',
      thumbImage: 'assets/img/artigos.png',
      // alt: 'Image 1',
      // title: 'image 1',
    },
    {
      image: 'assets/img/artigos.png',
      thumbImage: 'assets/img/artigos.png',
      // alt: 'Image 2',
      // title: 'image 2',
    },
    {
      image: 'assets/img/artigos.png',
      thumbImage: 'assets/img/artigos.png',
      // alt: 'Image 3',
      // title: 'image 3',
    },
    {
      image: 'assets/img/artigos.png',
      thumbImage: 'assets/img/artigos.png',
      // alt: 'Image 4',
      // title: 'image 4'
    },
    {
      image: 'assets/img/artigos.png',
      thumbImage: 'assets/img/artigos.png',
      // alt: 'Image 5',
      // title: 'image 5'
    },
    {
      image: 'assets/img/artigos.png',
      thumbImage: 'assets/img/artigos.png',
      // alt: 'Image 5',
      // title: 'image 5'
    },
    {
      image: 'assets/img/artigos.png',
      thumbImage: 'assets/img/artigos.png',
      // alt: 'Image 5',
      // title: 'image 5'
    },
    {
      image: 'assets/img/artigos.png',
      thumbImage: 'assets/img/artigos.png',
      // alt: 'Image 5',
      // title: 'image 5'
    },
    {
      image: 'assets/img/artigos.png',
      thumbImage: 'assets/img/artigos.png',
      // alt: 'Image 5',
      // title: 'image 5'
    },
    {
      image: 'assets/img/artigos.png',
      thumbImage: 'assets/img/artigos.png',
      // alt: 'Image 5',
      // title: 'image 5'
    },
    {
      image: 'assets/img/artigos.png',
      thumbImage: 'assets/img/artigos.png',
      // alt: 'Image 5',
      // title: 'image 5'
    },
  ];
  imgCursos: Array<object> = [
    {
      image: 'assets/img/curso0.png',
      thumbImage: 'assets/img/curso0.png',
      // alt: 'Image 1',
      // title: 'image 1',
    },
    {
      image: 'assets/img/curso2.png',
      thumbImage: 'assets/img/curso2.png',
      // alt: 'Image 2',
      // title: 'image 2',
    },
    {
      image: 'assets/img/curso1.png',
      thumbImage: 'assets/img/curso1.png',
      // alt: 'Image 3',
      // title: 'image 3',
    },
    {
      image: 'assets/img/2.1.png',
      thumbImage: 'assets/img/2.1.png',
      // alt: 'Image 4',
      // title: 'image 4'
    },
    {
      image: 'assets/img/2.2.png',
      thumbImage: 'assets/img/2.2.png',
      // alt: 'Image 5',
      // title: 'image 5'
    },
    {
      image: 'assets/img/2.3.png',
      thumbImage: 'assets/img/2.3.png',
      // alt: 'Image 5',
      // title: 'image 5'
    },
    {
      image: 'assets/img/2.4.png',
      thumbImage: 'assets/img/2.4.png',
      // alt: 'Image 5',
      // title: 'image 5'
    },
    {
      image: 'assets/img/2.5.png',
      thumbImage: 'assets/img/2.5.png',
      // alt: 'Image 5',
      // title: 'image 5'
    },
    {
      image: 'assets/img/2.6.png',
      thumbImage: 'assets/img/2.6.png',
      // alt: 'Image 5',
      // title: 'image 5'
    },
    {
      image: 'assets/img/2.7.png',
      thumbImage: 'assets/img/2.7.png',
      // alt: 'Image 5',
      // title: 'image 5'
    },
    {
      image: 'assets/img/curso3.png',
      thumbImage: 'assets/img/curso3.png',
      // alt: 'Image 5',
      // title: 'image 5'
    },
  ];

  openYouTubeVideo() {
    const youtubeVideoURL = 'https://www.youtube.com/watch?v=aL4wDNnei2k&t=338s';
    'https://youtu.be/XZlW5zqYQw0'
    window.open(youtubeVideoURL, '_blank');
  }
  
  
}
