import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile149562Navigator from '../features/UserProfile149562/navigator';
import Maps149560Navigator from '../features/Maps149560/navigator';
import SignIn259149553Navigator from '../features/SignIn259149553/navigator';
import BlankScreen59149552Navigator from '../features/BlankScreen59149552/navigator';
import BlankScreen60149551Navigator from '../features/BlankScreen60149551/navigator';
import BlankScreen61149550Navigator from '../features/BlankScreen61149550/navigator';
import BlankScreen62149549Navigator from '../features/BlankScreen62149549/navigator';
import BlankScreen86149529Navigator from '../features/BlankScreen86149529/navigator';
import BlankScreen87149528Navigator from '../features/BlankScreen87149528/navigator';
import CopyOfBlankScreen60149527Navigator from '../features/CopyOfBlankScreen60149527/navigator';
import BlankScreen42149524Navigator from '../features/BlankScreen42149524/navigator';
import BlankScreen43149523Navigator from '../features/BlankScreen43149523/navigator';
import SignIn259149508Navigator from '../features/SignIn259149508/navigator';
import BlankScreen59149507Navigator from '../features/BlankScreen59149507/navigator';
import BlankScreen60149506Navigator from '../features/BlankScreen60149506/navigator';
import BlankScreen61149505Navigator from '../features/BlankScreen61149505/navigator';
import BlankScreen62149504Navigator from '../features/BlankScreen62149504/navigator';
import BlankScreen87149483Navigator from '../features/BlankScreen87149483/navigator';
import CopyOfBlankScreen60149482Navigator from '../features/CopyOfBlankScreen60149482/navigator';
import BlankScreen42149479Navigator from '../features/BlankScreen42149479/navigator';
import BlankScreen43149478Navigator from '../features/BlankScreen43149478/navigator';
import UserProfile149473Navigator from '../features/UserProfile149473/navigator';
import Maps149471Navigator from '../features/Maps149471/navigator';
import BlankScreen59149463Navigator from '../features/BlankScreen59149463/navigator';
import BlankScreen60149462Navigator from '../features/BlankScreen60149462/navigator';
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
UserProfile149562: { screen: UserProfile149562Navigator },
Maps149560: { screen: Maps149560Navigator },
SignIn259149553: { screen: SignIn259149553Navigator },
BlankScreen59149552: { screen: BlankScreen59149552Navigator },
BlankScreen60149551: { screen: BlankScreen60149551Navigator },
BlankScreen61149550: { screen: BlankScreen61149550Navigator },
BlankScreen62149549: { screen: BlankScreen62149549Navigator },
BlankScreen86149529: { screen: BlankScreen86149529Navigator },
BlankScreen87149528: { screen: BlankScreen87149528Navigator },
CopyOfBlankScreen60149527: { screen: CopyOfBlankScreen60149527Navigator },
BlankScreen42149524: { screen: BlankScreen42149524Navigator },
BlankScreen43149523: { screen: BlankScreen43149523Navigator },
SignIn259149508: { screen: SignIn259149508Navigator },
BlankScreen59149507: { screen: BlankScreen59149507Navigator },
BlankScreen60149506: { screen: BlankScreen60149506Navigator },
BlankScreen61149505: { screen: BlankScreen61149505Navigator },
BlankScreen62149504: { screen: BlankScreen62149504Navigator },
BlankScreen87149483: { screen: BlankScreen87149483Navigator },
CopyOfBlankScreen60149482: { screen: CopyOfBlankScreen60149482Navigator },
BlankScreen42149479: { screen: BlankScreen42149479Navigator },
BlankScreen43149478: { screen: BlankScreen43149478Navigator },
UserProfile149473: { screen: UserProfile149473Navigator },
Maps149471: { screen: Maps149471Navigator },
BlankScreen59149463: { screen: BlankScreen59149463Navigator },
BlankScreen60149462: { screen: BlankScreen60149462Navigator },
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
