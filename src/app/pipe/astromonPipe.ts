import { Pipe, PipeTransform } from '@angular/core';
import { Astromon } from '../class/astromon';
@Pipe({
    name: 'astromonFilter'
})
export class AstromonFilterPipe implements PipeTransform {
    transform(items: Astromon[], searchText: string, element: string): any[] {
        let result = items;
        if (!items) return [];


        if (searchText) {
            searchText = searchText.toLowerCase();
            result = result.filter(it => {
                let result = false;
                it.name.forEach(name => {
                    name = name.toLowerCase();
                    if (name.includes(searchText)) {
                        result = true;
                    }
                });
                return result;
            });
        }

        if (element && element != 'all') {
            result = result.filter(it => {
                return it.element.includes(element);
            });

        }

        return result;




    }
}
