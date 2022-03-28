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

      this.books = [
        {
          "book_author" : "Eric Matthes",
          "book_id" : "python001",
          "created_date" : "2022-03-13",
          "title" : "Python",
          "rating" : "5",
          "created_by" : "Ajay",
          "course_id" : "Python_language",
          "image":"assets/python.jpg"
        },
        {
          
          "book_author" : "Paul Barry",
          "book_id" : "python002",
          "created_date" : "2022-03-13",
          "image":"assets/python1.jpg",
          
          "title" : "Head First Python: A Brain-Friendly Guide",
          "rating" : "5",
          "created_by" : "Ajay",
          "course_id" : "Python_language"
        },
        {
          
          "book_author" : "Zed A. Shaw",
          "book_id" : "python003",
          "created_date" : "2022-03-13",
          "image":"assets/python2.jpg",
          "title" : "Learn Python 3 the Hard Way",
          "rating" : "5",
          "created_by" : "Ajay",
          "course_id" : "Python_language"
        },
        {
          
          "book_author" : "Joshua Bloch",
          "book_id" : "java001",
          "created_date" : "2022-03-13",
          "image":"assets/java1.jpeg",
          "title" : "Effective Java",
          "rating" : "5",
          "created_by" : "Ajay",
          "course_id" : "java_language"
        },
        {
        
          "book_author" : "Kathy Sierra and Bert Bates",
          "book_id" : "java002",
          "created_date" : "2022-03-13",
          "image":"assets/java2.jpg",
          "title" : "Head First Java",
          "rating" : "5",
          "created_by" : "Ajay",
          "course_id" : "java_language"
        },
        {
          
          "book_author" : "Brian Goetz",
          "book_id" : "java003",
          "created_date" : "2022-03-13",
          "image":"assets/python.jpg",
          "title" : "Java Concurrency in Practice",
          "rating" : "5",
          "created_by" : "Ajay",
          "course_id" : "java_language"
        },
        {
          
          "book_author" : "John Hoffman",
          "book_id" : "ios001",
          "created_date" : "2022-03-13",
          "image":"assets/python.jpg",
          "title" : "Mastering Swift",
          "rating" : "5",
          "created_by" : "Ajay",
          "course_id" : "ios"
        },
        {
          
          "book_author" : "Matt Neuburg",
          "book_id" : "ios002",
          "created_date" : "2022-03-13",
          "image":"assets/python.jpg",
          "title" : "iOS Programming Fundamentals with Swift",
          "rating" : "5",
          "created_by" : "Ajay",
          "course_id" : "ios"
        },
        {
          
          "book_author" : "Big Nerd Ranch",
          "book_id" : "ios003",
          "created_date" : "2022-03-13",
          "image":"assets/python.jpg",
          "title" : "iOS Programming: The Big Nerd Ranch Guide",
          "rating" : "5",
          "created_by" : "Ajay",
          "course_id" : "ios"
        },
        {
          
          "book_author" : "Raywenderlich",
          "book_id" : "ios004",
          "created_date" : "2022-03-13",
          "image":"assets/python.jpg",
          "title" : "Data Structures & Algorithms in Swift",
          "rating" : "5",
          "created_by" : "Ajay",
          "course_id" : "ios"
        },
        {
          
          "book_author" : "John Horton",
          "book_id" : "android_development001",
          "created_date" : "2022-03-13",
          "image":"assets/python.jpg",
          "title" : "Android Programming with Kotlin for Beginners",
          "rating" : "5",
          "created_by" : "Ajay",
          "course_id" : "android_development"
        },
        {
          
          "book_author" : "Big Nerd Ranch",
          "book_id" : "android_development002",
          "created_date" : "2022-03-13",
          "image":"assets/python.jpg",
          "title" : "Android Programming",
          "rating" : "5",
          "created_by" : "Ajay",
          "course_id" : "android_development"
        },
        {
          
          "book_author" : "Gerardus Blokdyk",
          "book_id" : "web_apps001",
          "created_date" : "2022-03-13",
          "image":"assets/python.jpg",
          "title" : "Progressive web app",
          "rating" : "5",
          "created_by" : "Ajay",
          "course_id" : "web_apps"
        },
        {
          
          "book_author" : "Tal Ater",
          "book_id" : "web_apps002",
          "created_date" : "2022-03-13",
          "image":"assets/python.jpg",
          "title" : "Building Progressive Web Apps",
          "rating" : "5",
          "created_by" : "Ajay",
          "course_id" : "web_apps"
        },
        {
          
          "book_author" : "Dennis Sheppard ",
          "book_id" : "web_apps003",
          "created_date" : "2022-03-13",
          "image":"assets/python.jpg",
          "title" : "Beginning Progressive Web App Development",
          "rating" : "5",
          "created_by" : "Ajay",
          "course_id" : "web_apps"
        },
        {
          
          "book_author" : "Scott Domes",
          "book_id" : "web_apps004",
          "created_date" : "2022-03-13",
          "image":"assets/python.jpg",
          "title" : "Progressive Web Apps with React",
          "rating" : "5",
          "created_by" : "Ajay",
          "course_id" : "web_apps"
        },
        {
          
          "book_author" : "Majid Hajian",
          "book_id" : "web_apps005",
          "created_date" : "2022-03-13",
          "image":"assets/python.jpg",
          "title" : "Progressive Web Apps with Angular",
          "rating" : "5",
          "created_by" : "Ajay",
          "course_id" : "web_apps"
        },
        {
          
          "book_author" : "Carlo Zaniolo ",
          "book_id" : "advance_data_base001",
          "created_date" : "2022-03-13",
          "image":"assets/python.jpg",
          "title" : "Advanced Database Systems",
          "rating" : "5",
          "created_by" : "Ajay",
          "course_id" : "advance_data_base"
        },
        {
          
          "book_author" : "Karwin",
          "book_id" : "advance_data_base002",
          "created_date" : "2022-03-13",
          "image":"assets/python.jpg",
          "title" : "SQL Antipatterns",
          "rating" : "5",
          "created_by" : "Ajay",
          "course_id" : "advance_data_base"
        },
        {
          
          "book_author" : "Faroult",
          "book_id" : "advance_data_base003",
          "created_date" : "2022-03-13",
          "image":"assets/python.jpg",
          "title" : "The Art of SQL",
          "rating" : "5",
          "created_by" : "Ajay",
          "course_id" : "advance_data_base"
        },
        {
          
          "book_author" : "Peter Taylor",
          "book_id" : "project_management001",
          "created_date" : "2022-03-13",
          "image":"assets/python.jpg",
          "title" : "The Lazy Project Manager",
          "rating" : "5",
          "created_by" : "Ajay",
          "course_id" : "project_management"
        },
        {
          
          "book_author" : "James Wood",
          "book_id" : "project_management002",
          "created_date" : "2022-03-13",
          "image":"assets/python.jpg",
          "title" : "Project Management for the Unofficial Project Manager",
          "rating" : "5",
          "created_by" : "Ajay",
          "course_id" : "project_management"
        },
        {
          "book_author" : "Terry Schmidt",
          "book_id" : "project_management003",
          "created_date" : "2022-03-13",
          "image":"assets/python.jpg",
          "title" : "Strategic Project Management Made Simple",
          "rating" : "5",
          "created_by" : "Ajay",
          "course_id" : "project_management"
        },
        {
        
          "book_author" : "Stephen Few",
          "book_id" : "data_visualization001",
          "created_date" : "2022-03-13",
          "title" : "Information Dashboard Design",
          "rating" : "5",
          "created_by" : "Ajay",
          "course_id" : "data_visualization",
          "image":"assets/python.jpg",
        },
        {
          "book_author" : "Stephen McDaniel",
          "book_id" : "data_visualization002",
          "created_date" : "2022-03-13",
          "image":"assets/python.jpg",
          "title" : "The Accidental Analyst",
          "rating" : "5",
          "created_by" : "Ajay",
          "course_id" : "data_visualization"
        },
        {
        
          "book_author" : "Edward R.Tufte",
          "book_id" : "data_visualization003",
          "created_date" : "2022-03-13",
          "title" : "The Visual Display of Quantitative Information",
          "rating" : "5",
          "created_by" : "Ajay",
          "course_id" : "data_visualization",
          "image":"assets/python.jpg",
        },
        {
        
          "book_author" : "Kenneth Cukier ",
          "book_id" : "big_data001",
          "created_date" : "2022-03-13",
          "image":"assets/python.jpg",
          "title" : "Big Data: A Revolution That Will Transform How We Live, Work, and Think",
          "rating" : "5",
          "created_by" : "Ajay",
          "course_id" : "big_data"
        },
        {
        
          "book_author" : "Thomas H. Davenport",
          "book_id" : "big_data002",
          "created_date" : "2022-03-13",
          "image":"assets/python.jpg",
          "title" : "Big Data at Work: Dispelling the Myths, Uncovering the Opportunities",
          "rating" : "5",
          "created_by" : "Ajay",
          "course_id" : "big_data"
        },
        {
          
          "book_author" : "Nathan Marz",
          "book_id" : "big_data003",
          "created_date" : "2022-03-13",
          "image":"assets/python.jpg",
          "title" : "Big Data: Principles and Best Practices of Scalable Realtime Data Systems",
          "rating" : "5",
          "created_by" : "Ajay",
          "course_id" : "big_data"
        },
        {
        
          "book_author" : "Geron Aurelien",
          "book_id" : "machine_learning001",
          "created_date" : "2022-03-13",
          "image":"assets/python.jpg",
          "title" : "Hands-On Machine Learning with Scikit-Learn and TensorFlow: Concepts, Tools, and Techniques to Build Intelligent Systems",
          "rating" : "5",
          "created_by" : "Ajay",
          "course_id" : "machine_learning"
        },
        {
          
          "book_author" : "Oliver Theobald",
          "book_id" : "machine_learning002",
          "created_date" : "2022-03-13",
          "image":"assets/python.jpg",
          "title" : "Machine Learning for Absolute Beginners",
          "rating" : "5",
          "created_by" : "Ajay",
          "course_id" : "machine_learning"
        },
        {
          
          "book_author" : "Sarah Guido",
          "book_id" : "machine_learning003",
          "created_date" : "2022-03-13",
          "image":"assets/python.jpg",
          "title" : "Introduction to Machine Learning with Python",
          "rating" : "5",
          "created_by" : "Ajay",
          "course_id" : "machine_learning"
        },
        {
          
          "book_author" : "Shai Shalev-Shwartz",
          "book_id" : "machine_learning004",
          "created_date" : "2022-03-13",
          "image":"assets/python.jpg",
          "title" : "Understanding Machine Learning",
          "rating" : "5",
          "created_by" : "Ajay",
          "course_id" : "machine_learning"
        }
      ]
      ;
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
