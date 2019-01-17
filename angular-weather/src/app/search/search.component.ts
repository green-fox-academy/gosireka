import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  searchedCityName: string ='Budapest';

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      city: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.searchForm.invalid) {
      return;
    }
    this.searchedCityName = this.searchForm.controls.city.value;
  }

  ngOnInit() {
  }

}
