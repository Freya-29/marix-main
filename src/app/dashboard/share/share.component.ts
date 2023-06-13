import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {
  employeeList1: any = [{id: '', name: '', department:''}]
  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log(this.employeeList1);
    
  }

  everyOneSelected = false

  formVisible = false
  
  employeeList = [
    {
      id:1,
      name:"akshat",
      department:"Cloud",
      selected:false
    },
    {
      id:2,
      name:"Harsh",
      department:"Cloud",
      selected:false
    },
    {
      id:3,
      name:"Neel",
      department:"Hybrid",
      selected:false
    },
    {
      id:4,
      name:"freya",
      department:"Hybrid",
      selected:false
    },
    {
      id:5,
      name:"hetvi",
      department:"Hybrid",
      selected:false
    },
    {
      id:6,
      name:"Hardik",
      department:"Android",
      selected:false
    },
    {
      id:7,
      name:"Anushka",
      department:"IOS",
      selected:false
    }
  ]
  // employeeList = [];
  response: any 
  temp: any;

  async generateLink() {
    try {
      this.formVisible = true;
      this.response = await this.http.get('http://localhost:3000/api/employees').toPromise();
      const data = this.response;
      console.log(data);
      this.employeeList1 = data;
      this.employeeList1.forEach((element: any) => {
        element['selected'] = false;
      });
      // Use this.employeeList1 here or call a separate function passing this.employeeList1 as an argument
      // Example:
      // this.someFunction(this.employeeList1);
      
    } catch (error) {
      console.log(error);
    }
    console.log(this.employeeList1);
    this.temp = this.employeeList1.map((ele: any) => ele)
  }

  cancel(){
    this.formVisible = false
  }

  share(){
    let final:any[] = []

    this.temp.map((ele: any) =>{
      if(ele.selected){
        delete ele.selected
        final.push(ele)
      }
    })

    console.log(final)



  }

  onSearch(value:any){
    console.log(value.value)
    if(value.value.length === 0){
      this.temp = this.employeeList1
    }
    this.temp = this.employeeList1.filter((ele: any) => ele.department.toLowerCase().startsWith(value.value))
  }

  selectedItems: boolean[] = [];

  // toggleSelection(index: number): void {
  //   this.selectedItems[index] = !this.selectedItems[index];
  // }

  // isSelected(index: number): boolean {
  //   return this.selectedItems[index] || false;
  // }

  // selectAll(): void {
  //   this.selectedItems = this.employeeList1.map(() => true);
  //   this.everyOneSelected = true
  // }

  // deselectAll():void {
  //   this.selectedItems = this.employeeList1.map(() => false);
  //   this.everyOneSelected = false
  // }

  selectAll(){

    if(this.everyOneSelected){
      this.temp.map((ele: any) => {
        ele.selected = false
      })
      this.everyOneSelected = false
    }else{
      this.temp.map((ele: any) => {
        ele.selected = true
      })
      this.everyOneSelected = true
    }
  }
  

  checked(value:any){
    this.temp[value]['selected'] = !this.temp[value]['selected']
    // this.temp.map((ele:any) =>  {
    //   if(ele.name === value.name){
    //     ele.selected = true
    //   }
    // })
    // console.log(this.temp)
  }




}
