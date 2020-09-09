import { Injectable } from '@angular/core';
import { B2BUser, EntitiesModel } from '@spartacus/core';
import { TableStructure } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrganizationTableType } from '../../../shared/organization.model';
import { UserGroupUserListService } from '../user-group-user-list.service';

@Injectable({
  providedIn: 'root',
})
export class UserGroupAssignedUserListService extends UserGroupUserListService {
  protected tableType = OrganizationTableType.USER_GROUP_ASSIGN_USERS;
  /**
   * @override
   * Load all b2b users assigned to the given user group
   */
  protected load(
    structure: TableStructure,
    code: string
  ): Observable<EntitiesModel<B2BUser>> {
    return super
      .load(structure, code)
      .pipe(map((users) => this.filterAssigned(users)));
  }

  /**
   * As we can't filter with the backend API, we do this client side.
   */
  protected filterAssigned({
    pagination,
    sorts,
    values,
  }: EntitiesModel<B2BUser>): EntitiesModel<B2BUser> {
    return {
      pagination,
      sorts,
      values: values.filter((value) => value.selected),
    };
  }
}
