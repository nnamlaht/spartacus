import { Injectable } from '@angular/core';
import { EntitiesModel, Permission } from '@spartacus/core';
import { UserGroupService } from '@spartacus/my-account/organization/core';
import { TableService, TableStructure } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { OrganizationListService } from '../../shared/organization-list/organization-list.service';
import { OrganizationTableType } from '../../shared/organization.model';

@Injectable({
  providedIn: 'root',
})
export class UserGroupPermissionListService extends OrganizationListService<
  Permission
> {
  protected tableType = OrganizationTableType.USER_GROUP_ASSIGN_PERMISSIONS;
  protected domainType = OrganizationTableType.USER;

  constructor(
    protected tableService: TableService,
    protected userGroupService: UserGroupService
  ) {
    super(tableService);
  }

  /**
   *
   * @override
   * Loads all b2b users.
   *
   * @param code The user group code.
   */
  protected load(
    structure: TableStructure,
    code: string
  ): Observable<EntitiesModel<Permission>> {
    const config = structure.options?.pagination;
    return this.userGroupService.getAvailableOrderApprovalPermissions(
      code,
      config
    );
  }

  /**
   * @override
   * Assign user to the user group.
   */
  assign(userGroupCode: string, permissionCode: string) {
    this.userGroupService.assignPermission(userGroupCode, permissionCode);
  }

  /**
   * @override
   * Unassigns the user from the user group.
   */
  unassign(userGroupCode: string, permissionCode: string) {
    this.userGroupService.unassignPermission(userGroupCode, permissionCode);
  }
}
