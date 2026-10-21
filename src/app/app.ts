import { Component } from '@angular/core';
import { CollectionItemCard } from "./components/collection-item-card/collection-item-card";
import { CollectionItem } from './models/collection-item';
import { SearchBar } from "./components/search-bar/search-bar";
@Component({
 selector: 'app-root',
 imports: [CollectionItemCard, SearchBar],
 templateUrl: './app.html',
 styleUrl: './app.scss'
})
export class App {
 count = 0;
 search = '';
 coin!: CollectionItem;
 linx1!: CollectionItem;
constructor () {
 this.coin = new CollectionItem();
 this.coin.name = 'Pièce de 1972';
 this.coin.description = 'Pièce de 50 centimes de francs.';
 this.coin.rarity = 'Commune';
 this.coin.image = 'img/coin.jpg';
 this.coin.price = 170;
 this.linx1 = new CollectionItem();
 }
 increaseCount() {
 this.count++;
 }
}