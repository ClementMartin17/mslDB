import { Pipe, PipeTransform } from '@angular/core';
import { Astromon } from '../class/astromon';
@Pipe({
    name: 'astromonFilter'
})
export class AstromonFilterPipe implements PipeTransform {
    transform(items: Astromon[], searchText: string, element: string, sort: string): any[] {
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
        switch (sort) {
            case "atk":
                result = result.sort((a, b) => { return b.atk - a.atk })
                break;
            case "def":
                result = result.sort((a, b) => { return b.def - a.def })
                break;
            case "rec":
                result = result.sort((a, b) => { return b.rec - a.rec })
                break;
            case "hp":
                result = result.sort((a, b) => { return b.hp - a.hp })
                break;
            case "name":
                result = result.sort(function (a, b) {
                    var nameA = a.astromon_id.toLowerCase(), nameB = b.astromon_id.toLowerCase()
                    if (nameA < nameB)
                        return -1
                    if (nameA > nameB)
                        return 1
                    return 0
                })
                break;
        }


        return result;




    }
}
