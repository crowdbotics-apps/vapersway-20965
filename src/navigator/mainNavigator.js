import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
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
