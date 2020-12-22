import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  constructor( private sanitizer: DomSanitizer) {}
  transform(value: string,city :string): any{
    return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:#9C27B0">' +city +'</div>');
     /*  if(cityCode == 'EK')
       {
         return 'THE BIG CITY';
       }else {
         return 'garden city'
       }

    return 'first-name: ' +firstName ; */

  }

}
