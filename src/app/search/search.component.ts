import {Component, OnInit} from '@angular/core'
import {Subject} from 'rxjs/Subject'
import {Observable} from 'rxjs/Observable'
import {SearchService} from './search.service'
import {Articles} from './articles'

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    providers: [SearchService]
})
export class SearchComponent implements OnInit {

    constructor (
        private searchService: SearchService
    ){
    }

    public list:Observable<Articles[]>
    private searchTerms = new Subject<string>()

    search (keyWord: string){
        this.searchTerms.next(keyWord)
    }

    ngOnInit (){
        this.list = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(word => word? this.searchService.search(word): Observable.of<Articles[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<Articles[]>([]);
            });
    }

}
