import { Component, Input, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { UserInfo } from '../interface/interface.model';

@Component({
  selector: 'app-sub-table',
  templateUrl: './sub-table.component.html',
  styleUrls: ['./sub-table.component.scss'],
})
export class SubTableComponent implements AfterViewInit {
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

  @ViewChild('paginator') paginator: MatPaginator;

  ngAfterViewInit() {
    console.log('this.dataList', this.dataList);
    this.dataSource = new MatTableDataSource<UserInfo>(this.dataList);
    this.dataSource.paginator = this.paginator;
  }
}
