import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen60149438Navigator from '../features/CopyOfBlankScreen60149438/navigator';
import BlankScreen42149435Navigator from '../features/BlankScreen42149435/navigator';
import BlankScreen43149434Navigator from '../features/BlankScreen43149434/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
