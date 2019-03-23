import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Parking } from "../../models/parking";
import { DataService } from "../../services/data.service";

const EXAMPLE_DATA: Parking[] = [
  {id: "1", patent: "MOCKDATA", location: "MOCKDATA", endTime: "MOCKDATA"},
  {id: "2", patent: "MOCKDATA", location: "MOCKDATA", endTime: "MOCKDATA"},
  {id: "3", patent: "MOCKDATA", location: "MOCKDATA", endTime: "MOCKDATA"}
];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource<Parking> {
  data: Parking[] = EXAMPLE_DATA;

  constructor(public dataService: DataService, private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Parking[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    this.dataService.getParkingsActive().subscribe(data => {
      this.data = data;
      this.sort.direction;
      console.log(this.data)
    })

    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
    
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Parking[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Parking[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.patent, b.patent, isAsc);
        case 'location': return compare(+a.location, +b.location, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'endTime': return compare(+a.endTime, +b.endTime, isAsc);
        default: return 0;
      }
    });
  }

}
/** Simple sort comparator for example ID/patent columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}