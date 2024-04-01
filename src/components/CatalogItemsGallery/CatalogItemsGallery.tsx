import {CatalogItem} from '../CatalogItem/CatalogItem';
import type {CatalogItemProps} from '../CatalogItem/CatalogItem';
import './CatalogItemsGallery.scss';

interface CatalogItemsGalleryProps {
    items: CatalogItemProps[]
}

export function CatalogItemsGallery({
    items = [],
}:CatalogItemsGalleryProps) {
    return (
        <div className="CatalogItemsGallery">
            {items.map((itemData, i) => (
                <CatalogItem
                    key={i}
                    {...itemData}
                />
            ))}
        </div>
    );
}
