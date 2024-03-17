import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-list',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css'],
})
export class ListViewComponent implements OnInit {
  @Input() list;
  searchTerm: any = '';
  listCopy: any;

  constructor() {}

  ngOnInit() {
    this.listCopy = this.list;
  }

  onSearch(event: any) {
    const searchTerm = event.detail.value.toLowerCase();
    console.log('Search term:', searchTerm);
    this.list = this.listCopy.filter((item) => item.name.toLowerCase().includes(searchTerm));
  }
}
