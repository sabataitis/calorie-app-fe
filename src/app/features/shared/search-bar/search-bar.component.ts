import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductDTO} from "../../../shared/dto/product.dto";

@Component({
  selector: 'calorie-app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent {
  @Input('products') products: ProductDTO[];
  @Output() productChangeEvent = new EventEmitter<string>();

  term: string = "";

  productChange(searchTerm: string){
    this.productChangeEvent.emit(searchTerm);
    this.term = "";
  }

}
