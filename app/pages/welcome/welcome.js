import {Page, NavController, NavParams} from 'ionic-angular';

var canvasSize = [1200, 650],
      svg        = d3.select("svg"),
      g       = svg.append("g");
  g.append('rect')
    .attr('x',100)
  .attr('y',100)
  .attr('width',100)
  .attr('height',100);

@Page({
    templateUrl: 'build/pages/welcome/welcome.html'
})
export class WelcomePage {

    static get parameters() {
        return [[NavController], [NavParams]];
    }

    constructor(nav, navParams) {
        this.nav = nav;
    }

}
