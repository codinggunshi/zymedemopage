import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'treeFilter',
    pure: false
})
export class TreeFilterPipe implements PipeTransform {
    transform(items: any[], filter: string) {
        if (!items || !filter || filter.trim().length == 0) {
            return items;
        }
        return items.filter((item) => this.applyFilter(item, filter));
    }

    applyFilter(item: any, filter: string) {
        if (filter && item.label && item.label.toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
            return true;
        }
        if(item.items) {
            for(let i=0; i<item.items.length; i++) {
                if(this.applyFilter(item.items[i], filter)) {
                    return true;
                }
            }
        }
        return false;
    }
}
