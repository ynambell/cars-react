import React from 'react';
import './CatalogContent.css'

export function CatalogContent({
    galleryItems = [],
}) {
    return (
        <div class="CatalogContent">
            {galleryItems.map((itemData, i) => (
                <div key={i}>{itemData.title}</div>
            ))}
        </div>
    );
}