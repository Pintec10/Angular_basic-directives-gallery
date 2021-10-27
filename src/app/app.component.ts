import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;

  images = [
    {
      title: 'Seaside',
      url: 'https://images.unsplash.com/photo-1534166755186-fa2d8a5b2b03?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2Vhc2lkZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Mountains',
      url: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'City',
      url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2l0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Stonehenge',
      url: 'https://images.unsplash.com/photo-1599833975787-5c143f373c30?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1vbnVtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Seaside',
      url: 'https://images.unsplash.com/photo-1534166755186-fa2d8a5b2b03?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2Vhc2lkZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Mountains',
      url: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'City',
      url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2l0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Stonehenge',
      url: 'https://images.unsplash.com/photo-1599833975787-5c143f373c30?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1vbnVtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Seaside',
      url: 'https://images.unsplash.com/photo-1534166755186-fa2d8a5b2b03?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2Vhc2lkZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Mountains',
      url: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'City',
      url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2l0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Stonehenge',
      url: 'https://images.unsplash.com/photo-1599833975787-5c143f373c30?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1vbnVtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Seaside',
      url: 'https://images.unsplash.com/photo-1534166755186-fa2d8a5b2b03?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2Vhc2lkZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Mountains',
      url: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'City',
      url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2l0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Stonehenge',
      url: 'https://images.unsplash.com/photo-1599833975787-5c143f373c30?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1vbnVtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    }
  ];


  showPageLink(i: number) {
    if (i >= (this.currentPage - 2) && i <= (this.currentPage + 2)) {
      return true;
    }
    if (i < 5 && this.currentPage < 3) {
      return true;
    }
    if (i > (this.images.length - 6) && this.currentPage > (this.images.length - 3)) {
      return true;
    }

    return false;
  }
}
