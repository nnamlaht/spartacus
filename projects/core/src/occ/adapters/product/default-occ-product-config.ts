import { ProductScope } from '../../../product/model/product-scope';
import { OccConfig } from '../../config/occ-config';

export const defaultOccProductConfig: OccConfig = {
  backend: {
    occ: {
      endpoints: {
        product: {
          default:
            'orgProducts/${productCode}?fields=DEFAULT,averageRating,images(FULL),classifications,manufacturer,numberOfReviews,categories(FULL),baseOptions,baseProduct,variantOptions,variantType',
          list:
            'orgProducts/${productCode}?fields=code,name,summary,price(formattedValue),images(DEFAULT,galleryIndex)',
          details:
            'orgProducts/${productCode}?fields=averageRating,stock(DEFAULT),description,availableForPickup,code,url,price(DEFAULT),numberOfReviews,manufacturer,categories(FULL),priceRange,multidimensional,tags,images(FULL)',
          attributes: 'orgProducts/${productCode}?fields=classifications',
          variants:
            'orgProducts/${productCode}?fields=name,categories,multidimensional,variantMatrix,purchasable,baseOptions(DEFAULT),baseProduct,variantOptions(DEFAULT),variantType',
        },

        productReviews: 'products/${productCode}/reviews',
        // Uncomment this when occ gets configured
        // productReferences:
        //   'products/${productCode}/references?fields=DEFAULT,references(target(images(FULL)))&referenceType=${referenceType}',
        productReferences:
          'products/${productCode}/references?fields=DEFAULT,references(target(images(FULL)))',
        /* eslint-disable max-len */
        productSearch:
          'products/search?fields=products(code,name,summary,configurable,configuratorType,price(FULL),images(DEFAULT),stock(FULL),averageRating,variantOptions),facets,breadcrumbs,pagination(DEFAULT),sorts(DEFAULT),freeTextSearch,currentQuery',
        /* eslint-enable */
        productSuggestions: 'products/suggestions',
      },
    },
    loadingScopes: {
      product: {
        details: {
          include: [ProductScope.LIST, ProductScope.VARIANTS],
        },
      },
    },
  },
};
