import {Component, OnInit} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {Router} from '@angular/router'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'
import {Subject} from 'rxjs/Subject'
import {Observable} from 'rxjs/Observable'
import 'rxjs'
import {Option} from './option'
import {List} from './list'
import {RecommendService} from './recommend.service'
import {StaticService} from '../../../../shared/service/static'

interface OptionChangeItem {
    value: string,
    isAdd: boolean
}
@Component({
    selector: 'app-admin-recommend',
    templateUrl: './admin-recommend.component.html',
    styleUrls: ['./admin-recommend.component.scss'],
    providers: [RecommendService]
})
export class AdminRecommendComponent implements OnInit {

    constructor (private recommendService: RecommendService,
                 private staticService: StaticService,
                 private titleService: Title,
                 private router: Router){
    }

    public option: Option = {recommended: []}
    public list: Observable<List[]>
    public showAlert: boolean = false

    private searchTerms: BehaviorSubject<string> = new BehaviorSubject<string>('allArticles')


    private optionChangeItem: Subject<OptionChangeItem> = new Subject<OptionChangeItem>()
    private timer: any


    getOption (){
        this.recommendService.getOption()
            .do(
                option => Object.assign(this.option, option),
                error => this.staticService.toastyInfo(error.json().message)
            )
            .combineLatest(this.optionChangeItem, (option, item) =>{
                return item.isAdd ?
                    [...option.recommended, {id: item.value}]:
                    option.recommended.map(v => v.id == item.value? false: v)
            })
            .map(rec => {
                console.log(rec);
                return rec.filter(v => v&& v.id).map(v => v.id)
            })
            .switchMap(rec => this.recommendService.changeOption({recommended: rec}))
            .subscribe(
                option => Object.assign(this.option, option),
                error => this.staticService.toastyInfo(error.json().message)
            )
    }

    changeOption (id: string, isAdd: boolean = true): void{
        this.optionChangeItem.next({value: id, isAdd: isAdd})
    }

    articleIsRecommended (item){
        if (!this.option.recommended) return;
        return this.option.recommended.some(v => v.id === item.id)
    }

    search (keyWord: string){
        if (!keyWord) return this.searchTerms.next('allArticles')
        this.searchTerms.next(keyWord)
    }

    ngOnInit (){
        this.titleService.setTitle('推荐文章-维特博客')
        this.getOption()

        this.list = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(word => this.recommendService.search(word))
            .catch(error =>{
                return Observable.of<List[]>([]);
            })
    }

}
