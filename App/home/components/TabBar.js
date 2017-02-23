'use strict';

let React = require('react');
let ReactNative = require('react-native');
let {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = ReactNative;
import OriginalPage from '../../original/compoments/OriginalPage';

let originIconBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADmklEQVRoQ+2ZjZENQRSFz0aADIgAESACRIAIEAEiQASIYIkAESACRIAIqG+rz1Zvb8/M7Z6effu2dNXU7r433X3Ovef+dO+BLsg4uCA89J/IQE9elvQxrXezd93z4JFDSfckfZZ0e1+JPJf0TNKfROLrPhLBC3iDcUfSp14SzNuVtG6kuCA+nkp6tYbErog4uCHzTtLDtSR2SQQZXZdETCCr32vJ7EJaeORl5okhZM6ayNUU4MiKTPVjlGfOigheeCzpiSR+/5Y8ApEhMtuaCJZ/kEBDgPFaEvXDccHnq8mMInIrgQQU4P0gJQ8qNwRq9WI1mR4iv5I8Ionmp6T3kt6mDDU3p4UMrcyb5NWj/qyVCBb+XqAhaN1aoHke/sbyrWl1iQzf09IQawxiDe83E3Fb8SE1ehGvtL4zRcZesFxPxFqrR2glyD5D2ooZhiUZvGsvIFe6gROx1krkS3IluuzuVAMuynux/PUy4x1/10IEKxHoxIRTaQBT8yusjcGQEL0YpPjslBfylVuIsBCZYsv4AJvl60CGxGLSaCFCCqW4ReODWCJAAYGese7S4H2OvXgdT5ABQ6OFCGkXd0fiw7GUg8AQjxZQQQIyL1LxDJFoSb9YB3BkjLxa1zYiu9DdIg0qOdJALpck3U8FsjbPe+AN9liUU0+MGFzkIISMaFly0J5P1nEaLck4NubemfRQVFo1cFOL9hJpke6pvSNEnHaZfCXgclufOpNLi3WmpOXWJyLdqgEjRFrSbn4eLzeck+Xq1idCJJp2cxIEOpoHIEFLB8wzNXy/1ZytvGCEiNv2azN5vSTh+hFNnzbWXFabXWuJiF1+3C5XVltLgiWdILov6paI2FJTLh9BIicSKbZdwT6XEkeRAJjlu2TYrjoyV81HkgDc34RwEyJTlXY0ic2J1GQ1kgQep5Uhw5FUWnq/cGWvyWotiRw44MvD2aoD25QmS1n1kGAOFsfaAC+7ZlI6aZeHdiZ89qhF/BSRXFZswDkBi7L5XLED7N1CLt6XPgrQVPieq6LmgpjLypcAcyR8LQrBozumbHC7aOBbXlZU77UsK5o8/odRI2HwyCaXDDo3cH42HY6i/UxUWpYVIHxzbo1zZi/B+1rUslmDp3tuGSOWlRd051oGa8udbje4loklEcuqtsa5A5+DLIlYVnmmid6mtxhw+Ls5kTxb7QX4KY+4PmyaJoe7Ym1vsxWg3nW72+beDbea9w8nKA9C6ZZbrAAAAABJRU5ErkJggg==';

let shopIconBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAB2klEQVRoQ+2Y4TUEMRSFv60AFaADKkAFSkAHVIAKUAE60AEqoANUQAec62zO2YlMJtmZZLIj82dnJ5Pk3XfffS9vZkzkmk0EBxVIaUxWRlaBke/SjGyxpxFNrtCaHJBS9WMcHcxIBZJYY9GMJLan9/Le0NoC3npvkWeBDeDLbGXrYB94BJ4B3S9eTkrnL+QcewL2gANA97+XDeQCOAdugNNCgdwBR8AlIHudQMxLZ8B1oUDk4CvgHjhuA+KkbYTw0ZZt4eoMfzu0JHQJfhd4LZSRHeAFeAe22xjJKVqf16PHbEYmA0R5eQ1o5OjCNLIOfNrJymbkATgETgBlsBLriDLVrV3rbCDmJQldKdhkMeVrUyD1TP9VNFWYco5J6CrYYqXh7Jh+5GNOz6bjBJJ77E8x9wGRcTJavwozUyBVkMTcWGPGkbUfcUTUKI+i+5FJdohDfZBYdE7Mmq55S2kkZlNfvBUDZNlwc8W17zhknBE8z5d+O+mMkHqwQQGniV5iD/GeD1cF4uhkKyNdTU6IVGpo1dBq+XpRs5anTQ5xTrC2/m1BDMlQsWct37EnGSMrD6QvANf8UTRSgXg8kI2RFCwMuWZwhzjkpinW6gSSYtPkay7buiY3LHaDH3Yo6zPn1lqIAAAAAElFTkSuQmCC';

let categoryIconBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABcklEQVRoQ+2YYU0EMRCFv5OAA3CAA5AACgAHoABwgAPAwZ0CcIAEkIADLq+hSbMh2e61nbTLzM9rO/PevNn28jasJDYr4YET6U1JV8QVadQBH61GjT047V+KfACnB2e0ObgFLtNSUyLHwKcNluIqR8B3zDIl8gDcA6/AdXGpNglegCvgERDeEJGIlNBiXDgBvtrgKM6aTs0tsBNWEXkDzpP0N4BY9xyalucE4FZEfn5/0DhJkV6VmDZWygivJimMViQy6psS8DuRjj4gV6QjMQKUxYrES8GayNwl9H+JWCuRW2+xIrmJrfc5EeuOz9VzReY6ZL2+WBF/Rwolqv4gFuJpdnzxaDVDUpjYiRQ2sPrx9Soi50Re0Ujmgzy44L/pansHzga3g3apQSdmYqgYxaC7A+QDB4MujZEsU5F4iuBXa2KL4PSbqX5fVkgov/cizTP3P6ZCTZsUTsSmz/lVXJH8XtnsdEVs+pxfxRXJ75XNzj3ORFV8qywctgAAAABJRU5ErkJggg==';

let myIconBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAD+ElEQVR4Xu2agZEOQRCF30WACBABIkAEiAARIAJEgAgQASJABIgAESAC6rvaqWpdM//uzPRsbdVuV13d3X+7M91vXr/p6bkz7dzOdh6/DgAOBuwcgSMFdk6AQwSPFDhSYF0Erku6I+mWpIuS+B37Kum3pE+SPky/r+LZWilwV9ILSVcWRvVD0hNJ7xc+3/zYaAAI+PW04i1OwoiHkgBkiI0EAHp/nKje4zypcXtUWowCgOC/FKJ+O+U6ec8XxvN8oQ33C+/dGAHCCACgPcEjctYQt8cL6Mz7LyextO/DBEAITYcRAEB7VtIagkZQNQZYCKc1NIF0CLNoAFD7dwHBpyFyINyL3B2iAfjutjpoDyg9xlZI7ZCMFLjaM6B9NxKAnPDhaG/OogkAay1MECMBeCbpqfEStX8QtFJv3O7wXBLzdVskAAjUTeMRBQyORxhAUlAl+9xRXP3nTyQAbH2ptmeSMJpO49q6gvqB8bstEoC/zpvIsRl6yPiRTg5x0IA6ZPxIAKjULhiHR6bAn4AzxrmrkQDsXgQpdR8N2gZ9MfRqOldsSgR3XwixGlR9l82ysHLU7j3G2cKW0z8rOkuz80ZqAJP5goXPWk6CyfHcYSiywAoVweS0F0M+JxDytsbQE3+EDqsAkyPRDGBctAAQ7JbI56QDbJg7HHH4oQ/gT5FsffQZUhepBszisyMAYLJcXyA5wfkAgL65lti1KcDSASq0DzCSAWlsQCBYz4TalRuy8msAwBxQFhX3/cGlIFBdsvIwZoiNSgECRsQQv9bgU8CAgBgiovwcaiMA6F31UoCIJ1tgKBuiAUC9WfWSsY2xG6Q7gbSi6Z6QHQTtsI0VPxadIDpCIRYJAB2buRbYkrZ2rq3ug0VcYUO3RQFQCp6usO3o4vAp53Pj0FvM3RaFgBABgG+GEiR7PGxIVGePtwYTEDZSAoPypI6/UEmVH6lB6thzBu91N0d7AcgVPARPICm/S5XhHH39/o9OAJwHs6tA6gEAh+jX222OkxoB++2qFoRS8cNcsMoygd2B7lPTFtkDQI76p9pggADtTyk8rID2pEOp5s/1HZpToRWA3G3NUidID/SB72klYQ70TueEufTIgX+phQWtAHgHQpsUc9FPf/fNl6a+QysA/hI0tEmxEADffGm6NG0BwOdgWIt6YeDpMQTxl3unuhXfAoBvU0VeglZicK4ZtkiqToMWAHyLunrS2ihPPO8Xo/r/EVoA8D0//mUl9IRWARA7CWeHZNU9wxYAyDtb/LSMURHj7KP2zrBaCFucH3JJORtm+YEuf1oA6PB1e68eAGxvTdb16GDAunhvb7aDAdtbk3U9OhiwLt7bm233DPgHY+3HQYwPzIUAAAAASUVORK5CYII=';

let localIconBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACOElEQVR4Xu1agU0EIRCcr0CtQDvQDrQD7UBLsARLsATtQDvQDrQDrUCtQDMJmPNccIG/O+INCbn7BIZl2B34YzdYedmsfP4QAfKAlTOgEFi5A0gEFQIKgToGjgEchXoAINYh2guAYX0A8OgcjvgnA9y/8J8AsHrxv83whgAnS6POgmHOeZjNaOhNMJbvLBH/Iry34JPouxF+Ei9HwC6AcwCXYSVajEr1HRIwBT498BrALYB3a4AcAW8ASMJ/KJz8XikBn5mZvwKgq8XY4wBxNdmNxNGt45PvjOkdJ5sfCfzhKlr4+xl8c7FzHjAm4DnELuOLrlVTIhGM9cMRQMSPxNbgUyypUxZ+MwFewfQaPiZ4EfwSD1jEQC+bRjsXwSIgw7CLwalXaGp8eYA8IM2AQmDEjXaBBkGyunbhYRJBiaBEMMlAFzHaoDsu+6UB0gBpgDQgxYBLRKYWqanxJYISQYmgRFAimGBAu4A+iPxkQF+EGg4l+iJUe3PTQLpLw3QS1Emw7STI627eyfNpFV51865/mDsQ23lclLjMKWBugVWIy1yFWvxsnqBl4GkwhgalJp2iNN7783kPIIcf8whKJIAkEDuH/wuvRAOYnbGtlBkLa2r85gSJktXosa0IsFalJAR6XNUSm+QB8gCDgW3/wfG4JFPZuGWNcwZ5XuD2V5uC5xm7aBusAnR2IglXIRWXXZjKyt+zTp4DL+EBTo7maSYC5uG531HkAf2uzTyWyQPm4bnfUVbvAV+BGLBBITvYqQAAAABJRU5ErkJggg==';

export default class TabBar extends React.Component {

  state = {
    selectedTab: '原创'
  };

  render() {
    return (
      <TabBarIOS
        barTintColor="white"
        tintColor="black"
        unselectedTintColor="black"
        unselectedItemTintColor="red">
        <TabBarIOS.Item
          title="原创"
          icon={{uri: originIconBase64, scale: 3}}
          selected={this.state.selectedTab === '原创'}
          onPress={() => {
            this.setState({selectedTab: '原创'})
          }}>
          <OriginalPage />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="书店"
          icon={{uri: shopIconBase64, scale: 3}}
          selected={this.state.selectedTab === '书店'}
          onPress={() => {
            this.setState({selectedTab: '书店'})
          }}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>书店</Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="分类"
          icon={{uri: categoryIconBase64, scale: 3}}
          selected={this.state.selectedTab === '分类'}
          onPress={() => {
            this.setState({selectedTab: '分类'})
          }}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>分类</Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="我的"
          icon={{uri: myIconBase64, scale: 3}}
          selected={this.state.selectedTab === '我的'}
          onPress={() => {
            this.setState({selectedTab: '我的'})
          }}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>我的</Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="本地"
          icon={{uri: localIconBase64, scale: 3}}
          selected={this.state.selectedTab === '本地'}
          onPress={() => {
            this.setState({selectedTab: '本地'})
          }}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>本地</Text>
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}
