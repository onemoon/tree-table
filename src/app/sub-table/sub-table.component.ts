import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { UserInfo } from '../interface/interface.model';

@Component({
  selector: 'app-sub-table',
  templateUrl: './sub-table.component.html',
  styleUrls: ['./sub-table.component.scss'],
})
export class SubTableComponent implements OnInit {
  @Input()
  dataList: Array<UserInfo>;

  displayedColumns: string[] = [
    'id',
    'first_name',
    'last_name',
    'email',
    'gender',
    'ip_address',
  ];
  dataSource: MatTableDataSource<UserInfo>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    console.log('this.dataList', this.dataList);
    this.dataSource = new MatTableDataSource<UserInfo>(this.dataList);
    this.dataSource.paginator = this.paginator;
  }
}
