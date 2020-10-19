import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen86149484Navigator from '../features/BlankScreen86149484/navigator';
import BlankScreen87149483Navigator from '../features/BlankScreen87149483/navigator';
import CopyOfBlankScreen60149482Navigator from '../features/CopyOfBlankScreen60149482/navigator';
import BlankScreen42149479Navigator from '../features/BlankScreen42149479/navigator';
import BlankScreen43149478Navigator from '../features/BlankScreen43149478/navigator';
import UserProfile149473Navigator from '../features/UserProfile149473/navigator';
import Maps149471Navigator from '../features/Maps149471/navigator';
import SignIn259149464Navigator from '../features/SignIn259149464/navigator';
import BlankScreen59149463Navigator from '../features/BlankScreen59149463/navigator';
import BlankScreen60149462Navigator from '../features/BlankScreen60149462/navigator';
import BlankScreen61149461Navigator from '../features/BlankScreen61149461/navigator';
import BlankScreen62149460Navigator from '../features/BlankScreen62149460/navigator';
import BlankScreen86149440Navigator from '../features/BlankScreen86149440/navigator';
import BlankScreen87149439Navigator from '../features/BlankScreen87149439/navigator';
import CopyOfBlankScreen60149438Navigator from '../features/CopyOfBlankScreen60149438/navigator';
import BlankScreen42149435Navigator from '../features/BlankScreen42149435/navigator';
import BlankScreen43149434Navigator from '../features/BlankScreen43149434/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen86149484: { screen: BlankScreen86149484Navigator },
BlankScreen87149483: { screen: BlankScreen87149483Navigator },
CopyOfBlankScreen60149482: { screen: CopyOfBlankScreen60149482Navigator },
BlankScreen42149479: { screen: BlankScreen42149479Navigator },
BlankScreen43149478: { screen: BlankScreen43149478Navigator },
UserProfile149473: { screen: UserProfile149473Navigator },
Maps149471: { screen: Maps149471Navigator },
SignIn259149464: { screen: SignIn259149464Navigator },
BlankScreen59149463: { screen: BlankScreen59149463Navigator },
BlankScreen60149462: { screen: BlankScreen60149462Navigator },
BlankScreen61149461: { screen: BlankScreen61149461Navigator },
BlankScreen62149460: { screen: BlankScreen62149460Navigator },
BlankScreen86149440: { screen: BlankScreen86149440Navigator },
BlankScreen87149439: { screen: BlankScreen87149439Navigator },
CopyOfBlankScreen60149438: { screen: CopyOfBlankScreen60149438Navigator },
BlankScreen42149435: { screen: BlankScreen42149435Navigator },
BlankScreen43149434: { screen: BlankScreen43149434Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
