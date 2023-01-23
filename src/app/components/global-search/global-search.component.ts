import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss']
})
export class GlobalSearchComponent implements OnInit {

  options = [
    {
      name: 'All'
    },
    {
      name: 'Junior'
    },
    {
      name: 'Mid'
    },
    {
      name: 'Senior'
    },
  ]

  selectedOption?: string

  salary = 2000;

  isOpenMenuLocalization = false

  @ViewChild('menu') menu?: ElementRef 


  constructor(){ 

  }

  ngOnInit(): void {
    this.selectedOption = this.options[0].name
  }

  onSelect(option:string){
    this.selectedOption = option
  }
  updateSalary(event:any) {
    this.salary = event.target.value;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event:any) {
    if (!this.menu!.nativeElement.contains(event.target)) {
      // zamknij menu
      this.isOpenMenuLocalization = false
      console.log(this.isOpenMenuLocalization)
    } 
  }

}
