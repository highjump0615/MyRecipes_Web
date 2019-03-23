My Recipes Web
======
> Angular web; Recipe App with shopping lists and cooking tips etc

## Overview
Compatible with [My Recipes Mobile](https://github.com/highjump0615/MyRecipes)

### Main Features
- Manage recipes  
Add, Update, Remove, ...  
- Manage ingredients for recipes  
  - Auto adding to all ingredient list  
  - Select ingredients from list when adding a new recipe
- Menu management  
...  
 
## Techniques   
AngularJS v5.2.0  
### 1. UI Implementation  
Used [Bootstrap](https://getbootstrap.com) v4.1.3 as the overall style
#### 1.1 Implement UI pages based on Flexbox layout
#### 1.2 Custom components  
- Checkbox ``<app-check-box>``  
Checkboxes for showing validation status in Signup pages
- Combobox ``<app-combo-box>``  
Combobox with text input  
  - Recipe create page  
- Expandable menu item ``<app-expand-menu-item>``  
Implemented collapse/open animation with jQuery ``slideToggle()``
- Star rate ``<app-star-rate>``  
Showing or selecting stars for rate  
- Horizontal scroll container ``<app-hscroll-container>``  
Horizontal scroll conainer with scroll buttons on both sides
- Dialogs  
  - Simple Dialog ``<app-error-dialog>``  
  Simple alert dialog for error notice  
- Image Uploader ``<app-image-uploader>``  
Integrated ``<input type="file">`` for selecting images  
  - Can set any default content when no image selected  
- Sidebar menu item ``<app-sidebar-menu-item>``  
Menu items of sidebar of main page  
- Spinner overlay ``<app-spinner-overlay>``  
Loading overlay mask to show progress  
  
### 2. Function Implementation
#### 2.1 Auth guard
``AuthGuard`` in *app/guards/auth.guard.ts*  
- Redirect to log in page when not authenticated  
- Redirect to home page when visits log in page with authenticated  

#### 2.2 Db structure
```
|
+-- allergies
|  |
|  +-- {index}
|
+-- cuisines
|  |
|  +-- {index}
|
+-- dislikes
|  |
|  +-- {index}
|    
+-- userAllergies
|  |
|  +-- {userId}
|     |
|     +-- {allergyIndex}: true
|
+-- userDiets
|  |
|  +-- {userId}
|     |
|     +-- {cuisineIndex}: true
|
+-- userDislikes
|  |
|  +-- {userId}
|     |
|     +-- {dislikeIndex}: true
|
+-- userFavouriteCuisines
|  |
|  +-- {userId}
|     |
|     +-- {cuisineIndex}: true
|
+-- users
   |
   +-- {id}
```

### 3. Code tricks  
#### Using Angular Material [Overlay](https://v5.material.angular.io/cdk/overlay/overview) and [Portal](https://v5.material.angular.io/cdk/portal/overview) to implement full screen loading mask  
```typescript  
@Injectable()
export class SpinnerOverlayService {

  private overlayRef: OverlayRef = null;

  constructor(private overlay: Overlay) { }

  public show(message = '') {
    // Returns an OverlayRef (which is a PortalHost)

    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create();

      // Create ComponentPortal that can be attached to a PortalHost
      const spinnerOverlayPortal = new ComponentPortal(SpinnerOverlayComponent);
      this.overlayRef.attach(spinnerOverlayPortal); // Attach ComponentPortal to PortalHost
    }
  }

  public hide() {
    if (!!this.overlayRef) {
      this.overlayRef.detach();
      this.overlayRef = null;
    }
  }
}
```  

### 4. Third-Party Libraries
#### 4.1 [Firebase JS SDK](https://github.com/firebase/firebase-js-sdk) v5.7.2  
Main backend & database for the web app

#### 4.2 [Webstorage services for Angular](https://github.com/dscheerens/ngx-webstorage-service) v3.1.3
Save logged in user information & onboard flag  

#### 4.3 [Angular Material](https://github.com/angular/material2) v5.2.5  
Overlay, Portal  


## Need to Improve
Complete the features
