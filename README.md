
  <h3 align="center">NUBANK APP - CLONE</h3>
</p>


<!-- ABOUT THE PROJECT -->

## About the Project


NUBANK APPLICATION CLONE - MADE IN REACT NATIVE. Developed as a training project


## App PREVIEW

  <p align="center">
  <p align="center">
 <img alt="APP" src="https://github.com/alsdede/nubank-clone-app/blob/master/src/assets/ss1.png" width="250px" />
  <img alt="APP" src="https://github.com/alsdede/nubank-clone-app/blob/master/src/assets/ss2.png" width="250px" />
   <img alt="APP" src="https://github.com/alsdede/nubank-clone-app/blob/master/src/assets/nubank1.gif" width="250px" />
</p>



- [React Native](http://facebook.github.io/react-native/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/)
- Animated
<!-- GETTING STARTED -->




### Install
1. Download or clone repository
2. cd into this project directory
3. npm install or yarn install  (download dependencies)
4. Run react-native run-android or react native run-ios

#### Config Android
Config Gesture Handler
```java
// ...
import com.facebook.react.ReactActivity;
// Import
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
```
```java
public class MainActivity extends ReactActivity {
  @Override
  protected String getMainComponentName() { ... }
  // Método adicionado
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
        return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
}
```
