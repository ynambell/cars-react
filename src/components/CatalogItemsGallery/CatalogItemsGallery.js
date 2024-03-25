import {catalogItem} from '../catalogItem/catalogItem.js';

export function catalogItemsGallery({
    items = [],
}) {
    return `
        <div class="catalogItemsGallery">
            ${formatItems(items)}
        </div>
    `;
}

export function formatItems(items) {
    return items.map(catalogItem).join('\n');
}