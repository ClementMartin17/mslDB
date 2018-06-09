import {Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'astromonFilter'
})
export class AstromonFilterPipe implements PipeTransform {
    transform(items: any[], grade: string, name: string, atk: string){
        if (items && items.length){
            return items.filter(item =>{
                if (grade && item.grade.toLowerCase().indexOf(grade.toLowerCase()) === -1){
                    return false;
                }
                if (name && item.name.toLowerCase().indexOf(name.toLowerCase()) === -1){
                    return false;
                }
                if (atk && item.atk.toLowerCase().indexOf(atk.toLowerCase()) === -1){
                    return false;
                }
                return true;
           })
        }
        else{
            return items;
        }
    }
}