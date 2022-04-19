import { Component, OnInit } from '@angular/core';
//import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { Book } from 'src/app/models/books';
import { GeneralserviceService } from 'src/app/services/generalservice.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: Book[]=[];
  book:Book;
  //sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;sortKey:any;

  constructor(private generalService:GeneralserviceService) { }

  ngOnInit() {
    this.getBooks();
    //this.primengConfig.ripple = true;
  }
   
  getBooks(){
    this.generalService.getBooks().subscribe(data => {

      this.books = data
      ;
      console.log(this.books);
    })
  }

  delBooks(data:any, i:number){
    this.generalService.delBooks(data.id).subscribe(data => {
      this.books = this.books.slice(i , 1);
      console.log(this.books);
    })
  }

  onSortChange(event:any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}
sort() {
  // var books:Book[]=[]
  // books.sort((a,b) => a.title.localeCompare(b.title));
  // console.log(books);
  
}

 
 
}
