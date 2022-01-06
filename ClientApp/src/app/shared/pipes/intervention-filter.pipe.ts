import { Pipe, PipeTransform } from '@angular/core';
import { Intervention } from 'src/app/intervention/intervention.interface';

@Pipe({
    name: 'interventionFilter',
    pure: false
})
export class InterventionFilterPipe implements PipeTransform {
    transform(items: Intervention[], filter: string): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item =>
        item.ref.indexOf(filter) !== -1 ||
        //item.clinique == filter ||
        item.f_Name.toLowerCase().indexOf(filter.toLowerCase()) !== -1 ||
        item.l_Name.toLowerCase().indexOf(filter.toLowerCase()) !== -1 ||
        item.motif.toLowerCase().indexOf(filter.toLowerCase()) !== -1
        );
    }
}
