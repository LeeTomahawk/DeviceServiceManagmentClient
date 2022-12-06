import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EquipmentService } from 'src/Services/equipment.service';
import { EquipmentDeleteComponent } from './equipment-delete/equipment-delete.component';
import { EquipmentUpdateComponent } from './equipment-update/equipment-update.component';
import { Equipment } from './equipmentInterface';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css'],
})
export class EquipmentListComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'name',
    'description',
    'amount',
    'actions',
  ];
  equipmentList: any;
  dataSource = new MatTableDataSource<Equipment>();
  isLoading: boolean = true;
  totalSize: number = 0;
  SearchPharse: string = '';
  PageNumber: number = 1;
  PageSize: number = 25;
  SortBy: string = '';
  SortDirection: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('empTbSort') empTbSort = new MatSort();

  constructor(
    private updateDialog: MatDialog,
    private deleteDialog: MatDialog,
    private equipmentApiCallser: EquipmentService
  ) {}

  ngOnInit(): void {
    const request: any = {};
    request.SearchPharse = this.SearchPharse;
    request.PageNumber = this.PageNumber;
    request.PageSize = this.PageSize;
    request.SortBy = this.SortBy;
    request.SortDirection = this.SortDirection;
    this.getEquipmentList(request);
  }

  applyFilter(event: Event) {
    this.SearchPharse = (event.target as HTMLInputElement).value;

    this.ngOnInit();
  }

  getEquipmentList(params: any) {
    this.equipmentApiCallser.getEquipmentList(params).subscribe((data) => {
      this.equipmentList = data.result;
      this.totalSize = data.totalResult;
      this.dataSource = new MatTableDataSource<Equipment>(this.equipmentList);
      this.dataSource.sort = this.empTbSort;
      this.isLoading = false;
    });
  }

  nextPage(event: PageEvent) {
    this.PageNumber = event.pageIndex + 1;
    this.PageSize = event.pageSize;

    const request: any = {};

    request.SearchPharse = this.SearchPharse;
    request.PageNumber = this.PageNumber;
    request.PageSize = this.PageSize;
    request.SortBy = this.SortBy;
    request.SortDirection = this.SortDirection;

    this.getEquipmentList(request);
  }

  onSortChanged(event: Sort) {
    this.SortBy = event.active;
    this.SortDirection = event.direction;

    const request: any = {};

    request.SearchPharse = this.SearchPharse;
    request.PageNumber = this.PageNumber;
    request.PageSize = this.PageSize;
    request.SortBy = this.SortBy;
    request.SortDirection = this.SortDirection;

    this.getEquipmentList(request);
  }

  openUpdateDialog(equipment: Equipment) {
    const dialogRef = this.updateDialog.open(EquipmentUpdateComponent, {
      data: { equipment },
    });

    dialogRef.afterClosed().subscribe((x) => {
      const request: any = {};

      request.SearchPharse = this.SearchPharse;
      request.PageNumber = this.PageNumber;
      request.PageSize = this.PageSize;
      request.SortBy = this.SortBy;
      request.SortDirection = this.SortDirection;

      this.getEquipmentList(request);
    });
  }
  openDeleteDialog(id: string) {
    const dialogRef = this.deleteDialog.open(EquipmentDeleteComponent, {
      data: { eqid: id },
    });

    dialogRef.afterClosed().subscribe((x) => {
      const request: any = {};

      request.SearchPharse = this.SearchPharse;
      request.PageNumber = this.PageNumber;
      request.PageSize = this.PageSize;
      request.SortBy = this.SortBy;
      request.SortDirection = this.SortDirection;

      this.getEquipmentList(request);
    });
  }
}
