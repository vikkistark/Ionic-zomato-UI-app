import { Component, VERSION, ViewChild } from '@angular/core';
import { ListViewComponent } from './listview-component/listview.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // @ViewChild(ListViewComponent) listView: ListViewComponent;
  name = 'Ionic 6.2 Angular ' + VERSION.major;
  selectedTab: string = 'tab1';
  swiperConfig = {
    breakPoints: {
      640: {
        sliderPerView: 2,
      },
      780: {
        sliderPerView: 3,
      },
      1024: {
        sliderPerView: 4,
      },
    },
  };
  menuList: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 2123, 123, 1, 23123];

  foodItems = [
    {
      name: 'Guppy',
      subName: 'Japanese style, Sushi, Taiwan, Poke',
      rate: '1200 per person',
      liveTracking: true,
      deliveryTime: '34 Minutes',
      img: 'https://b.zmtcdn.com/data/pictures/2/19200122/791342581d818c5d164e54eea84d8d14.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*',
    },
    {
      name: 'Biryani Paradise',
      subName: 'Hyderabadi Biryani, Kebabs, Tandoori',
      rate: '800 per person',
      liveTracking: true,
      deliveryTime: '45 Minutes',
      img: 'https://b.zmtcdn.com/data/pictures/6/20824456/916b9390125feb2a18419bf65e09f7bc_o2_featured_v2.jpg?output-format=webp" style="height:150px',
    },
    {
      name: 'Chaat Corner',
      subName: 'Street Food, Chaat, Pani Puri',
      rate: '200 per person',
      liveTracking: false,
      deliveryTime: '25 Minutes',
      img: 'https://b.zmtcdn.com/data/pictures/chains/3/19662623/a38ccba15050b77ee612c3fc65ff5552.jpeg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*',
    },
    {
      name: 'Dosa Delight',
      subName: 'South Indian, Dosas, Idlis, Vadas',
      rate: '300 per person',
      liveTracking: true,
      deliveryTime: '30 Minutes',
      img: 'https://b.zmtcdn.com/data/dish_photos/900/24a8440befd7fa3849ce0c723a7eb900.jpg?fit=around|130:130&crop=130:130;*,*',
    },
    {
      name: 'Punjabi Dhaba',
      subName: 'North Indian, Punjabi Cuisine',
      rate: '500 per person',
      liveTracking: true,
      deliveryTime: '40 Minutes',
      img: 'https://b.zmtcdn.com/data/pictures/0/18361810/892635246bae1bbccf68bd7642534a6e.png?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*',
    },
    {
      name: 'Biryani Paradise',
      subName: 'Hyderabadi Biryani, Kebabs, Tandoori',
      rate: '800 per person',
      liveTracking: true,
      deliveryTime: '45 Minutes',
      img: 'https://b.zmtcdn.com/data/pictures/6/20824456/916b9390125feb2a18419bf65e09f7bc_o2_featured_v2.jpg?output-format=webp" style="height:150px',
    },
    {
      name: 'Chaat Corner',
      subName: 'Street Food, Chaat, Pani Puri',
      rate: '200 per person',
      liveTracking: false,
      deliveryTime: '25 Minutes',
      img: 'https://b.zmtcdn.com/data/pictures/chains/3/19662623/a38ccba15050b77ee612c3fc65ff5552.jpeg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*',
    },
    {
      name: 'Dosa Delight',
      subName: 'South Indian, Dosas, Idlis, Vadas',
      rate: '300 per person',
      liveTracking: true,
      deliveryTime: '30 Minutes',
      img: 'https://b.zmtcdn.com/data/dish_photos/900/24a8440befd7fa3849ce0c723a7eb900.jpg?fit=around|130:130&crop=130:130;*,*',
    },
    {
      name: 'Punjabi Dhaba',
      subName: 'North Indian, Punjabi Cuisine',
      rate: '500 per person',
      liveTracking: true,
      deliveryTime: '40 Minutes',
      img: 'https://b.zmtcdn.com/data/pictures/0/18361810/892635246bae1bbccf68bd7642534a6e.png?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*',
    },
  ];

  constructor() {}

  ionViewDidEnter() {}
}
