# static html landing/oldal kipakolas

## kiegészítő infók
* static mappa tartalma compile és generate esetében egy az egyben átmásolásra kerül a megfelelő helyre
  * generate esetén a /dist mappába
* /static/hack/ -ben benne van mindenféle js, css, font és asset amit Annamari használt static buildnél
* /static/index3.html-ben van az amit Annamari lebuildelt static html landingnek
  * ennek az a problélmái:
    * nem responsive sem a carousel sem semmi
      * a theme a resolutionslider jquery plugint használja
    * linkek nem jók rajta
    * menü nem jó
    *  vanank még nem jó szövegek
    
## hogyan 

### 1. build folyamatba beillesztés
:exclamation: __ez az a use case amikor a browserben direktbe a landinget töltjük be__

package.json-ben a script-ek közé lehet ilyet csinálni: 
 ```
   "scripts": {
   ... 
   "postgenerate:develop": "rm ./dist/index.html && mv ./dist/index3.html ./dist/index.html"
   ...
   } 
```
 * ez gyakorlatilag annyit mond, hogy az npm run generate:develop után ezt még futtasd le 
 * a script azt csinálja, hogy a vue által generált index.html-t ami a landing lenne kidobja és beteszi a helyére a statikus buildet

 
 ### 2. vue/nuxt oldalon illesztés
 :exclamation: __ez az a usecase amikor egy belső oldalról jövök vissza a landingre__
 
 (vagy mert direktbe azt töltöttem be és onnan megyek tovább, vagy mert oda navigáltam és most indulok vissza)
 * pages/index.vue-ba kell ezt betenni
 ``` javascript
 created() {
   if (process.client) { //ez azért kell, mert generate/ssr/server térben nincs window és elszáll
     window.location.reload();
   }
 }
 ```
 * :exclamation: _ezt a kódot emlékezetből írtam, lehet benne elütés, értelesen kezeld_
 * nekem dev módban kicsit furán működött
   * ha gyorsan váltottam vissza, akkor nem működött, de ha vártam kicsit akkor jó volt
     * godnolom dev modeban hmr miatt cache valami
 * github pagesen viszont hibátlanul megy ez a megoldás  
 
 
## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
