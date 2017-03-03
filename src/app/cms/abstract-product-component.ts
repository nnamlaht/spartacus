import { Injectable, ChangeDetectorRef } from '@angular/core';
import { AbstractCmsComponent } from './abstract-cms-component';

import { CmsModelService } from '../data/cms-model.service';
import { ConfigService } from '../cms/config.service';
import { ProductLoaderService } from '../data/product-loader.service';

@Injectable()
export abstract class AbstractProductComponent extends AbstractCmsComponent {

    constructor(
        protected configService: ConfigService,
        protected cmsModelService: CmsModelService,
        protected cd: ChangeDetectorRef,
        protected productLoader: ProductLoaderService
    ) {
        super(cd, configService, cmsModelService);
    }

    // protected getProductLoader(): ProductLoaderService {
    //     return this.productLoader;
    // }
}
